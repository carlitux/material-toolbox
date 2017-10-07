// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from '@material/drawer/mdc-drawer.scss';

type Props = {
  children: React.Node,
  className: string,
  type: 'temporary' | 'persistent' | 'permanent',
};

const DrawerHeader = ({ type, children, className, ...rest }: Props) => {
  const rootClassName = classnames(
    className,
    styles[`mdc-${type}-drawer__header`],
  );
  return (
    <header {...rest} className={rootClassName}>
      <div className={styles[`mdc-${type}-drawer__header-content`]}>
        {children}
      </div>
    </header>
  );
};

export default DrawerHeader;
