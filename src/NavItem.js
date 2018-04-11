// @flow
import * as React from 'react';
import { Route, Link } from 'react-router-dom'; // eslint-disable-line

import ListItem from './material-toolbox/list/Item';

type Props = {
  to: string,
  label: string,
  children?: React.Node,
};

const NavItem = ({ to, label, children }: Props) => (
  <Route exact path={to}>
    {({ match }) => (
      <ListItem component={Link} to={to} selected={!!match}>
        {children}
        {label}
      </ListItem>
    )}
  </Route>
);

NavItem.defaultProps = {
  children: undefined,
};

export default NavItem;
