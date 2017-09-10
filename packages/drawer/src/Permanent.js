// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

type Props = {
  children: React.Node,
};

const PermanentDrawer = ({ children }: Props) => {
  const className = classnames(
    styles['mdc-permanent-drawer'],
    styles['mdc-typography'],
  );
  return (
    <nav className={className}>
      <div className={styles['mdc-permanent-drawer__content']}>
        {children}
      </div>
    </nav>
  );
};

export default PermanentDrawer;
