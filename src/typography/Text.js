// @flow
import * as React from 'react';
import classnames from 'classnames';
import styles from '@material/typography/mdc-typography.scss';

type Props = {
  component: React.ComponentType<any>,
  className: string,
  adjustMargin: boolean,
  textStyle:
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

const Text = ({
  component,
  textStyle,
  adjustMargin,
  className,
  ...rest
}: Props) => {
  const rootClassName = classnames(
    styles[`mdc-typography--${textStyle}`],
    className,
    {
      'mdc-typography--adjust-margin': adjustMargin,
    },
  );
  return React.createElement(component, { ...rest, className: rootClassName });
};

Text.defaultProps = {
  component: 'span',
};

export default Text;
