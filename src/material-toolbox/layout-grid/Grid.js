// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string,
  align?: 'left' | 'right',
  fixed?: boolean,
};

const Grid = ({ className, fixed, align, ...rest }: Props) => {
  const props = {
    ...rest,
    className: classnames('mdc-layout-grid', className, {
      'mdc-layout-grid--fixed-column-width': fixed,
      [`mdc-layout-grid--align-${align || ''}`]: align,
    }),
  };

  return <div {...props} />;
};

Grid.defaultProps = {
  fixed: false,
  align: undefined,
  className: undefined,
};

export default Grid;
