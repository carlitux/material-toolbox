// @flow
import * as React from 'react';
import classnames from 'classnames';

import Inner from './Inner';
import styles from './styles.scss';

type Props = {
  children: React.Element<typeof Inner>,
  className: ?string,
  align: null | 'left' | 'right',
  fixed: boolean,
};

const Grid = ({ children, className, fixed, align, ...rest }: Props) => {
  const props = {
    ...rest,
    className: classnames(styles['mdc-layout-grid'], className, align, {
      [styles['mdc-layout-grid--fixed-column-width']]: fixed,
      [styles[`mdc-layout-grid--align-${align || ''}`]]: align,
    }),
  };

  return (
    <div {...props}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  fixed: false,
  align: null,
  className: null,
};

export default Grid;