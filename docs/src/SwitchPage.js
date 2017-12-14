// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import Switch from 'material-toolbox/switch';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import Switch from 'material-toolbox/switch';`;
const cbSignature = '() => void';

export default class SwitchPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Switch
        </Text>

        <Text component="h2" textStyle="headline">
          Switch component is React wrapper of mdc-switch component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/selection-controls.html#selection-controls-switch"
            target="_blank">
            Material Design guidelines: Switches
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/input-controls/switches/"
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
          Switch
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
              <td>id</td>
              <td>string</td>
              <td />
              <td>✔</td>
              <td>Used to create a correct component UI</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td />
              <td>✔</td>
              <td>Label to display</td>
            </tr>
          </tbody>
        </table>

        <section className="switches-example">
          <Text component="h3" textStyle="title">
            Switch on Light Theme
          </Text>

          <div className="demo-switch-wrapper">
            <Switch id="first" label="on/off" />
          </div>

          <div className="demo-switch-wrapper">
            <Switch
              id="second"
              label="custom color"
              className="demo-switch--custom"
            />
          </div>
        </section>

        <section className="switches-example">
          <Text component="h3" textStyle="title">
            Switch on Light Theme Disabled
          </Text>

          <div className="demo-switch-wrapper">
            <Switch id="third" label="on/off" disabled />
          </div>
        </section>

        <Theme textStyle="primary" textOn="primary">
          <section className="switches-example mdc-theme--dark">
            <Text component="h3" textStyle="title">
              Switch on Dark Theme
            </Text>

            <div className="demo-switch-wrapper">
              <Switch id="forth" label="on/off" />
            </div>

            <div className="demo-switch-wrapper">
              <Switch
                id="fifth"
                label="custom color"
                className="demo-switch--custom"
              />
            </div>
          </section>

          <section className="switches-example mdc-theme--dark">
            <Text component="h3" textStyle="title">
              Switch on Light Theme Disabled
            </Text>

            <div className="demo-switch-wrapper">
              <Switch id="sixth" label="on/off" disabled />
            </div>
          </section>
        </Theme>
      </LayoutCell>
    );
  }
}
