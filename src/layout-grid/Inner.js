// @flow
import * as React from 'react';

import Cell from './Cell';

type Props = {
  children: React.ChildrenArray<React.Element<typeof Cell>>,
};

const Inner = ({ children }: Props) => (
  <div className="mdc-layout-grid__inner">{children}</div>
);

export default Inner;
