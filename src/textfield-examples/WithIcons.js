// @flow
import * as React from 'react';

import FormField from '../material-toolbox/form-field';
import Example from '../Example';
import TextField from '../material-toolbox/textfield/TextField';
import TextFieldIcon from '../material-toolbox/textfield/Icon';

const source = `import TextField from 'material-toolbox/textfield/TextField';
import FormField from 'material-toolbox/form-field';
import TextFieldIcon from 'aterial-toolbox/textfield/Icon';

export default class WithIcons extends React.Component {
  state = {
    hasError: { name1: false, name2: false, name3: false, name4: false },
    rtl: false,
    dense: false,
    required: false,
    disabled: false,
    alternateColor: false,
    minLimit: false,
    unclickable: false,
  };

  handleChange = (evt) => {
    const { name } = evt.currentTarget;
    this.setState(state => ({
      [name]: !state[name],
    }));
  };

  handleChangeInput = (evt) => {
    const { value, name } = evt.currentTarget;

    this.setState(state => ({
      hasError: {
        ...state.hasError,
        [name]: this.state.minLimit && value.length < 8 && value.length > 0,
      },
    }));
  };

  render() {
    return (
      <div>
        <div dir={this.state.rtl ? 'rtl' : undefined}>
          <TextField
            label="Your Name"
            name="name1"
            onChange={this.handleChangeInput}
            className={
              this.state.alternateColor
                ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                : undefined
            }
            dense={this.state.dense}
            required={this.state.required}
            aria-controls="with-icons-helper-text"
            invalid={this.state.hasError.name1}
            disabled={this.state.disabled}
            icon="leading"
            box>
            <TextFieldIcon
              className="material-icons"
              clickable={!this.state.unclickable}>
              event
            </TextFieldIcon>
          </TextField>

          <br />

          <TextField
            label="Your other name"
            name="name2"
            onChange={this.handleChangeInput}
            className={
              this.state.alternateColor
                ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                : undefined
            }
            dense={this.state.dense}
            required={this.state.required}
            aria-controls="with-icons-helper-text"
            invalid={this.state.hasError.name2}
            disabled={this.state.disabled}
            icon="trailing"
            box>
            <TextFieldIcon
              className="material-icons"
              clickable={!this.state.unclickable}>
              delete
            </TextFieldIcon>
          </TextField>

          <br />

          <TextField
            label="Your other name"
            name="name3"
            onChange={this.handleChangeInput}
            className={
              this.state.alternateColor
                ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                : undefined
            }
            dense={this.state.dense}
            required={this.state.required}
            aria-controls="with-icons-helper-text"
            invalid={this.state.hasError.name3}
            disabled={this.state.disabled}
            icon="leading"
            outlined>
            <TextFieldIcon
              className="material-icons"
              clickable={!this.state.unclickable}>
              event
            </TextFieldIcon>
          </TextField>

          <br />

          <TextField
            label="Your other name"
            name="name4"
            onChange={this.handleChangeInput}
            className={
              this.state.alternateColor
                ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                : undefined
            }
            dense={this.state.dense}
            required={this.state.required}
            aria-controls="with-icons-helper-text"
            invalid={this.state.hasError.name4}
            disabled={this.state.disabled}
            icon="trailing"
            outlined>
            <TextFieldIcon
              className="material-icons"
              clickable={!this.state.unclickable}>
              delete
            </TextFieldIcon>
          </TextField>
        </div>

        <div>
          <FormField label="Disabled" htmlFor="with-icons-required">
            <input
              id="with-icons-required"
              type="checkbox"
              name="disabled"
              checked={this.state.disabled}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="RTL" htmlFor="with-icons-rtl">
            <input
              id="with-icons-rtl"
              type="checkbox"
              name="rtl"
              checked={this.state.rtl}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Dense" htmlFor="with-icons-dense">
            <input
              id="with-icons-dense"
              type="checkbox"
              name="dense"
              checked={this.state.dense}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField
            label="Unclickable icons"
            htmlFor="with-icons-unclickable">
            <input
              id="with-icons-unclickable"
              type="checkbox"
              name="unclickable"
              checked={this.state.unclickable}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Alternate Colors" htmlFor="with-icons-alternate">
            <input
              id="with-icons-alternate"
              type="checkbox"
              name="alternateColor"
              checked={this.state.alternateColor}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField label="Required" htmlFor="with-icons-required">
            <input
              id="with-icons-required"
              type="checkbox"
              name="required"
              checked={this.state.required}
              onChange={this.handleChange}
            />
          </FormField>
        </div>

        <div>
          <FormField
            label="Must be at least 8 characters"
            htmlFor="with-icons-helper-max-limit">
            <input
              id="with-icons-helper-max-limit"
              type="checkbox"
              name="minLimit"
              checked={this.state.minLimit}
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
  hasError: {
    name1: boolean,
    name2: boolean,
    name3: boolean,
    name4: boolean,
  },
  rtl: boolean,
  dense: boolean,
  required: boolean,
  disabled: boolean,
  alternateColor: boolean,
  minLimit: boolean,
  unclickable: boolean,
};

export default class WithIcons extends React.Component<Props, State> {
  state = {
    hasError: { name1: false, name2: false, name3: false, name4: false },
    rtl: false,
    dense: false,
    required: false,
    disabled: false,
    alternateColor: false,
    minLimit: false,
    unclickable: false,
  };

  handleChange = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { name } = evt.currentTarget;
    this.setState(state => ({
      [name]: !state[name],
    }));
  };

  handleChangeInput = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { value, name } = evt.currentTarget;

    this.setState(state => ({
      hasError: {
        ...state.hasError,
        [name]: this.state.minLimit && value.length < 8 && value.length > 0,
      },
    }));
  };

  render() {
    return (
      <div>
        <Example title="Text Field - Leading/Trailing icons" source={source}>
          <div dir={this.state.rtl ? 'rtl' : undefined}>
            <TextField
              label="Your Name"
              name="name1"
              onChange={this.handleChangeInput}
              className={
                this.state.alternateColor
                  ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                  : undefined
              }
              dense={this.state.dense}
              required={this.state.required}
              aria-controls="with-icons-helper-text"
              invalid={this.state.hasError.name1}
              disabled={this.state.disabled}
              icon="leading"
              box>
              <TextFieldIcon
                className="material-icons"
                clickable={!this.state.unclickable}>
                event
              </TextFieldIcon>
            </TextField>

            <br />

            <TextField
              label="Your other name"
              name="name2"
              onChange={this.handleChangeInput}
              className={
                this.state.alternateColor
                  ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                  : undefined
              }
              dense={this.state.dense}
              required={this.state.required}
              aria-controls="with-icons-helper-text"
              invalid={this.state.hasError.name2}
              disabled={this.state.disabled}
              icon="trailing"
              box>
              <TextFieldIcon
                className="material-icons"
                clickable={!this.state.unclickable}>
                delete
              </TextFieldIcon>
            </TextField>

            <br />

            <TextField
              label="Your other name"
              name="name3"
              onChange={this.handleChangeInput}
              className={
                this.state.alternateColor
                  ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                  : undefined
              }
              dense={this.state.dense}
              required={this.state.required}
              aria-controls="with-icons-helper-text"
              invalid={this.state.hasError.name3}
              disabled={this.state.disabled}
              icon="leading"
              outlined>
              <TextFieldIcon
                className="material-icons"
                clickable={!this.state.unclickable}>
                event
              </TextFieldIcon>
            </TextField>

            <br />

            <TextField
              label="Your other name"
              name="name4"
              onChange={this.handleChangeInput}
              className={
                this.state.alternateColor
                  ? 'demo-text-field-custom-colors demo-text-field-custom-error-colors'
                  : undefined
              }
              dense={this.state.dense}
              required={this.state.required}
              aria-controls="with-icons-helper-text"
              invalid={this.state.hasError.name4}
              disabled={this.state.disabled}
              icon="trailing"
              outlined>
              <TextFieldIcon
                className="material-icons"
                clickable={!this.state.unclickable}>
                delete
              </TextFieldIcon>
            </TextField>
          </div>

          <div>
            <FormField label="Disabled" htmlFor="with-icons-required">
              <input
                id="with-icons-required"
                type="checkbox"
                name="disabled"
                checked={this.state.disabled}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="RTL" htmlFor="with-icons-rtl">
              <input
                id="with-icons-rtl"
                type="checkbox"
                name="rtl"
                checked={this.state.rtl}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Dense" htmlFor="with-icons-dense">
              <input
                id="with-icons-dense"
                type="checkbox"
                name="dense"
                checked={this.state.dense}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Unclickable icons"
              htmlFor="with-icons-unclickable">
              <input
                id="with-icons-unclickable"
                type="checkbox"
                name="unclickable"
                checked={this.state.unclickable}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Alternate Colors" htmlFor="with-icons-alternate">
              <input
                id="with-icons-alternate"
                type="checkbox"
                name="alternateColor"
                checked={this.state.alternateColor}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField label="Required" htmlFor="with-icons-required">
              <input
                id="with-icons-required"
                type="checkbox"
                name="required"
                checked={this.state.required}
                onChange={this.handleChange}
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Must be at least 8 characters"
              htmlFor="with-icons-helper-max-limit">
              <input
                id="with-icons-helper-max-limit"
                type="checkbox"
                name="minLimit"
                checked={this.state.minLimit}
                onChange={this.handleChange}
              />
            </FormField>
          </div>
        </Example>
      </div>
    );
  }
}
