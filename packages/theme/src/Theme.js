// @flow
import * as React from 'react';
import classnames from 'classnames';

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
      'mdc-theme--primary': textStyle === 'primary' && !textVariant && !theme,
      'mdc-theme--primary-light':
        textStyle === 'primary' && textVariant === 'light',
      'mdc-theme--primary-dark':
        textStyle === 'primary' && textVariant === 'dark',
      'mdc-theme--secondary':
        textStyle === 'secondary' && !textVariant && !theme,
      'mdc-theme--secondary-light':
        textStyle === 'secondary' && textVariant === 'light',
      'mdc-theme--secondary-dark':
        textStyle === 'secondary' && textVariant === 'dark',
      'mdc-theme--background': theme === 'background',
      'mdc-theme--primary-bg': theme === 'primary' && !themeVariant,
      'mdc-theme--primary-light-bg':
        theme === 'primary' && themeVariant === 'light',
      'mdc-theme--primary-dark-bg':
        theme === 'primary' && themeVariant === 'dark',
      'mdc-theme--secondary-bg': theme === 'secondary' && !themeVariant,
      'mdc-theme--secondary-light-bg':
        theme === 'secondary' && themeVariant === 'light',
      'mdc-theme--secondary-dark-bg':
        theme === 'secondary' && themeVariant === 'dark',
      [`mdc-theme--text-${textStyle || ''}-on-${theme || ''}`]:
        theme && textStyle && !themeVariant,
      [`mdc-theme--text-${textStyle || ''}-on-${themeVariant || ''}`]:
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
