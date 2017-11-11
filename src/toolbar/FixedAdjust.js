// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Element<any>,
  className: string,
};

const ToolbarFixedAdjust = ({ children, className }: Props) => {
  const composedClassName = classnames(
    'mdc-toolbar-fixed-adjust',
    className,
    children ? children.props.className : '',
  );

  return React.cloneElement(children, {
    ...children.props,
    className: composedClassName,
  });
};

export default ToolbarFixedAdjust;
