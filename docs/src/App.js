// @flow
/* eslint-disable */
import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import { LayoutGrid, LayoutInner, LayoutCell } from 'material-toolbox/layout-grid';
import { PermanentDrawer, DrawerHeader, DrawerContent } from 'material-toolbox/drawer';
import { List, ListItem } from 'material-toolbox/list';
import Theme from 'material-toolbox/theme';
import {
  ToolbarTitle,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarFixedAdjust,
  Toolbar,
} from 'material-toolbox/toolbar';
/* eslint-enable */

import HomePage from './HomePage';
import AnimationPage from './AnimationPage';
import TypographyPage from './TypographyPage';
import ThemePage from './ThemePage';
import Hero from './Hero';
import ListsPage from './ListsPage';
import styles from './styles.scss';

type State = {
  adjustFixedStyle: { [string]: any },
  titleStyle: { [string]: any },
  drawerIsOpen: boolean,
};

export default class App extends React.Component<{}, State> {
  state = {
    adjustFixedStyle: {},
    titleStyle: {},
    drawerIsOpen: false,
  };

  handleUpdateFixedToolbar = (property: string, value: number) => {
    this.setState({
      adjustFixedStyle: { ...this.state.adjustFixedStyle, [property]: value },
    });
  };

  handleUpdateTitleStyle = (property: string, value: number) => {
    this.setState({
      titleStyle: { ...this.state.titleStyle, [property]: value },
    });
  };

  handleCloseDrawer = () => {
    this.setState({ drawerIsOpen: false });
  };

  render() {
    return (
      <div className={styles['demo-body']}>
        <Toolbar
          fixed
          onUpdateTitleStyle={this.handleUpdateTitleStyle}
          onUpdateFixedToolbar={this.handleUpdateFixedToolbar}>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarTitle
                label="React Material Component Web"
                style={this.state.titleStyle}
              />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <ToolbarFixedAdjust>
          <main className="demo-content">
            <PermanentDrawer
              open={this.state.drawerIsOpen}
              onClose={this.handleCloseDrawer}>
              <DrawerContent type="permanent">
                <List component="nav">
                  <ListItem to="/" component={Link}>
                    Home
                  </ListItem>
                  <ListItem to="/animation" component={Link}>
                    Animation
                  </ListItem>
                  <ListItem disabled>Floating Action Buttons</ListItem>
                  <ListItem disabled>Icon toggle Buttons</ListItem>
                  <ListItem disabled>Cards</ListItem>
                  <ListItem disabled>Dialogs</ListItem>
                  <ListItem disabled>Drawers</ListItem>
                  <ListItem disabled>Elevations</ListItem>
                  <ListItem disabled>Grid List</ListItem>
                  <ListItem disabled>Checkboxes</ListItem>
                  <ListItem disabled>Form Fields</ListItem>
                  <ListItem disabled>Radio Buttons</ListItem>
                  <ListItem disabled>Select Menus</ListItem>
                  <ListItem disabled>Sliders</ListItem>
                  <ListItem disabled>Switches</ListItem>
                  <ListItem disabled>Text Fields</ListItem>
                  <ListItem disabled>Layout Grids</ListItem>
                  <ListItem disabled>Linear Progress</ListItem>
                  <ListItem to="/lists" component={Link}>
                    Lists
                  </ListItem>
                  <ListItem disabled>Menus</ListItem>
                  <ListItem disabled>Ripples</ListItem>
                  <ListItem disabled>RTL</ListItem>
                  <ListItem disabled>Snackbars</ListItem>
                  <ListItem disabled>Tabs</ListItem>
                  <ListItem to="/theme" component={Link}>
                    Theme
                  </ListItem>
                  <ListItem disabled>Toolbars</ListItem>
                  <ListItem to="/typography" component={Link}>
                    Typography
                  </ListItem>
                </List>
              </DrawerContent>
            </PermanentDrawer>
            <div>
              <Route exact path="/" component={Hero} />
              <LayoutGrid>
                <LayoutInner>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/animation" component={AnimationPage} />
                  <Route path="/typography" component={TypographyPage} />
                  <Route path="/theme" component={ThemePage} />
                  <Route path="/lists" component={ListsPage} />
                </LayoutInner>
              </LayoutGrid>
            </div>
          </main>
        </ToolbarFixedAdjust>
      </div>
    );
  }
}
