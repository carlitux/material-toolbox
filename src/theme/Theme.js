// @flow
import * as React from 'react';
import classnames from 'classnames';
import styles from '@material/theme/mdc-theme.scss';

type Props = {
  children: React.Node,
  className: string,
  theme: null | 'primary' | 'secondary' | 'background',
  themeVariant: null | 'light' | 'dark',
  textStyle: null | 'primary' | 'secondary' | 'hint' | 'disabled' | 'icon',
  textVariant: null | 'light' | 'dark',
  textOn:
    | null
    | 'background'
    | 'dark'
    | 'light'
    | 'primary'
    | 'primary-light'
    | 'primary-dark'
    | 'secondary'
    | 'secondary-light'
    | 'secondary-dark',
};

const Theme = ({
  className,
  theme,
  themeVariant,
  children,
  textStyle,
  textVariant,
  textOn,
  ...rest
}: Props) => {
  const props = {
    ...rest,
    className: classnames(className, {
      // Background classes
      [styles['mdc-theme--background']]: theme === 'background',
      [styles[`mdc-theme--${theme || ''}-bg`]]:
        theme && theme !== 'background' && !themeVariant,
      [styles[`mdc-theme--${theme || ''}-${themeVariant || ''}-bg`]]:
        theme && themeVariant && theme !== 'background',
      // Text primary and secondary with variants
      [styles[`mdc-theme--${textStyle || ''}`]]:
        textStyle && !textVariant && !textOn,
      [styles[`mdc-theme--${textStyle || ''}-${textVariant || ''}`]]:
        textStyle &&
        textVariant &&
        !textOn &&
        (textStyle === 'primary' || textStyle === 'secondary'),
      // Text on some background
      [styles[`mdc-theme--text-${textStyle || ''}-on-${textOn || ''}`]]:
        textStyle && textOn,
    }),
  };

  if (children == null || Array.isArray(children)) {
    return React.Children.map(children, child => {
      const newClassName = classnames(props.className, child.props.className);
      return React.cloneElement(child, { ...props, className: newClassName });
    });
  }

  // $FlowFixMe
  const newClassName = classnames(props.className, children.props.className);
  // $FlowFixMe
  return React.cloneElement(children, { ...props, className: newClassName });
};

export default Theme;
