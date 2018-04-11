// @flow
import * as React from 'react';

import { Link } from 'react-router-dom'; // eslint-disable-line

import LayoutCell from './material-toolbox/layout-grid/Cell';
import Text from './material-toolbox/typography/Text';

import ThemedLink from './ThemedLink';

export default class FormFieldsPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Form Fields
        </Text>

        <Text component="h2" textStyle="headline">
          Form Field component is a React wrapper of mdc-form-field component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/input-controls/form-fields/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          React Components
        </Text>

        <Text component="h2" textStyle="title">
          Form Field
        </Text>

        <p>
          Any prop that is not listed in next table will be passed to a label
          element
        </p>

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
              <td>label</td>
              <td>string</td>
              <td />
              <td>✔</td>
              <td>Label that will be set into label input</td>
            </tr>
            <tr>
              <td>alignEnd</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Change label before component</td>
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

        <p>
          Many examples can be found in{' '}
          <ThemedLink component={Link} to="/input-controls/checkboxes">
            Checkboxes Page
          </ThemedLink>{' '}
          and in{' '}
          <ThemedLink component={Link} to="/input-controls/radio-buttons">
            Radio Buttons
          </ThemedLink>
        </p>
      </LayoutCell>
    );
  }
}
