// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  drawerType: 'temporary' | 'persistent' | 'permanent',
};

const DrawerContent = ({ drawerType, children, className, ...rest }: Props) => {
  const composedClassName = classnames(
    className,
    `mdc-${drawerType}-drawer__content`,
  );

  return React.Children.map(children, child => (
    <child.type {...child.props} className={composedClassName} />
  ));
};

export default DrawerContent;
