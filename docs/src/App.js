// @flow
/* eslint-disable */
import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import { LayoutGrid, LayoutInner, LayoutCell } from 'material-toolbox/layout-grid';
import { PermanentDrawer, DrawerContent } from 'material-toolbox/drawer';
import { List, ListItem } from 'material-toolbox/list';
// import Ripple from 'material-toolbox/ripple';
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
import LayoutGridPage from './LayoutGridPage';
import RipplesPage from './RipplesPage';
import ElevationPage from './ElevationPage';
import MainNav from './MainNav';
import DrawerPage from './DrawerPage';
import ButtonPage from './ButtonPage';
import FABPage from './FABPage';
import IconTogglePage from './IconTogglePage';
import styles from './styles.scss';

type State = {
  adjustFixedStyle: { [string]: any },
  titleStyle: { [string]: any },
};

export default class App extends React.Component<{}, State> {
  state = {
    adjustFixedStyle: {},
    titleStyle: {},
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
            <PermanentDrawer>
              <DrawerContent>
                <MainNav />
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
                  <Route path="/layout-grid" component={LayoutGridPage} />
                  <Route path="/ripples" component={RipplesPage} />
                  <Route path="/elevation" component={ElevationPage} />
                  <Route path="/drawers" component={DrawerPage} />
                  <Route exact path="/buttons" component={ButtonPage} />
                  <Route path="/buttons/floating" component={FABPage} />
                  <Route path="/buttons/icons" component={IconTogglePage} />
                </LayoutInner>
              </LayoutGrid>
            </div>
          </main>
        </ToolbarFixedAdjust>
      </div>
    );
  }
}
