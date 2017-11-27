// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button } from 'material-toolbox/button';
import { List, ListItem } from 'material-toolbox/list';
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from 'material-toolbox/dialog';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from 'material-toolbox/dialog';`;
const cbSignature = '() => void';

export default class DialogPage extends React.Component<
  {},
  {
    firstOpenned: boolean,
    secondOpenned: boolean,
    thirdOpenned: boolean,
  },
> {
  state = {
    firstOpenned: false,
    secondOpenned: false,
    thirdOpenned: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  hideFirstDialog = () => {
    this.setState({ firstOpenned: false });
  };

  handleShowFirstDialog = () => {
    this.setState({ firstOpenned: true });
  };

  hideSecondDialog = () => {
    this.setState({ secondOpenned: false });
  };

  handleShowSecondDialog = () => {
    this.setState({ secondOpenned: true });
  };

  hideThirdDialog = () => {
    this.setState({ thirdOpenned: false });
  };

  handleShowThirdDialog = () => {
    this.setState({ thirdOpenned: true });
  };

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Dialog
        </Text>

        <Text component="h2" textStyle="headline">
          Dialog components are React wrappers of mdc-dialog components.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/dialogs.html"
            target="_blank">
            Material Design guidelines: Dialogs
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/dialogs/"
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
          DialogTitle
        </Text>

        <Text component="h3" textStyle="title">
          DialogHeader
        </Text>

        <Text component="h3" textStyle="title">
          DialogDescription
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
              <td>scrollable</td>
              <td>boolean</td>
              <td />
              <td />
              <td>enable scroll on description section</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          Dialog
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
              <td>dark</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true enable dark mode</td>
            </tr>
            <tr>
              <td>name</td>
              <td>string</td>
              <td />
              <td>✔</td>
              <td>used to create aria attributes</td>
            </tr>
            <tr>
              <td>onAccept</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>callback called when accept button is clicked</td>
            </tr>
            <tr>
              <td>onCancel</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>callback called when cancel button is clicked</td>
            </tr>
            <tr>
              <td>acceptLabel</td>
              <td>string</td>
              <td />
              <td />
              <td>Text set on accept button</td>
            </tr>
            <tr>
              <td>cancelLabel</td>
              <td>string</td>
              <td />
              <td />
              <td>Text set on cancel button</td>
            </tr>
            <tr>
              <td>isAction</td>
              <td>string value: accept, cancel</td>
              <td />
              <td />
              <td>
                Defines which button will set as default or call to action
              </td>
            </tr>
          </tbody>
        </table>

        <Button
          buttonVariant="raised"
          onClick={this.handleShowFirstDialog}
          ripple>
          Show Dialog
        </Button>

        <Button
          buttonVariant="raised"
          onClick={this.handleShowSecondDialog}
          ripple>
          Show Colored Footer Button Dialog
        </Button>

        <Button
          buttonVariant="raised"
          onClick={this.handleShowThirdDialog}
          ripple>
          Show Scrolling Dialog
        </Button>

        <br />

        <Dialog
          className="catalog-dialog-demo"
          name="test1"
          acceptLabel="Accept"
          cancelLabel="Decline"
          onCancel={this.hideFirstDialog}
          onAccept={this.hideFirstDialog}
          open={this.state.firstOpenned}>
          <DialogHeader>
            <DialogTitle>Use Google&#39;s location service?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogDescription>
        </Dialog>

        <Dialog
          className="catalog-dialog-demo"
          name="test2"
          acceptLabel="Accept"
          cancelLabel="Decline"
          onCancel={this.hideSecondDialog}
          onAccept={this.hideSecondDialog}
          open={this.state.secondOpenned}
          isAction="accept">
          <DialogHeader>
            <DialogTitle>Use Google&#39;s location service?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogDescription>
        </Dialog>

        <Dialog
          className="catalog-dialog-demo"
          name="test3"
          acceptLabel="Accept"
          cancelLabel="Decline"
          onCancel={this.hideThirdDialog}
          onAccept={this.hideThirdDialog}
          open={this.state.thirdOpenned}
          isAction="accept">
          <DialogHeader>
            <DialogTitle>Choose a Ringtone</DialogTitle>
          </DialogHeader>
          <DialogDescription scrollable>
            <List>
              <ListItem>None</ListItem>
              <ListItem>Callisto</ListItem>
              <ListItem>Ganymede</ListItem>
              <ListItem>Luna</ListItem>
              <ListItem>Marimba</ListItem>
              <ListItem>Schwifty</ListItem>
              <ListItem>Ganymede</ListItem>
              <ListItem>Luna</ListItem>
              <ListItem>Marimba</ListItem>
              <ListItem>Schwifty</ListItem>
            </List>
          </DialogDescription>
        </Dialog>
      </LayoutCell>
    );
  }
}
