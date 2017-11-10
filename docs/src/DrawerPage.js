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

const importComponents = `import { Typography, Text } from 'material-toolbox/typography';`;

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
          Typography component is a React wrapper of mdc-typography component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/style/typography.html"
            target="_blank">
            Material Design guidelines: Typography
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/typography/"
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
          Typography
        </Text>

        <p>
          Container of typography components. Every typography texts should be
          included into this component.
        </p>

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
              <td>className</td>
              <td>String</td>
              <td />
              <td />
              <td>classname of component</td>
            </tr>
          </tbody>
        </table>

        <Text component="h2" textStyle="title">
          Text
        </Text>

        <p>Container that sets the correct style</p>

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
              <td>textStyle</td>
              <td>
                String value: display4, display3, display2, display1, headline,
                title, subheading2, subheading1, body2, body1, caption, button
              </td>
              <td />
              <td>✔</td>
              <td>Style of text component.</td>
            </tr>
            <tr>
              <td>adjustMargin</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>
                Positions text, used in conjunction with font classes above
              </td>
            </tr>
            <tr>
              <td>className</td>
              <td>String</td>
              <td />
              <td />
              <td>classname of component</td>
            </tr>
            <tr>
              <td>component</td>
              <td>React.ElementType&lt;any&gt;</td>
              <td>span</td>
              <td />
              <td>Component that will be rendered</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          Permanent Drawer Below Toolbar
        </Text>

        <iframe
          className="full-width"
          src="/permanent-drawer.html"
          title="Permanent Drawer Below Toolbar"
          frameBorder="0"
        />

        <Text component="h3" textStyle="title">
          Permanent Drawer Above Toolbar
        </Text>

        <iframe
          className="full-width"
          src="/permanent-drawer-above.html"
          title="Permanent Drawer Above Toolbar"
          frameBorder="0"
        />

        <Text component="h3" textStyle="title">
          Persistent Drawer
        </Text>

        <iframe
          className="full-width"
          src="/persistent-drawer.html"
          title="Persistent Drawer"
          frameBorder="0"
        />
      </LayoutCell>
    );
  }
}
