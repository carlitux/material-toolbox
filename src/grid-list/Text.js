// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  support: boolean,
};

const GridTileText = ({ children, className, support, ...rest }: Props) => (
  <span
    {...rest}
    className={classnames(className, {
      'mdc-grid-tile__title': !support,
      'mdc-grid-tile__support-text': support,
    })}>
    {children}
  </span>
);

export default GridTileText;
