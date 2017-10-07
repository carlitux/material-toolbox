// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from '@material/layout-grid/mdc-layout-grid.scss';

type phoneCols = null | 1 | 2 | 3 | 4;
type tabletCols = phoneCols | 5 | 6 | 7 | 8;
type desktopCols = tabletCols | 9 | 10 | 11 | 12;

type Props = {
  align: null | 'top' | 'middle' | 'bottom',
  className: ?string,
  span: desktopCols,
  order: desktopCols,
  phone: phoneCols,
  tablet: tabletCols,
  desktop: desktopCols,
};

const BASE = 'mdc-layout-grid__cell';

const Cell = ({
  align,
  className,
  span,
  order,
  phone,
  tablet,
  desktop,
  ...rest
}: Props) => (
  <div
    className={classnames(
      styles[BASE],
      {
        [styles[`${BASE}--span-${span || ''}`]]: span,
        [styles[`${BASE}--span-${tablet || ''}-tablet`]]: tablet,
        [styles[`${BASE}--span-${phone || ''}-phone`]]: phone,
        [styles[`${BASE}--span-${desktop || ''}-desktop`]]: desktop,
        [styles[`${BASE}--order-${order || ''}`]]: order,
        [styles[`${BASE}--align-${align || ''}`]]: align,
      },
      className,
    )}
    {...rest}
  />
);

Cell.defaultProps = {
  align: null,
  className: null,
  desktop: null,
  tablet: null,
  phone: null,
  order: null,
  span: null,
};

export default Cell;
