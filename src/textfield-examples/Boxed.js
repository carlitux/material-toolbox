// @flow
import * as React from 'react';

import FormField from '../material-toolbox/form-field';
import Example from '../Example';
import TextField from '../material-toolbox/textfield/TextField';

const source = `import TextField from 'material-toolbox/textfield/TextField';
import FormField from 'material-toolbox/form-field';

export default class BoxedTextField extends React.Component {
  state = {
    hasError: false,
    value: '',
    disabled: false,
    rtl: false,
    dense: false,
    required: false,
    alternateColor: false,
    minLimit: false,
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

  handleChangeInput = (evt) => {
    const { value } = evt.currentTarget;

    this.setState({
      value,
      hasError: this.state.minLimit && value.length < 8 && value.length > 0,
    });
  };

  render() {
    return (
      <div>
        <Example title="Text Field box" source={source}>
          <div dir={this.state.rtl ? 'rtl' : undefined}>
            <TextField
              label="Email address"
              value={this.state.value}
              onChange={this.handleChangeInput}
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
                  ? 'Must be at least 8 characters'
                  : undefined
              }
              persistentHelperText={this.state.useHelperTextPersistent}
              validationHelperText={this.state.useHelperTextValidation}
              aria-controls="boxed-helper-text"
              invalid={this.state.hasError}
              box
            />
          </div>

          <div>
            <FormField label="Disabled" htmlFor="boxed-disabled">
              <input
                id="boxed-disabled"
                type="checkbox"
                name="disabled"
                checked={this.state.disabled}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="RTL" htmlFor="boxed-rtl">
              <input
                id="boxed-rtl"
                type="checkbox"
                name="rtl"
                checked={this.state.rtl}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Dense" htmlFor="boxed-dense">
              <input
                id="boxed-dense"
                type="checkbox"
                name="dense"
                checked={this.state.dense}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Required" htmlFor="boxed-required">
              <input
                id="boxed-required"
                type="checkbox"
                name="required"
                checked={this.state.required}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Alternate Colors" htmlFor="boxed-alternate">
              <input
                id="boxed-alternate"
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
              htmlFor="boxed-helper-max-limit">
              <input
                id="boxed-helper-max-limit"
                type="checkbox"
                name="minLimit"
                checked={this.state.minLimit}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Use Helper Text" htmlFor="boxed-helper-text">
              <input
                id="boxed-helper-text"
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
              htmlFor="boxed-helper-text-persistent">
              <input
                id="boxed-helper-text-persistent"
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
              htmlFor="boxed-helper-text-validation">
              <input
                id="boxed-helper-text-validation"
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
`;

type Props = {};
type State = {
  hasError: boolean,
  value: string,
  disabled: boolean,
  rtl: boolean,
  dense: boolean,
  required: boolean,
  alternateColor: boolean,
  minLimit: boolean,
  useHelperText: boolean,
  useHelperTextPersistent: boolean,
  useHelperTextValidation: boolean,
};

export default class BoxedTextField extends React.Component<Props, State> {
  state = {
    hasError: false,
    value: '',
    disabled: false,
    rtl: false,
    dense: false,
    required: false,
    alternateColor: false,
    minLimit: false,
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

  handleChangeInput = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;

    this.setState({
      value,
      hasError: this.state.minLimit && value.length < 8 && value.length > 0,
    });
  };

  render() {
    return (
      <div>
        <Example title="Text Field box" source={source}>
          <div dir={this.state.rtl ? 'rtl' : undefined}>
            <TextField
              label="Email address"
              value={this.state.value}
              onChange={this.handleChangeInput}
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
                  ? 'Must be at least 8 characters'
                  : undefined
              }
              persistentHelperText={this.state.useHelperTextPersistent}
              validationHelperText={this.state.useHelperTextValidation}
              aria-controls="boxed-helper-text"
              invalid={this.state.hasError}
              box
            />
          </div>

          <div>
            <FormField label="Disabled" htmlFor="boxed-disabled">
              <input
                id="boxed-disabled"
                type="checkbox"
                name="disabled"
                checked={this.state.disabled}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="RTL" htmlFor="boxed-rtl">
              <input
                id="boxed-rtl"
                type="checkbox"
                name="rtl"
                checked={this.state.rtl}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Dense" htmlFor="boxed-dense">
              <input
                id="boxed-dense"
                type="checkbox"
                name="dense"
                checked={this.state.dense}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Required" htmlFor="boxed-required">
              <input
                id="boxed-required"
                type="checkbox"
                name="required"
                checked={this.state.required}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Alternate Colors" htmlFor="boxed-alternate">
              <input
                id="boxed-alternate"
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
              htmlFor="boxed-helper-max-limit">
              <input
                id="boxed-helper-max-limit"
                type="checkbox"
                name="minLimit"
                checked={this.state.minLimit}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Use Helper Text" htmlFor="boxed-helper-text">
              <input
                id="boxed-helper-text"
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
              htmlFor="boxed-helper-text-persistent">
              <input
                id="boxed-helper-text-persistent"
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
              htmlFor="boxed-helper-text-validation">
              <input
                id="boxed-helper-text-validation"
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
