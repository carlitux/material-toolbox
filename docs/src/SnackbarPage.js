// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button } from 'material-toolbox/button';
import { List, ListItem } from 'material-toolbox/list';
import  Snackbar  from 'material-toolbox/snackbar';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import Snackbar from 'material-toolbox/snackbar';`;
const cbSignature = '() => void';

export default class SnackbarPage extends React.Component<
  {},
  {
    show: boolean,
    multiline: boolean,
    onBottom: boolean,
    dismiss: boolean,
    aligned: boolean,
  },
> {
  state = {
    show: false,
    multiline: false,
    onBottom: false,
    dismiss: true,
    aligned: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  showSnackbar = () => {
    this.setState({ show: true, aligned: false });
  };

  showSnackbarAligned = () => {
    this.setState({ show: true, aligned: true });
  };

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
          React components
        </Text>

        <Text component="h3" textStyle="title">
          Import
        </Text>

        <Highlighter language="javascript">{importComponents}</Highlighter>

        <Text component="h3" textStyle="title">
          Snackbar
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
              <td>dismiss</td>
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
              <td>onActionClick</td>
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

        <Button buttonVariant="raised" onClick={this.showSnackbar}>
          Show
        </Button>

        <Button buttonVariant="raised" onClick={this.showSnackbarAligned}>
          Show Aligned
        </Button>

        <label htmlFor="multiline">
          <input
            id="multiline"
            value={this.state.multiline}
            type="checkbox"
            onChange={() => {
              this.setState({ multiline: !this.state.multiline });
            }}
          />{' '}
          Multiline
        </label>

        <label htmlFor="bottom">
          <input
            id="bottom"
            value={this.state.onBottom}
            disabled={!this.state.multiline}
            type="checkbox"
            onChange={() => {
              this.setState({ onBottom: !this.state.onBottom });
            }}
          />{' '}
          Action On Bottom
        </label>

        <label htmlFor="dismiss">
          <input
            id="dismiss"
            value={this.state.dismiss}
            defaultChecked={this.state.dismiss}
            type="checkbox"
            onChange={() => {
              this.setState({ dismiss: !this.state.dismiss });
            }}
          />{' '}
          Dismiss on Action
        </label>

        <Snackbar
          message="This a example text"
          actionText="Undo"
          timeout={3000}
          multiline={this.state.multiline}
          actionOnBottom={this.state.onBottom}
          active={this.state.show}
          dismiss={this.state.dismiss}
          align={this.state.aligned}
          onActionClick={() => {
            console.log('clicked');
          }}
        />
      </LayoutCell>
    );
  }
}
