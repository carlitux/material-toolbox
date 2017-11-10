// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  type: 'temporary' | 'persistent' | 'permanent',
};

const DrawerContent = ({ type, children, className, ...rest }: Props) => {
  const composedClassName = classnames(
    className,
    `mdc-${type}-drawer__content`,
  );

  return React.Children.map(children, child => (
    <child.type {...child.props} className={composedClassName} />
  ));
};

export default DrawerContent;
