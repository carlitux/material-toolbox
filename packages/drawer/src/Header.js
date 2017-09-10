// @flow
import * as React from 'react';

import styles from './styles.scss';

type Props = {
  children: React.Node,
  type: 'temporary' | 'persistent' | 'permanent',
};

const DrawerHeader = ({ type, children }: Props) =>
  <header className={styles[`mdc-${type}-drawer__header`]}>
    <div className={styles[`mdc-${type}-drawer__header-content`]}>
      {children}
    </div>
  </header>;

export default DrawerHeader;
