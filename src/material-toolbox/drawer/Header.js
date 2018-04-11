// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const DrawerHeader = ({ children, className, ...rest }: Props) => {
  const rootClassName = classnames(className, 'mdc-drawer__header');
  return (
    <header {...rest} className={rootClassName}>
      <div className="dc-drawer__header-content">{children}</div>
    </header>
  );
};

export default DrawerHeader;
