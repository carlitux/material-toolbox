// @flow
import * as React from 'react';

import FormField from '../material-toolbox/form-field';
import Example from '../Example';
import TextField from '../material-toolbox/textfield/TextField';

const source = `import TextField from 'material-toolbox/textfield/TextField';
import FormField from 'material-toolbox/form-field';

export default class DefaultTextField extends React.Component {
  state = {
    disabled: false,
    rtl: false,
    dense: false,
    required: false,
    alternateColor: false,
    useHelperText: false,
    useHelperTextPersistent: false,
    useHelperTextValidation: false,
  };

  handleChange = (evt) => {
    const { name } = evt.currentTarget;
    this.setState(state => ({
      [name]: !state[name],
    }));
  };

  render() {
    return (
      <div>
        <div dir={this.state.rtl ? 'rtl' : undefined}>
          <TextField
            label="Email address"
            className={
              this.state.alternateColor
                ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                : undefined
            }
            disabled={this.state.disabled}
            dense={this.state.dense}
            required={this.state.required}
            helperText={
              this.state.useHelperText
                ? 'Helper Text (possibly validation message)'
                : undefined
            }
            persistentHelperText={this.state.useHelperTextPersistent}
            validationHelperText={this.state.useHelperTextValidation}
            aria-controls="default-helper-text"
          />
        </div>

        <div>
          <FormField label="Disabled" htmlFor="default-disabled">
            <input
              id="default-disabled"
              type="checkbox"
              name="disabled"
              checked={this.state.disabled}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="RTL" htmlFor="default-rtl">
            <input
              id="default-rtl"
              type="checkbox"
              name="rtl"
              checked={this.state.rtl}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Dense" htmlFor="default-dense">
            <input
              id="default-dense"
              type="checkbox"
              name="dense"
              checked={this.state.dense}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Required" htmlFor="default-required">
            <input
              id="default-required"
              type="checkbox"
              name="required"
              checked={this.state.required}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Alternate Colors" htmlFor="default-alternate">
            <input
              id="default-alternate"
              type="checkbox"
              name="alternateColor"
              checked={this.state.alternateColor}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Use Helper Text" htmlFor="default-helper-text">
            <input
              id="default-helper-text"
              type="checkbox"
              name="useHelperText"
              checked={this.state.useHelperText}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField
            label="Make helper text persistent"
            htmlFor="default-helper-text-persistent">
            <input
              id="default-helper-text-persistent"
              type="checkbox"
              name="useHelperTextPersistent"
              checked={this.state.useHelperTextPersistent}
              onChange={this.handleChange}
              disabled={!this.state.useHelperText}
            />
          </FormField>
        </div>

        <div>
          <FormField
            label="Use helper text as validation message"
            htmlFor="default-helper-text-validation">
            <input
              id="default-helper-text-validation"
              type="checkbox"
              name="useHelperTextValidation"
              checked={this.state.useHelperTextValidation}
              onChange={this.handleChange}
              disabled={!this.state.useHelperText}
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
  useHelperText: boolean,
  useHelperTextPersistent: boolean,
  useHelperTextValidation: boolean,
};

export default class DefaultTextField extends React.Component<Props, State> {
  state = {
    disabled: false,
    rtl: false,
    dense: false,
    required: false,
    alternateColor: false,
    useHelperText: false,
    useHelperTextPersistent: false,
    useHelperTextValidation: false,
  };

  handleChange = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { name } = evt.currentTarget;
    this.setState(state => ({
      [name]: !state[name],
    }));
  };

  render() {
    return (
      <div>
        <Example
          title="Full Functionality JS Component (Floating Label, Validation)"
          source={source}>
          <div dir={this.state.rtl ? 'rtl' : undefined}>
            <TextField
              label="Email address"
              className={
                this.state.alternateColor
                  ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                  : undefined
              }
              disabled={this.state.disabled}
              dense={this.state.dense}
              required={this.state.required}
              helperText={
                this.state.useHelperText
                  ? 'Helper Text (possibly validation message)'
                  : undefined
              }
              persistentHelperText={this.state.useHelperTextPersistent}
              validationHelperText={this.state.useHelperTextValidation}
              aria-controls="default-helper-text"
            />
          </div>

          <div>
            <FormField label="Disabled" htmlFor="default-disabled">
              <input
                id="default-disabled"
                type="checkbox"
                name="disabled"
                checked={this.state.disabled}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="RTL" htmlFor="default-rtl">
              <input
                id="default-rtl"
                type="checkbox"
                name="rtl"
                checked={this.state.rtl}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Dense" htmlFor="default-dense">
              <input
                id="default-dense"
                type="checkbox"
                name="dense"
                checked={this.state.dense}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Required" htmlFor="default-required">
              <input
                id="default-required"
                type="checkbox"
                name="required"
                checked={this.state.required}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Alternate Colors" htmlFor="default-alternate">
              <input
                id="default-alternate"
                type="checkbox"
                name="alternateColor"
                checked={this.state.alternateColor}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Use Helper Text" htmlFor="default-helper-text">
              <input
                id="default-helper-text"
                type="checkbox"
                name="useHelperText"
                checked={this.state.useHelperText}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Make helper text persistent"
              htmlFor="default-helper-text-persistent">
              <input
                id="default-helper-text-persistent"
                type="checkbox"
                name="useHelperTextPersistent"
                checked={this.state.useHelperTextPersistent}
                onChange={this.handleChange}
                disabled={!this.state.useHelperText}
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Use helper text as validation message"
              htmlFor="default-helper-text-validation">
              <input
                id="default-helper-text-validation"
                type="checkbox"
                name="useHelperTextValidation"
                checked={this.state.useHelperTextValidation}
                onChange={this.handleChange}
                disabled={!this.state.useHelperText}
              />
            </FormField>
          </div>
        </Example>
      </div>
    );
  }
}
