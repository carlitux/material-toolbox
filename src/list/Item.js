// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
  component?: React.ComponentType<any>,
};

const ListItem = ({ children, component, ...rest }: Props) =>
  React.createElement(
    component,
    {
      ...rest,
      className: 'mdc-list-item',
    },
    children,
  );

ListItem.defaultProps = {
  component: 'li',
};

export default ListItem;
