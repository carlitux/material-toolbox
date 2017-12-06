// @flow
/* eslint-disable */
import React from 'react';

import { Text } from 'material-toolbox/typography';
import { SimpleMenu, SimpleMenuItem } from 'material-toolbox/menu/simple';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarSection,
  ToolbarTitle,
  ToolbarRow,
  ToolbarFixedAdjust,
} from 'material-toolbox/toolbar';
/* eslint-enable */
import './styles.scss';

type State = {
  show: boolean,
};

// eslint-disable-next-line
export default class FixedToolbarApp extends React.Component<{}, State> {
  state = {
    show: false,
  };

  handleCancel = () => {
    this.setState({ show: false });
  };

  handleClick = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarIcon className="material-icons" isMenu>
                menu
              </ToolbarIcon>
              <ToolbarTitle label="Title" />
            </ToolbarSection>
            <ToolbarSection align="end">
              <ToolbarIcon
                className="material-icons"
                aria-label="Download"
                alt="Download">
                file_download
              </ToolbarIcon>
              <ToolbarIcon
                className="material-icons"
                aria-label="Print this page"
                alt="Print this page">
                print
              </ToolbarIcon>
              <ToolbarIcon
                className="material-icons"
                aria-label="More"
                alt="More"
                onClick={this.handleClick}>
                more_vert
              </ToolbarIcon>
              <div className="mdc-menu-anchor">
                <SimpleMenu
                  onSelect={() => {}}
                  onCancel={this.handleCancel}
                  show={this.state.show}>
                  <SimpleMenuItem>Back</SimpleMenuItem>
                  <SimpleMenuItem>Forward</SimpleMenuItem>
                  <SimpleMenuItem>Reload</SimpleMenuItem>
                  <SimpleMenuItem devider />
                  <SimpleMenuItem>Save As</SimpleMenuItem>
                </SimpleMenu>
              </div>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarFixedAdjust>
          <main className="demo-content">
            <Text component="div" textStyle="body1">
              <p className="demo-paragraph">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est.
              </p>
              <p className="demo-paragraph">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est.
              </p>
              <p className="demo-paragraph">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est.
              </p>
            </Text>
          </main>
        </ToolbarFixedAdjust>
      </div>
    );
  }
}
