// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const GridTileIcon = ({ children, className, ...rest }: Props) => (
  <i {...rest} className={classnames(className, 'mdc-grid-tile__icon')}>
    {children}
  </i>
);

export default GridTileIcon;
