// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button } from 'material-toolbox/button';
import { List, ListItem } from 'material-toolbox/list';
import { SimpleMenu, SimpleMenuItem } from 'material-toolbox/menu/simple';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import { SimpleMenu, SimpleMenuItem } from 'material-toolbox/menu/simple';`;
const cancelSignature = '() => void';
const selectedSignature =
  'onSelect: (index: number, item: HTMLLIElement) => void';

export default class MenuPage extends React.Component<
  {},
  {
    show: boolean,
  },
> {
  state = {
    show: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleShowMenu = () => {
    this.setState({ show: true });
  };

  handleHideMenu = () => {
    this.setState({ show: false });
  };

  handleSelect = (index: number, item: HTMLLIElement) => {
    console.log(index, item);
  };

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Simple Menu
        </Text>

        <Text component="h2" textStyle="headline">
          Simple Menu component is a React wrapper of mdc-menu component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/menus.html"
            target="_blank">
            Material Design guidelines: Menus
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/menus/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          React components
        </Text>

        <Text component="h3" textStyle="title">
          Import
        </Text>

        <Highlighter language="javascript">{importComponents}</Highlighter>

        <Text component="h3" textStyle="title">
          SimpleMenuItem
        </Text>

        <Text component="h3" textStyle="title">
          SimpleMenu
        </Text>

        <table className={styles['table-doc']}>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>devider</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true will set as devider</td>
            </tr>
          </tbody>
        </table>

        <Text component="p" textStyle="body1">
          Container component should add the className mdc-menu-anchor
        </Text>

        <table className={styles['table-doc']}>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>show</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true will display the menu</td>
            </tr>
            <tr>
              <td>onCancel</td>
              <td>{cancelSignature}</td>
              <td />
              <td />
              <td>Called with menu is closed</td>
            </tr>
            <tr>
              <td>onSelect</td>
              <td>{selectedSignature}</td>
              <td />
              <td />
              <td>Called when an item is selected.</td>
            </tr>
          </tbody>
        </table>

        <div className="mdc-menu-anchor">
          <Button buttonVariant="raised" onClick={this.handleShowMenu}>
            Reveal Menu
          </Button>
          <SimpleMenu
            onCancel={this.handleHideMenu}
            onSelect={this.handleSelect}
            show={this.state.show}
            tabIndex="-1">
            <SimpleMenuItem tabIndex="0">A Menu Item</SimpleMenuItem>
            <SimpleMenuItem tabIndex="0">Another Menu Item</SimpleMenuItem>
          </SimpleMenu>
        </div>
      </LayoutCell>
    );
  }
}
