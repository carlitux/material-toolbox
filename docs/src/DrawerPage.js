// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import {
  PermanentDrawer,
  PersistentDrawer,
  TemporaryDrawer,
  DrawerHeader,
  DrawerToolbarSpacer,
  DrawerContent,
} from 'material-toolbox/drawer';`;

export default class DrawerPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Drawer
        </Text>

        <Text component="h2" textStyle="headline">
          Drawer components are React wrappers of mdc-drawer component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/patterns/navigation-drawer.html"
            target="_blank">
            Material Design guidelines: Navigation drawer
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/drawers/"
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
          DrawerToolbarSpacer
        </Text>

        <p>Drawer toolbar spacer used to fill same space as toolbar.</p>

        <Text component="h3" textStyle="title">
          DrawerHeader
        </Text>

        <p>Drawer header container that can contain any React component.</p>

        <Text component="h3" textStyle="title">
          DrawerContent
        </Text>

        <p>Drawer content container that can contain any React component.</p>

        <Text component="h2" textStyle="title">
          PermanentDrawer
        </Text>

        <Text component="h3" textStyle="title">
          PersistentDrawer
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
              <td>onOpen</td>
              <td>function: () =&gt; void</td>
              <td />
              <td />
              <td>called when the drawer is openned</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>function: () =&gt; void</td>
              <td />
              <td />
              <td>called when the drawer is closed</td>
            </tr>
            <tr>
              <td>open</td>
              <td>boolean</td>
              <td />
              <td />
              <td>will open or close the drawer</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          TemporaryDrawer
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
              <td>onOpen</td>
              <td>function: () =&gt; void</td>
              <td />
              <td />
              <td>called when the drawer is openned</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>function: () =&gt; void</td>
              <td />
              <td />
              <td>
                called when the drawer is closed, should be used to sync open
                field.
              </td>
            </tr>
            <tr>
              <td>open</td>
              <td>boolean</td>
              <td />
              <td />
              <td>will open or close the drawer</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          Permanent Drawer Below Toolbar
        </Text>

        <iframe
          className="full-width"
          src="./permanent-drawer.html"
          title="Permanent Drawer Below Toolbar"
          frameBorder="0"
        />

        <Text component="h3" textStyle="title">
          Permanent Drawer Above Toolbar
        </Text>

        <iframe
          className="full-width"
          src="./permanent-drawer-above.html"
          title="Permanent Drawer Above Toolbar"
          frameBorder="0"
        />

        <Text component="h3" textStyle="title">
          Persistent Drawer
        </Text>

        <iframe
          className="full-width"
          src="./persistent-drawer.html"
          title="Persistent Drawer"
          frameBorder="0"
        />

        <Text component="h3" textStyle="title">
          Temporary Drawer
        </Text>

        <iframe
          className="full-width"
          src="./temporary-drawer.html"
          title="Temporary Drawer"
          frameBorder="0"
        />
      </LayoutCell>
    );
  }
}
