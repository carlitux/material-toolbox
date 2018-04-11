// @flow
import * as React from 'react';

import { Link } from 'react-router-dom'; // eslint-disable-line

import List from './material-toolbox/list/List';
import ListDetail from './material-toolbox/list/Detail';
import ListItem from './material-toolbox/list/Item';

import NavItem from './NavItem';

const MainNav = () => (
  <List component="nav">
    <NavItem to="/" label="Home" />
    <NavItem to="/animation" label="Animation" />
    <ListItem component={Link} to="/input-controls/form-fields">
      Inputs and Controls
    </ListItem>
    <NavItem to="/input-controls/checkboxes" label="Checkboxes">
      <ListDetail component="span" />
    </NavItem>
    <NavItem to="/input-controls/form-fields" label="Form Fields">
      <ListDetail component="span" />
    </NavItem>
    <NavItem to="/input-controls/text-fields" label="Text Field">
      <ListDetail component="span" />
    </NavItem>
    <NavItem to="/ripples" label="Ripples" />
    <NavItem to="/snackbar" label="Snackbar" />
    <NavItem to="/tabs" label="Tabs" />
  </List>
);

export default MainNav;
