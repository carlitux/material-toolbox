// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  className: string,
  src: string,
};

const GridTileContent = ({ className, src, ...rest }: Props) => {
  const Component = src ? 'img' : 'div';

  return (
    <Component
      {...rest}
      src={src}
      className={classnames(className, 'mdc-grid-tile__primary-content')}
    />
  );
};

export default GridTileContent;
