// @flow
import * as React from 'react';

import FormField from '../material-toolbox/form-field';
import Example from '../Example';
import TextField from '../material-toolbox/textfield/TextField';

const source = `import TextField from 'material-toolbox/textfield/TextField';
import FormField from 'material-toolbox/form-field';

export default class FullWidth extends React.Component {
  state = {
    disabled: false,
    rtl: false,
    required: false,
    alternateColor: false,
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
            label="Subject"
            className={
              this.state.alternateColor
                ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                : undefined
            }
            disabled={this.state.disabled}
            required={this.state.required}
            aria-controls="multiline1-helper-text"
            fullWidth
          />

          <br />

          <TextField
            label="Textarea Label"
            className={
              this.state.alternateColor
                ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                : undefined
            }
            disabled={this.state.disabled}
            required={this.state.required}
            aria-controls="full-width-helper-text"
            rows="8"
            cols="40"
            multiline
            fullWidth
          />
        </div>

        <div>
          <FormField label="Disabled" htmlFor="full-width-disabled">
            <input
              id="full-width-disabled"
              type="checkbox"
              name="disabled"
              checked={this.state.disabled}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="RTL" htmlFor="full-width-rtl">
            <input
              id="full-width-rtl"
              type="checkbox"
              name="rtl"
              checked={this.state.rtl}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Required" htmlFor="full-width-required">
            <input
              id="full-width-required"
              type="checkbox"
              name="required"
              checked={this.state.required}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Alternate Colors" htmlFor="full-width-alternate">
            <input
              id="full-width-alternate"
              type="checkbox"
              name="alternateColor"
              checked={this.state.alternateColor}
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
  required: boolean,
  alternateColor: boolean,
};

export default class FullWidth extends React.Component<Props, State> {
  state = {
    disabled: false,
    rtl: false,
    required: false,
    alternateColor: false,
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
        <Example title="Full-Width Text Field and Textarea" source={source}>
          <div dir={this.state.rtl ? 'rtl' : undefined}>
            <TextField
              label="Subject"
              className={
                this.state.alternateColor
                  ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                  : undefined
              }
              disabled={this.state.disabled}
              required={this.state.required}
              aria-controls="multiline1-helper-text"
              fullWidth
            />

            <br />

            <TextField
              label="Textarea Label"
              className={
                this.state.alternateColor
                  ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                  : undefined
              }
              disabled={this.state.disabled}
              required={this.state.required}
              aria-controls="full-width-helper-text"
              rows="8"
              cols="40"
              multiline
              fullWidth
            />
          </div>

          <div>
            <FormField label="Disabled" htmlFor="full-width-disabled">
              <input
                id="full-width-disabled"
                type="checkbox"
                name="disabled"
                checked={this.state.disabled}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="RTL" htmlFor="full-width-rtl">
              <input
                id="full-width-rtl"
                type="checkbox"
                name="rtl"
                checked={this.state.rtl}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Required" htmlFor="full-width-required">
              <input
                id="full-width-required"
                type="checkbox"
                name="required"
                checked={this.state.required}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Alternate Colors" htmlFor="full-width-alternate">
              <input
                id="full-width-alternate"
                type="checkbox"
                name="alternateColor"
                checked={this.state.alternateColor}
                onChange={this.handleChange}
              />
            </FormField>
          </div>
        </Example>
      </div>
    );
  }
}
