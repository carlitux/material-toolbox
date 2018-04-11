// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const GridTile = ({ children, className }: Props) => (
  <li className={classnames(className, 'mdc-grid-tile')}>{children}</li>
);

export default GridTile;
