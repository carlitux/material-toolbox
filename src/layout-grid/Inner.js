// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
};

const Inner = ({ children }: Props) => (
  <div className="mdc-layout-grid__inner">{children}</div>
);

export default Inner;
