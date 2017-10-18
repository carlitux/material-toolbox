// @flow
import * as React from 'react';
import classnames from 'classnames';

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
  component: Component,
  textStyle,
  adjustMargin,
  className,
  ...rest
}: Props) => {
  const rootClassName = classnames(`mdc-typography--${textStyle}`, className, {
    'mdc-typography--adjust-margin': adjustMargin,
  });
  return <Component {...rest} className={rootClassName} />;
};

Text.defaultProps = {
  component: 'span', // eslint-disable-line
};

export default Text;
