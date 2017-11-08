// @flow
/* eslint-disable */
import React from 'react';

import { Text } from 'material-toolbox/typography';
import Elevation from 'material-toolbox/elevation';
import { PermanentDrawer, DrawerContent } from 'material-toolbox/drawer';
import { ListGroup, List, ListItem, ListDetail } from 'material-toolbox/list';
import { Toolbar, ToolbarIcon, ToolbarSection, ToolbarTitle, ToolbarRow, ToolbarFixedAdjust } from 'material-toolbox/toolbar';
/* eslint-enable */
import './styles.scss';

type State = {
  wide: boolean,
  tall: boolean,
};

export default class PermanentDrawerApp extends React.Component<{}, State> {
  state = {
    wide: false,
    tall: false,
  };

  toogleWide = () => {
    this.setState(state => ({
      wide: !state.wide,
    }));
  };

  toogleTall = () => {
    this.setState(state => ({
      tall: !state.tall,
    }));
  };

  render() {
    return (
      <div>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarIcon icon="arrow_back" isMenu />
              <ToolbarTitle label="Permanent Drawer Below Toolbar" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarFixedAdjust>
          <main className="demo-content">
            <PermanentDrawer>
              <DrawerContent>
                <ListGroup>
                  <List component="nav">
                    <ListItem
                      component="a"
                      href="#"
                      className="mdc-permanent-drawer--selected">
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
            </PermanentDrawer>
            <div className="demo-main">
              <Text component="h1" textStyle="display1">
                Permanent Drawer
              </Text>
              <Text component="p" textStyle="body1">
                It sits to the left of this content.
              </Text>
              <div className="extra-content-wrapper">
                <button onClick={this.toogleWide}>
                  Toggle extra-tall content
                </button>
                {this.state.wide && (
                  <Elevation elevation={2}>
                    <div id="extra-wide-content">&nbsp;</div>
                  </Elevation>
                )}
              </div>
              <div className="extra-content-wrapper">
                <button onClick={this.toogleTall}>
                  Toggle extra-tall content
                </button>
                {this.state.tall && (
                  <Elevation elevation={2}>
                    <div id="extra-tall-content">&nbsp;</div>
                  </Elevation>
                )}
              </div>
            </div>
          </main>
        </ToolbarFixedAdjust>
      </div>
    );
  }
}
