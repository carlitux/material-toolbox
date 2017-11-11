// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  drawerType: 'temporary' | 'persistent' | 'permanent',
};

const DrawerHeader = ({ drawerType, children, className, ...rest }: Props) => {
  const rootClassName = classnames(
    className,
    `mdc-${drawerType}-drawer__header`,
  );
  return (
    <header {...rest} className={rootClassName}>
      <div className={`mdc-${drawerType}-drawer__header-content`}>
        {children}
      </div>
    </header>
  );
};

export default DrawerHeader;
