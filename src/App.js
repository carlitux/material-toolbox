// @flow
import * as React from 'react';
import Route from 'react-router/Route';

/* eslint-disable */
import { LayoutGrid, LayoutInner, LayoutCell } from '@mcw/layout-grid';
import { TypographyWrapper, TypographyElement } from '@mcw/typography';
import { TemporaryDrawer, DrawerHeader, DrawerContent } from '@mcw/drawer';
import {
  ToolbarTitle,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarFixedAdjust,
  Toolbar,
} from '@mcw/toolbar';
/* eslint-enable */

import HomePage from './HomePage';
import styles from './styles.scss';

type State = {
  adjustFixedStyle: { [string]: any },
  titleStyle: { [string]: any },
  drawerIsOpen: boolean,
};

export default class App extends React.PureComponent<{}, State> {
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

  handleClickMenuIcon = () => {
    this.setState({
      drawerIsOpen: !this.state.drawerIsOpen,
    });
  };

  handleCloseDrawer = () => {
    this.setState({ drawerIsOpen: false });
  };

  render() {
    return (
      <div className={styles['demo-body']}>
        <TemporaryDrawer
          open={this.state.drawerIsOpen}
          onClose={this.handleCloseDrawer}>
          <DrawerHeader type="temporary">Header content goes here</DrawerHeader>
          <DrawerContent type="temporary">
            <div>Content here</div>
          </DrawerContent>
        </TemporaryDrawer>
        <div className={styles['demo-content']}>
          <Toolbar
            fixed
            waterfall
            onUpdateTitleStyle={this.handleUpdateTitleStyle}
            onUpdateFixedToolbar={this.handleUpdateFixedToolbar}>
            <ToolbarRow>
              <ToolbarSection align="start">
                <ToolbarIcon
                  isMenu
                  icon="menu"
                  onClick={this.handleClickMenuIcon}
                />
                <ToolbarTitle
                  label="React Material Component Web"
                  style={this.state.titleStyle}
                />
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>

          <ToolbarFixedAdjust style={this.state.adjustFixedStyle}>
            <TypographyWrapper>
              <LayoutGrid>
                <LayoutInner>
                  <Route exact path="/" component={HomePage} />
                </LayoutInner>
              </LayoutGrid>
            </TypographyWrapper>
          </ToolbarFixedAdjust>
        </div>
      </div>
    );
  }
}
