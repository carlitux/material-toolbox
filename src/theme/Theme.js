// @flow
import * as React from 'react';
import classnames from 'classnames';

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
}: Props) => {
  const composedClassName = classnames(className, {
    // Background classes
    'mdc-theme--background': theme === 'background',
    [`mdc-theme--${theme || ''}-bg`]:
      theme && theme !== 'background' && !themeVariant,
    [`mdc-theme--${theme || ''}-${themeVariant || ''}-bg`]:
      theme && themeVariant && theme !== 'background',
    // Text primary and secondary with variants
    [`mdc-theme--${textStyle || ''}`]: textStyle && !textVariant && !textOn,
    [`mdc-theme--${textStyle || ''}-${textVariant || ''}`]:
      textStyle &&
      textVariant &&
      !textOn &&
      (textStyle === 'primary' || textStyle === 'secondary'),
    // Text on some background
    [`mdc-theme--text-${textStyle || ''}-on-${textOn || ''}`]:
      textStyle && textOn,
  });

  return React.Children.map(children, child => {
    const newClassName = classnames(composedClassName, child.props.className);
    return <child.type {...child.props} className={newClassName} />;
  });
};

export default Theme;
