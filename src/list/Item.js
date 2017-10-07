// @flow
import * as React from 'react';

import styles from '@material/list/mdc-list.scss';

type Props = {
  children: React.Node,
  component: React.ComponentType<any>,
};

const ListItem = ({ children, component, ...rest }: Props) =>
  React.createElement(
    component,
    {
      ...rest,
      className: styles['mdc-list-item'],
    },
    children,
  );

ListItem.defaultProps = {
  component: 'ul',
};

export default ListItem;
