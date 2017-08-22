// @flow
import * as React from 'react';

import Cell from './Cell';
import styles from './styles.scss';

type Props = {
  children: React.ChildrenArray<React.Element<typeof Cell>>,
};

const Inner = ({ children }: Props) =>
  <div className={styles['mdc-layout-grid__inner']}>
    {children}
  </div>;

export default Inner;
