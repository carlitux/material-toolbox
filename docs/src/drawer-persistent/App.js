// @flow
/* eslint-disable */
import React from 'react';

import { Text } from 'material-toolbox/typography';
import Elevation from 'material-toolbox/elevation';
import { PersistentDrawer, DrawerContent, DrawerToolbarSpacer } from 'material-toolbox/drawer';
import { ListGroup, List, ListItem, ListDetail } from 'material-toolbox/list';
import { Toolbar, ToolbarIcon, ToolbarSection, ToolbarTitle, ToolbarRow, ToolbarFixedAdjust } from 'material-toolbox/toolbar';
/* eslint-enable */
import './styles.scss';

type State = {
  isDrawerOpen: boolean,
};

export default class PermanentDrawerApp extends React.Component<{}, State> {
  state = {
    isDrawerOpen: false,
  };

  toogleDrawer = () => {
    this.setState(state => ({
      isDrawerOpen: !state.isDrawerOpen,
    }));
  };

  handleOpen = () => {
    this.setState(state => ({
      isDrawerOpen: true,
    }));
  };

  handleClose = () => {
    this.setState(state => ({
      isDrawerOpen: false,
    }));
  };

  render() {
    return [
      <PersistentDrawer
        key="drawer"
        open={this.state.isDrawerOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}>
        <DrawerToolbarSpacer />
        <DrawerContent>
          <ListGroup>
            <List component="nav">
              <ListItem
                component="a"
                href="#"
                className="mdc-persistent-drawer--selected">
                <ListDetail className="material-icons" component="i">
                  inbox
                </ListDetail>
                Inbox
              </ListItem>
              <ListItem component="a" href="#">
                <ListDetail className="material-icons" component="i">
                  start
                </ListDetail>
                Start
              </ListItem>
              <ListItem component="a" href="#">
                <ListDetail className="material-icons" component="i">
                  send
                </ListDetail>
                Send Mail
              </ListItem>
              <ListItem component="a" href="#">
                <ListDetail className="material-icons" component="i">
                  drafts
                </ListDetail>
                Drafts
              </ListItem>
            </List>
            <ListItem devider component="hr" />
            <List component="nav">
              <ListItem component="a" href="#">
                <ListDetail className="material-icons" component="i">
                  mail
                </ListDetail>
                All Mail
              </ListItem>
              <ListItem component="a" href="#">
                <ListDetail className="material-icons" component="i">
                  delete
                </ListDetail>
                Trash
              </ListItem>
              <ListItem component="a" href="#">
                <ListDetail className="material-icons" component="i">
                  report
                </ListDetail>
                Spam
              </ListItem>
            </List>
          </ListGroup>
        </DrawerContent>
      </PersistentDrawer>,

      <div key="main" className="demo-content">
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarIcon icon="menu" isMenu onClick={this.toogleDrawer} />
              <ToolbarTitle label="Persistent Drawer" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <main className="demo-content">
          <div className="demo-main">
            <Text component="h1" textStyle="display1">
              Persistent Drawer
            </Text>
            <Text component="p" textStyle="body1">
              Click the menu icon above to open and close the drawer.
            </Text>
          </div>
        </main>
      </div>,
    ];
  }
}
