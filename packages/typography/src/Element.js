// @flow

import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

type Props = {
  component: React.ComponentType<any>,
  adjustMargin: boolean,
  mdcStyle:
    | 'display4'
    | 'display3'
    | 'display2'
    | 'display1'
    | 'headline'
    | 'title'
    | 'subheading2'
    | 'subheading1'
    | 'body2'
    | 'body1'
    | 'caption'
    | 'button',
};

const TypographyElement = ({
  component,
  mdcStyle,
  adjustMargin,
  ...rest
}: Props) => {
  const className = classnames(
    styles[`mdc-typography--${mdcStyle}`],
    rest.className,
    {
      'mdc-typography--adjust-margin': adjustMargin,
    },
  );
  return React.createElement(component, { ...rest, className });
};

TypographyElement.defaultProps = {
  component: 'span',
};

export default TypographyElement;
