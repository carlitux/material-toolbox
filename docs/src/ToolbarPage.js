// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button } from 'material-toolbox/button';
import { List, ListItem } from 'material-toolbox/list';
import { Menu, MenuItem } from 'material-toolbox/menu';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import {
  Toolbar,
  ToolbarIcon,
  ToolbarSection,
  ToolbarTitle,
  ToolbarRow,
  ToolbarFixedAdjust,
} from 'material-toolbox/toolbar';`;
const onChangeFlexible = '(data: {}) => void';

export default class MenuPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Toolbar
        </Text>

        <Text component="h2" textStyle="headline">
          Toolbar components are React wrappers of mdc-toolbar component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/toolbars.html"
            target="_blank">
            Material Design guidelines: Toolbars
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/toolbar/"
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
          ToolbarIcon
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
              <td>isMenu</td>
              <td>boolean</td>
              <td />
              <td />
              <td>add menu styles icon</td>
            </tr>
            <tr>
              <td>tag</td>
              <td>string: a, span, button</td>
              <td>a</td>
              <td />
              <td>html tag that will be used to render the component</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          ToolbarTitle
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
              <td>label</td>
              <td>string</td>
              <td />
              <td />
              <td>label text used to render component</td>
            </tr>
            <tr>
              <td>component</td>
              <td>React$ComponentType&lt;any&gt; | string</td>
              <td>span</td>
              <td />
              <td>component that will be rendered</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          ToolbarSection
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
              <td>align</td>
              <td>string: start, end</td>
              <td />
              <td>✔</td>
              <td>Used to align section</td>
            </tr>
            <tr>
              <td>shrink</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Shink the section.</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          ToolbarRow
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
              <td>children</td>
              <td>Only allow ToolbarSection</td>
              <td />
              <td>✔</td>
              <td>Allowed components as children</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          ToolbarFixedAdjust
        </Text>

        <Text component="h3" textStyle="title">
          Toolbar
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
              <td>children</td>
              <td>Only allow ToolbarRow</td>
              <td />
              <td>✔</td>
              <td>Allowed components as children</td>
            </tr>
            <tr>
              <td>fixed</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Set a toolbar fixed</td>
            </tr>
            <tr>
              <td>waterfall</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Set waterfall effect to fixed toolbar</td>
            </tr>
            <tr>
              <td>lastRow</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Set fixed last row in flexible toolbar</td>
            </tr>
            <tr>
              <td>default</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Set the default flexible behaviour</td>
            </tr>
            <tr>
              <td>onChangeFlexible</td>
              <td>{onChangeFlexible}</td>
              <td />
              <td />
              <td>Notify the value of flexible toolbar changes</td>
            </tr>
            <tr>
              <td>parent</td>
              <td>Parent container</td>
              <td />
              <td>Required with title and adjust fields if flexible toolbar</td>
              <td>Parent that refs to title and adjust components</td>
            </tr>
          </tbody>
        </table>

        <div className="toolbar-example">
          <h2>
            Normal Toolbar <button type="button">Toggle RTL</button>
          </h2>
          <iframe
            title="Normal Toolbar"
            className="demo-container"
            src="./default-toolbar.html"
            width="320"
            height="600"
          />
        </div>

        <div className="toolbar-example">
          <h2>
            Fixed Toolbar <button type="button">Toggle RTL</button>
          </h2>
          <iframe
            title="Fixed Toolbar"
            className="demo-container"
            src="./fixed-toolbar.html"
            width="320"
            height="600"
          />
        </div>

        <div className="toolbar-example">
          <h2>
            Fixed Toolbar with Menu <button type="button">Toggle RTL</button>
          </h2>
          <iframe
            title="Fixed Toolbar with Menu"
            className="demo-container"
            src="./fixed-menu-toolbar.html"
            width="320"
            height="600"
          />
        </div>

        <div className="toolbar-example">
          <h2>
            Waterfall Toolbar <button type="button">Toggle RTL</button>
          </h2>
          <iframe
            title="Waterfall Toolbar"
            className="demo-container"
            src="./waterfall-toolbar.html"
            width="320"
            height="600"
          />
        </div>

        <div className="toolbar-example">
          <h2>
            Default Flexible Toolbar <button type="button">Toggle RTL</button>
          </h2>
          <iframe
            title="Default Flexible Toolbar"
            className="demo-container"
            src="./default-flexible-toolbar.html"
            width="320"
            height="600"
          />
        </div>

        <div className="toolbar-example">
          <h2>
            Waterfall Flexible Toolbar <button type="button">Toggle RTL</button>
          </h2>
          <iframe
            title="Waterfall Flexible Toolbar"
            className="demo-container"
            src="./waterfall-flexible-toolbar.html"
            width="320"
            height="600"
          />
        </div>

        <div className="toolbar-example">
          <h2>
            Waterfall Toolbar Fix Last Row{' '}
            <button type="button">Toggle RTL</button>
          </h2>
          <iframe
            title="Waterfall Toolbar Fix Toolbar"
            className="demo-container"
            src="./last-flexible-toolbar.html"
            width="320"
            height="600"
          />
        </div>
      </LayoutCell>
    );
  }
}
