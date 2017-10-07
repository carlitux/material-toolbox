// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Element<any>,
  className: string,
};

const Typography = ({ children, className }: Props) => {
  const composedClassName = classnames(
    'mdc-typography',
    className,
    children ? children.props.className : '',
  );

  return React.cloneElement(children, {
    className: composedClassName,
  });
};

export default Typography;
