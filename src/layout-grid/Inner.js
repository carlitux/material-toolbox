// @flow
import * as React from 'react';
import styles from '@material/layout-grid/mdc-layout-grid.scss';

import Cell from './Cell';

type Props = {
  children: React.ChildrenArray<React.Element<typeof Cell>>,
};

const Inner = ({ children }: Props) => (
  <div className={styles['mdc-layout-grid__inner']}>{children}</div>
);

export default Inner;
