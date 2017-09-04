// @flow
import * as React from 'react';
import Route from 'react-router/Route';

/* eslint-disable */
import { LayoutGrid, LayoutInner, LayoutCell } from '@mcw/layout-grid';
import { TypographyWrapper, TypographyElement } from '@mcw/typography';
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
import './styles.scss';

type State = {
  adjustFixedStyle: { [string]: any },
  titleStyle: { [string]: any },
};

export default class App extends React.PureComponent<{}, State> {
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
      <div>
        <Toolbar
          fixed
          waterfall
          onUpdateTitleStyle={this.handleUpdateTitleStyle}
          onUpdateFixedToolbar={this.handleUpdateFixedToolbar}>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarIcon isMenu icon="menu" />
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
    );
  }
}
