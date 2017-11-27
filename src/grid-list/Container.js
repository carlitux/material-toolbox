// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  secondary: boolean,
};

const GridTileContainer = ({
  children,
  className,
  secondary,
  ...rest
}: Props) => {
  const Component = secondary ? 'span' : 'div';
  return (
    <Component
      {...rest}
      className={classnames(className, {
        'mdc-grid-tile__primary': !secondary,
        'mdc-grid-tile__secondary': secondary,
      })}>
      {children}
    </Component>
  );
};

export default GridTileContainer;
