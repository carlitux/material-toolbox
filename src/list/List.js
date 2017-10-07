// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from '@material/list/mdc-list.scss';

type Props = {
  children: React.Node,
  dark: boolean,
  dense: boolean,
  twoLines: boolean,
  component: React.ComponentType<any>,
};

const List = ({
  children,
  dark,
  dense,
  twoLines,
  component,
  ...rest
}: Props) => {
  const rootClassName = classnames(styles['mdc-list'], {
    [styles['mdc-list--theme-dark']]: dark,
    [styles['mdc-list--dense']]: dense,
    [styles['mdc-list--two-line']]: twoLines,
  });

  return React.createElement(
    component,
    { ...rest, className: rootClassName },
    children,
  );
};

List.defaultProps = {
  component: 'ul',
};

export default List;
