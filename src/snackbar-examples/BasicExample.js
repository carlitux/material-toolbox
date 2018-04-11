// @flow
import * as React from 'react';

import Example from '../Example';
import Checkbox from '../material-toolbox/checkbox';
import FormField from '../material-toolbox/form-field';
import TextField from '../material-toolbox/textfield/TextField';
import Button from '../material-toolbox/button/Button';
import Snackbar from '../material-toolbox/snackbar';

const source = `
import Checkbox from 'material-toolbox/checkbox';
import FormField from 'material-toolbox/form-field';
import TextField from 'material-toolbox/textfield/TextField';
import Button from 'material-toolbox/button/Button';
import Snackbar from 'material-toolbox/snackbar';

export default class BasicExample extends React.Component {
  state = {
    text: 'Message deleted',
    action: 'Undo',
    multiline: false,
    actionOnBottom: false,
    dismissesOnAction: true,
    activeNormal: false,
    activeRTL: false,
    activeAligned: false,
    activeAlignedRTL: false,
  };

  handleChange = (evt) => {
    const { name } = evt.currentTarget;
    this.setState(state => ({
      [name]: !state[name],
    }));
  };

  handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (evt) => {
    const { name } = evt.currentTarget;
    this.setState({
      [name]: true,
    });
  };

  handleHide = (name) => {
    this.setState({
      [name]: false,
    });
  };

  render() {
    return (
      <div>
        <div>
          <FormField label="Multiline" htmlFor="multiline">
            <Checkbox
              id="multiline"
              name="multiline"
              onChange={this.handleChange}
              checked={this.state.multiline}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Action On Bottom" htmlFor="actionOnBottom">
            <Checkbox
              id="actionOnBottom"
              name="actionOnBottom"
              onChange={this.handleChange}
              checked={this.state.actionOnBottom}
              disabled={!this.state.multiline}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Dismiss On Action" htmlFor="dismissesOnAction">
            <Checkbox
              id="dismissesOnAction"
              name="dismissesOnAction"
              onChange={this.handleChange}
              checked={this.state.dismissesOnAction}
            />
          </FormField>
        </div>

        <div>
          <TextField
            onChange={this.handleInputChange}
            name="text"
            label="Message Text"
            value={this.state.text}
          />
        </div>

        <div>
          <TextField
            onChange={this.handleInputChange}
            name="action"
            label="Action Text"
            value={this.state.action}
          />
        </div>

        <div>
          <Button raised onClick={this.handleClick} name="activeNormal">
            Show
          </Button>{' '}
          &nbsp;
          <Button raised onClick={this.handleClick} name="activeRTL">
            Show RTL
          </Button>{' '}
          &nbsp;
          <Button raised onClick={this.handleClick} name="activeAligned">
            Show start aligned
          </Button>
          &nbsp;
          <Button raised onClick={this.handleClick} name="activeAlignedRTL">
            Show start aligned (rtl)
          </Button>
          &nbsp;
        </div>

        <Snackbar
          message={this.state.text}
          actionText={this.state.action}
          multiline={this.state.multiline}
          dismissesOnAction={this.state.dismissesOnAction}
          actionOnBottom={this.state.actionOnBottom}
          onClick={() => {}}
          active={this.state.activeNormal}
          onHide={() => this.handleHide('activeNormal')}
        />

        <Snackbar
          message={this.state.text}
          actionText={this.state.action}
          multiline={this.state.multiline}
          dismissesOnAction={this.state.dismissesOnAction}
          actionOnBottom={this.state.actionOnBottom}
          onClick={() => {}}
          active={this.state.activeAligned}
          onHide={() => this.handleHide('activeAligned')}
          align
        />

        <div dir="rtl">
          <Snackbar
            message={this.state.text}
            actionText={this.state.action}
            multiline={this.state.multiline}
            dismissesOnAction={this.state.dismissesOnAction}
            actionOnBottom={this.state.actionOnBottom}
            onClick={() => {}}
            active={this.state.activeRTL}
            onHide={() => this.handleHide('activeRTL')}
          />
        </div>

        <div dir="rtl">
          <Snackbar
            message={this.state.text}
            actionText={this.state.action}
            multiline={this.state.multiline}
            dismissesOnAction={this.state.dismissesOnAction}
            actionOnBottom={this.state.actionOnBottom}
            onClick={() => {}}
            active={this.state.activeAlignedRTL}
            onHide={() => this.handleHide('activeAlignedRTL')}
            align
          />
        </div>
      </div>
    );
  }
}`;

type Props = {};
type State = {
  text: string,
  action: string,
  multiline: boolean,
  actionOnBottom: boolean,
  dismissesOnAction: boolean,
  activeNormal: boolean,
  activeRTL: boolean,
  activeAligned: boolean,
  activeAlignedRTL: boolean,
};

export default class BasicExample extends React.Component<Props, State> {
  state = {
    text: 'Message deleted',
    action: 'Undo',
    multiline: false,
    actionOnBottom: false,
    dismissesOnAction: true,
    activeNormal: false,
    activeRTL: false,
    activeAligned: false,
    activeAlignedRTL: false,
  };

  handleChange = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { name } = evt.currentTarget;
    this.setState(state => ({
      [name]: !state[name],
    }));
  };

  handleInputChange = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { name } = evt.currentTarget;
    this.setState({
      [name]: true,
    });
  };

  handleHide = (name: string) => {
    this.setState({
      [name]: false,
    });
  };

  render() {
    return (
      <Example title="Basic Example" source={source}>
        <div>
          <FormField label="Multiline" htmlFor="multiline">
            <Checkbox
              id="multiline"
              name="multiline"
              onChange={this.handleChange}
              checked={this.state.multiline}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Action On Bottom" htmlFor="actionOnBottom">
            <Checkbox
              id="actionOnBottom"
              name="actionOnBottom"
              onChange={this.handleChange}
              checked={this.state.actionOnBottom}
              disabled={!this.state.multiline}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Dismiss On Action" htmlFor="dismissesOnAction">
            <Checkbox
              id="dismissesOnAction"
              name="dismissesOnAction"
              onChange={this.handleChange}
              checked={this.state.dismissesOnAction}
            />
          </FormField>
        </div>

        <div>
          <TextField
            onChange={this.handleInputChange}
            name="text"
            label="Message Text"
            value={this.state.text}
          />
        </div>

        <div>
          <TextField
            onChange={this.handleInputChange}
            name="action"
            label="Action Text"
            value={this.state.action}
          />
        </div>

        <div>
          <Button raised onClick={this.handleClick} name="activeNormal">
            Show
          </Button>{' '}
          &nbsp;
          <Button raised onClick={this.handleClick} name="activeRTL">
            Show RTL
          </Button>{' '}
          &nbsp;
          <Button raised onClick={this.handleClick} name="activeAligned">
            Show start aligned
          </Button>
          &nbsp;
          <Button raised onClick={this.handleClick} name="activeAlignedRTL">
            Show start aligned (rtl)
          </Button>
          &nbsp;
        </div>

        <Snackbar
          message={this.state.text}
          actionText={this.state.action}
          multiline={this.state.multiline}
          dismissesOnAction={this.state.dismissesOnAction}
          actionOnBottom={this.state.actionOnBottom}
          onClick={() => {}}
          active={this.state.activeNormal}
          onHide={() => this.handleHide('activeNormal')}
        />

        <Snackbar
          message={this.state.text}
          actionText={this.state.action}
          multiline={this.state.multiline}
          dismissesOnAction={this.state.dismissesOnAction}
          actionOnBottom={this.state.actionOnBottom}
          onClick={() => {}}
          active={this.state.activeAligned}
          onHide={() => this.handleHide('activeAligned')}
          align
        />

        <div dir="rtl">
          <Snackbar
            message={this.state.text}
            actionText={this.state.action}
            multiline={this.state.multiline}
            dismissesOnAction={this.state.dismissesOnAction}
            actionOnBottom={this.state.actionOnBottom}
            onClick={() => {}}
            active={this.state.activeRTL}
            onHide={() => this.handleHide('activeRTL')}
          />
        </div>

        <div dir="rtl">
          <Snackbar
            message={this.state.text}
            actionText={this.state.action}
            multiline={this.state.multiline}
            dismissesOnAction={this.state.dismissesOnAction}
            actionOnBottom={this.state.actionOnBottom}
            onClick={() => {}}
            active={this.state.activeAlignedRTL}
            onHide={() => this.handleHide('activeAlignedRTL')}
            align
          />
        </div>
      </Example>
    );
  }
}
