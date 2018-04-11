// @flow
import * as React from 'react';

import { LayoutCell } from './material-toolbox/layout-grid';
import { Text } from './material-toolbox/typography';

import ThemedLink from './ThemedLink';
import BasicExample from './snackbar-examples/BasicExample';

const cbSignature = '() => void';

type Props = {};

type State = {};

export default class SnackbarPage extends React.Component<Props, State> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Snackbar
        </Text>

        <Text component="h2" textStyle="headline">
          Snackbar component is a React wrapper of mdc-snackbar component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/snackbars-toasts.html"
            target="_blank">
            Material Design guidelines: Snackbars & toasts
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/snackbars/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          React Components
        </Text>

        <Text component="h3" textStyle="title">
          Snackbar
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
              <td>message</td>
              <td>string</td>
              <td />
              <td>✔</td>
              <td>message to be show</td>
            </tr>
            <tr>
              <td>actionText</td>
              <td>string</td>
              <td />
              <td />
              <td>label to put in action button</td>
            </tr>
            <tr>
              <td>align</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If set to true the snackbar is at left</td>
            </tr>
            <tr>
              <td>active</td>
              <td>boolean</td>
              <td />
              <td />
              <td>True to display the if a prop is changed</td>
            </tr>
            <tr>
              <td>multiline</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Set multiline design</td>
            </tr>
            <tr>
              <td>actionOnBottom</td>
              <td>boolean</td>
              <td />
              <td />
              <td>
                If multiline and if set this to true the action is set at
                bottom.
              </td>
            </tr>
            <tr>
              <td>dismissesOnAction</td>
              <td>boolean</td>
              <td>true</td>
              <td />
              <td>if set to false snackbar will stay visible</td>
            </tr>
            <tr>
              <td>timeout</td>
              <td>number</td>
              <td>2750</td>
              <td />
              <td>The time that snackbar is visible</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>If actionText set needs to set this with a callback</td>
            </tr>
            <tr>
              <td>onShow</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>Notify snackbar has been shown.</td>
            </tr>
            <tr>
              <td>onHide</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>Notify snackbar has been hidden.</td>
            </tr>
          </tbody>
        </table>

        <BasicExample />
      </LayoutCell>
    );
  }
}
