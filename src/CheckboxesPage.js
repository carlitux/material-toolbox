// @flow
import * as React from 'react';

import LayoutCell from './material-toolbox/layout-grid/Cell';
import Text from './material-toolbox/typography/Text';

import ThemedLink from './ThemedLink';

import CssOnly from './checkbox-examples/CssOnly';
import WithJavascript from './checkbox-examples/WithJavascript';

export default class CheckboxesPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Checkboxes
        </Text>

        <Text component="h2" textStyle="headline">
          Checkbox component is a React wrapper of mdc-checkbox component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/selection-controls.html#selection-controls-checkbox"
            target="_blank">
            Material Design guidelines: Selection Controls – Checkbox
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/input-controls/checkboxes/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          React Components
        </Text>

        <Text component="h2" textStyle="title">
          Checkbox
        </Text>

        <table className="table-props">
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
              <td>indeterminate</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Sets to an indeterminate state.</td>
            </tr>
            <tr>
              <td>cssOnly</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Disable all dynamic behaviour</td>
            </tr>
          </tbody>
        </table>

        <Text component="h1" textStyle="display1">
          Examples
        </Text>

        <CssOnly />
        <WithJavascript />
      </LayoutCell>
    );
  }
}
