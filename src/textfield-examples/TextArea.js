// @flow
import * as React from 'react';

import FormField from '../material-toolbox/form-field';
import Example from '../Example';
import TextField from '../material-toolbox/textfield/TextField';

const source = `import TextField from 'material-toolbox/textfield/TextField';
import FormField from 'material-toolbox/form-field';

export default class TextArea extends React.Component {
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
            label="Textarea Label"
            className={
              this.state.alternateColor
                ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                : undefined
            }
            disabled={this.state.disabled}
            required={this.state.required}
            aria-controls="multiline-helper-text"
            rows="8"
            cols="40"
            multiline
          />
        </div>

        <div>
          <FormField label="Disabled" htmlFor="multiline-disabled">
            <input
              id="multiline-disabled"
              type="checkbox"
              name="disabled"
              checked={this.state.disabled}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="RTL" htmlFor="multiline-rtl">
            <input
              id="multiline-rtl"
              type="checkbox"
              name="rtl"
              checked={this.state.rtl}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Required" htmlFor="multiline-required">
            <input
              id="multiline-required"
              type="checkbox"
              name="required"
              checked={this.state.required}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Alternate Colors" htmlFor="multiline-alternate">
            <input
              id="multiline-alternate"
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

export default class TextArea extends React.Component<Props, State> {
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
        <Example title="Textarea" source={source}>
          <div dir={this.state.rtl ? 'rtl' : undefined}>
            <TextField
              label="Textarea Label"
              className={
                this.state.alternateColor
                  ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                  : undefined
              }
              disabled={this.state.disabled}
              required={this.state.required}
              aria-controls="multiline-helper-text"
              rows="8"
              cols="40"
              multiline
            />
          </div>

          <div>
            <FormField label="Disabled" htmlFor="multiline-disabled">
              <input
                id="multiline-disabled"
                type="checkbox"
                name="disabled"
                checked={this.state.disabled}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="RTL" htmlFor="multiline-rtl">
              <input
                id="multiline-rtl"
                type="checkbox"
                name="rtl"
                checked={this.state.rtl}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Required" htmlFor="multiline-required">
              <input
                id="multiline-required"
                type="checkbox"
                name="required"
                checked={this.state.required}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Alternate Colors" htmlFor="multiline-alternate">
              <input
                id="multiline-alternate"
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
