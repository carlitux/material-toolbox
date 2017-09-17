// @flow
import * as React from 'react';
import classnames from 'classnames';
import styles from 'styles.scss';

type Props = {
  className: string,
  textStyle: null | 'primary' | 'secondary' | 'hint' | 'disabled' | 'icon',
  textVariant: null | 'light' | 'dark',
  themeVariant: null | 'light' | 'dark',
  theme: null | 'primary' | 'secondary' | 'background',
  children: React.Node,
};

const Theme = ({
  className,
  theme,
  themeVariant,
  children,
  textStyle,
  textVariant,
  ...rest
}: Props) => {
  const props = {
    ...rest,
    className: classnames(className, {
      [styles['mdc-theme--primary']]:
        textStyle === 'primary' && !textVariant && !theme,
      [styles['mdc-theme--primary-light']]:
        textStyle === 'primary' && textVariant === 'light',
      [styles['mdc-theme--primary-dark']]:
        textStyle === 'primary' && textVariant === 'dark',
      [styles['mdc-theme--secondary']]:
        textStyle === 'secondary' && !textVariant && !theme,
      [styles['mdc-theme--secondary-light']]:
        textStyle === 'secondary' && textVariant === 'light',
      [styles['mdc-theme--secondary-dark']]:
        textStyle === 'secondary' && textVariant === 'dark',
      [styles['mdc-theme--background']]: theme === 'background',
      [styles['mdc-theme--primary-bg']]: theme === 'primary' && !themeVariant,
      [styles['mdc-theme--primary-light-bg']]:
        theme === 'primary' && themeVariant === 'light',
      [styles['mdc-theme--primary-dark-bg']]:
        theme === 'primary' && themeVariant === 'dark',
      [styles['mdc-theme--secondary-bg']]:
        theme === 'secondary' && !themeVariant,
      [styles['mdc-theme--secondary-light-bg']]:
        theme === 'secondary' && themeVariant === 'light',
      [styles['mdc-theme--secondary-dark-bg']]:
        theme === 'secondary' && themeVariant === 'dark',
      [styles[`mdc-theme--text-${textStyle || ''}-on-${theme || ''}`]]:
        theme && textStyle && !themeVariant,
      [styles[`mdc-theme--text-${textStyle || ''}-on-${themeVariant || ''}`]]:
        theme && textStyle && themeVariant,
    }),
  };

  if (children == null || Array.isArray(children)) {
    return React.Children.map(children, child =>
      React.cloneElement(child, props),
    );
  }

  // $FlowFixMe
  return React.cloneElement(children, props);
};

export default Theme;
