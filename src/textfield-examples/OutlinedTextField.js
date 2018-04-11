// @flow
import * as React from 'react';

import FormField from '../material-toolbox/form-field';
import Example from '../Example';
import TextField from '../material-toolbox/textfield/TextField';

const source = `import TextField from 'material-toolbox/textfield/TextField';
import FormField from 'material-toolbox/form-field';

export default class OutlinedTextField extends React.Component {
  state = {
    disabled: false,
    rtl: false,
    dense: false,
    required: false,
    alternateColor: false,
    outlinedMaxLimit: false,
    outlinedMinLimit: false,
    value: '',
    message: ' ',
  };

  handleChange = (evt) => {
    const { name } = evt.currentTarget;
    this.setState(state => {
      let message = ' ';

      if (name === 'outlinedMaxLimit' && this.state.value) {
        if (!this.state.outlinedMaxLimit && this.state.value.length < 8) {
          message = 'Must be at least 8 characters';
        }

        if (!this.state.outlinedMinLimit && this.state.value.length > 10) {
          message = 'Must not exceed 10 characters';
        }
      }

      return {
        [name]: !state[name],
        message,
      };
    });
  };

  handleChangeInput = (evt) => {
    const { value } = evt.currentTarget;
    let message = ' ';

    if (value.length > 0) {
      if (this.state.outlinedMaxLimit && value.length < 8) {
        message = 'Must be at least 8 characters';
      }

      if (this.state.outlinedMinLimit && value.length > 10) {
        message = 'Must not exceed 10 characters';
      }
    }

    this.setState({
      value,
      message,
    });
  };

  render() {
    return (
      <div>
        <div dir={this.state.rtl ? 'rtl' : undefined}>
          <TextField
            label="Your Name"
            value={this.state.value}
            className={
              this.state.alternateColor
                ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                : undefined
            }
            disabled={this.state.disabled}
            dense={this.state.dense}
            required={this.state.required}
            helperText={this.state.message}
            validationHelperText={!!this.state.message}
            invalid={this.state.message.length > 1}
            aria-controls="outlined-helper-text"
            onChange={this.handleChangeInput}
            outlined
          />
        </div>

        <div>
          <FormField label="Disabled" htmlFor="outlined-disabled">
            <input
              id="outlined-disabled"
              type="checkbox"
              name="disabled"
              checked={this.state.disabled}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="RTL" htmlFor="outlined-rtl">
            <input
              id="outlined-rtl"
              type="checkbox"
              name="rtl"
              checked={this.state.rtl}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Dense" htmlFor="outlined-dense">
            <input
              id="outlined-dense"
              type="checkbox"
              name="dense"
              checked={this.state.dense}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Required" htmlFor="outlined-required">
            <input
              id="outlined-required"
              type="checkbox"
              name="required"
              checked={this.state.required}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Alternate Colors" htmlFor="outlined-alternate">
            <input
              id="outlined-alternate"
              type="checkbox"
              name="alternateColor"
              checked={this.state.alternateColor}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField
            label="Must be at least 8 characters"
            htmlFor="outlined-helper-max-limit">
            <input
              id="outlined-helper-max-limit"
              type="checkbox"
              name="outlinedMaxLimit"
              checked={this.state.outlinedMaxLimit}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField
            label="Must not exceed 10 characters"
            htmlFor="outlined-helper-min-limit">
            <input
              id="outlined-helper-min-limit"
              type="checkbox"
              name="outlinedMinLimit"
              checked={this.state.outlinedMinLimit}
              onChange={this.handleChange}
            />
          </FormField>
        </div>
      </div>
    );
  }
}
`;

type Props = {};
type State = {
  disabled: boolean,
  rtl: boolean,
  dense: boolean,
  required: boolean,
  alternateColor: boolean,
  outlinedMaxLimit: boolean,
  outlinedMinLimit: boolean,
  value: string,
  message: string,
};

export default class OutlinedTextField extends React.Component<Props, State> {
  state = {
    disabled: false,
    rtl: false,
    dense: false,
    required: false,
    alternateColor: false,
    outlinedMaxLimit: false,
    outlinedMinLimit: false,
    value: '',
    message: ' ',
  };

  handleChange = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { name } = evt.currentTarget;
    this.setState(state => {
      let message = ' ';

      if (name === 'outlinedMaxLimit' && this.state.value) {
        if (!this.state.outlinedMaxLimit && this.state.value.length < 8) {
          message = 'Must be at least 8 characters';
        }

        if (!this.state.outlinedMinLimit && this.state.value.length > 10) {
          message = 'Must not exceed 10 characters';
        }
      }

      return {
        [name]: !state[name],
        message,
      };
    });
  };

  handleChangeInput = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    let message = ' ';

    if (value.length > 0) {
      if (this.state.outlinedMaxLimit && value.length < 8) {
        message = 'Must be at least 8 characters';
      }

      if (this.state.outlinedMinLimit && value.length > 10) {
        message = 'Must not exceed 10 characters';
      }
    }

    this.setState({
      value,
      message,
    });
  };

  render() {
    return (
      <div>
        <Example title="Outlined Text Field" source={source}>
          <div dir={this.state.rtl ? 'rtl' : undefined}>
            <TextField
              label="Your Name"
              value={this.state.value}
              className={
                this.state.alternateColor
                  ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                  : undefined
              }
              disabled={this.state.disabled}
              dense={this.state.dense}
              required={this.state.required}
              helperText={this.state.message}
              validationHelperText={!!this.state.message}
              invalid={this.state.message.length > 1}
              aria-controls="outlined-helper-text"
              onChange={this.handleChangeInput}
              outlined
            />
          </div>

          <div>
            <FormField label="Disabled" htmlFor="outlined-disabled">
              <input
                id="outlined-disabled"
                type="checkbox"
                name="disabled"
                checked={this.state.disabled}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="RTL" htmlFor="outlined-rtl">
              <input
                id="outlined-rtl"
                type="checkbox"
                name="rtl"
                checked={this.state.rtl}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Dense" htmlFor="outlined-dense">
              <input
                id="outlined-dense"
                type="checkbox"
                name="dense"
                checked={this.state.dense}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Required" htmlFor="outlined-required">
              <input
                id="outlined-required"
                type="checkbox"
                name="required"
                checked={this.state.required}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Alternate Colors" htmlFor="outlined-alternate">
              <input
                id="outlined-alternate"
                type="checkbox"
                name="alternateColor"
                checked={this.state.alternateColor}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Must be at least 8 characters"
              htmlFor="outlined-helper-max-limit">
              <input
                id="outlined-helper-max-limit"
                type="checkbox"
                name="outlinedMaxLimit"
                checked={this.state.outlinedMaxLimit}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Must not exceed 10 characters"
              htmlFor="outlined-helper-min-limit">
              <input
                id="outlined-helper-min-limit"
                type="checkbox"
                name="outlinedMinLimit"
                checked={this.state.outlinedMinLimit}
                onChange={this.handleChange}
              />
            </FormField>
          </div>
        </Example>
      </div>
    );
  }
}
