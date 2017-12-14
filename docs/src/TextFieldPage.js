// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { TextField, TextFieldIcon } from 'material-toolbox/textfield';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import {
  TextFieldIcon,
  TextField,
} from 'material-toolbox/textfield';`;
const cbSignature = '() => void';

const cssCode = `.custom-text-field-input {
  width: 300px;
}`;

export default class TextFieldPage extends React.Component<
  {},
  {
    emailIsDisabled: boolean,
    emailIsDense: boolean,
    emailIsRequired: boolean,
    emailUseHelperText: boolean,
    emailPersistentText: boolean,
    emailUseValidationMessage: boolean,
    fullNameIsDisabled: boolean,
    fullNameIsDense: boolean,
    otherNameIsDisabled: boolean,
    otherNameIsDense: boolean,
    textarea1IsDisabled: boolean,
    textarea1isRequired: boolean,
    fullWidthIsDense: boolean,
    fullWidthIsDisabled: boolean,
  },
> {
  state = {
    emailIsDisabled: false,
    emailIsDense: false,
    emailIsRequired: false,
    emailUseHelperText: false,
    emailPersistentText: false,
    emailUseValidationMessage: false,
    fullNameIsDisabled: false,
    fullNameIsDense: false,
    otherNameIsDisabled: false,
    otherNameIsDense: false,
    textarea1IsDisabled: false,
    textarea1isRequired: false,
    fullWidthIsDense: false,
    fullWidthIsDisabled: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleEmailDisabled = () => {
    this.setState(state => ({ emailIsDisabled: !state.emailIsDisabled }));
  };

  handleEmailDense = () => {
    this.setState(state => ({ emailIsDense: !state.emailIsDense }));
  };

  handleEmailRequired = () => {
    this.setState(state => ({ emailIsRequired: !state.emailIsRequired }));
  };

  handleEmailUseHelperText = () => {
    this.setState(state => ({ emailUseHelperText: !state.emailUseHelperText }));
  };

  handleEmailPersistentText = () => {
    this.setState(state => ({
      emailPersistentText: !state.emailPersistentText,
    }));
  };

  handleEmailValidationMessage = () => {
    this.setState(state => ({
      emailUseValidationMessage: !state.emailUseValidationMessage,
    }));
  };

  handleFullNameDisabled = () => {
    this.setState(state => ({
      fullNameIsDisabled: !state.fullNameIsDisabled,
    }));
  };

  handleFullNameDense = () => {
    this.setState(state => ({
      fullNameIsDense: !state.fullNameIsDense,
    }));
  };

  handleOtherNameDense = () => {
    this.setState(state => ({
      otherNameIsDense: !state.otherNameIsDense,
    }));
  };

  handleOtherNameDisabled = () => {
    this.setState(state => ({
      otherNameIsDisabled: !state.otherNameIsDisabled,
    }));
  };

  handleTextarea1Disabled = () => {
    this.setState(state => ({
      textarea1IsDisabled: !state.textarea1IsDisabled,
    }));
  };

  handleTextarea1Required = () => {
    this.setState(state => ({
      textarea1isRequired: !state.textarea1isRequired,
    }));
  };

  handleFullWidthDense = () => {
    this.setState(state => ({
      fullWidthIsDense: !state.fullWidthIsDense,
    }));
  };

  handleFullWidthDisabled = () => {
    this.setState(state => ({
      fullWidthIsDisabled: !state.fullWidthIsDisabled,
    }));
  };

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Text Field
        </Text>

        <Text component="h2" textStyle="headline">
          Text field component is a React wrapper of mdc-text-field component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/text-fields.html"
            target="_blank">
            Material Design guidelines: Text Fields
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/input-controls/text-fields/"
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
          TextFieldIcon
        </Text>

        <Text component="h3" textStyle="title">
          TextField
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
              <td>id</td>
              <td>string</td>
              <td />
              <td>✔</td>
              <td>Used to create some atributtes.</td>
            </tr>
            <tr>
              <td>wrapped</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If set to true will wrap the component with label</td>
            </tr>
            <tr>
              <td>cssOnly</td>
              <td>true</td>
              <td />
              <td />
              <td>
                If true will render css only component without js effects.
              </td>
            </tr>
            <tr>
              <td>dense</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true will generate dense UI</td>
            </tr>
            <tr>
              <td>hasError</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true set invalid/error UI to component.</td>
            </tr>
            <tr>
              <td>multiline</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true render a textarea element.</td>
            </tr>
            <tr>
              <td>fullWidth</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true set full width element.</td>
            </tr>
            <tr>
              <td>persistentHelp</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true sets the help visible all the time.</td>
            </tr>
            <tr>
              <td>withBox</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true set the box UI with ripple effect.</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td />
              <td />
              <td>
                Label text for element if onlyCss is set will be set as
                placeholder
              </td>
            </tr>
            <tr>
              <td>help</td>
              <td>string</td>
              <td />
              <td />
              <td>Text used to create a help message element</td>
            </tr>
            <tr>
              <td>onIconClick</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>Call when user click on icon</td>
            </tr>
            <tr>
              <td>onAnimationEnd</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>Call when animation end.</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>string: leading, trailing</td>
              <td />
              <td />
              <td>Put the TextFieldIcon in the correct place</td>
            </tr>
          </tbody>
        </table>

        <section>
          <Text component="h3" textStyle="title">
            Full Functionality JS Component (Floating Label, Validation)
          </Text>

          <TextField
            id="email"
            label="Email address"
            help={
              this.state.emailUseHelperText
                ? 'Helper Text (possibly validation message)'
                : undefined
            }
            persistentHelp={this.state.emailPersistentText}
            disabled={this.state.emailIsDisabled}
            required={this.state.emailIsRequired}
            dense={this.state.emailIsDense}
            hasError={this.state.emailUseValidationMessage}
          />

          <br />

          <label htmlFor="email_disabled">
            <input
              type="checkbox"
              value={this.state.emailIsDisabled}
              id="email_disabled"
              onClick={this.handleEmailDisabled}
            />{' '}
            Disabled
          </label>

          <br />

          <label htmlFor="email_rtl">
            <input type="checkbox" id="email_rtl" /> RTL
          </label>

          <br />

          <label htmlFor="email_dark_theme">
            <input type="checkbox" id="email_dark_theme" /> Dark Theme
          </label>

          <br />

          <label htmlFor="email_dense">
            <input
              type="checkbox"
              id="email_dense"
              value={this.state.emailIsDense}
              onClick={this.handleEmailDense}
            />{' '}
            Dense
          </label>

          <br />

          <label htmlFor="email_required">
            <input
              type="checkbox"
              id="email_required"
              value={this.state.emailIsRequired}
              onClick={this.handleEmailRequired}
            />{' '}
            Required
          </label>

          <br />

          <label htmlFor="email_use_helper_text">
            <input
              type="checkbox"
              id="email_use_helper_text"
              value={this.state.emailUseHelperText}
              onClick={this.handleEmailUseHelperText}
            />{' '}
            Use Helper Text
          </label>

          <br />

          <label htmlFor="email_helper_text">
            <input
              type="checkbox"
              id="email_helper_text"
              value={this.state.emailPersistentText}
              onClick={this.handleEmailPersistentText}
              disabled={!this.state.emailUseHelperText}
            />{' '}
            Make helper text persistent
          </label>

          <br />

          <label htmlFor="email_validation_message">
            <input
              type="checkbox"
              id="email_validation_message"
              value={this.state.emailUseValidationMessage}
              onClick={this.handleEmailValidationMessage}
              disabled={!this.state.emailUseHelperText}
            />{' '}
            Use helper text as validation message
          </label>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Password field with validation
          </Text>

          <TextField
            id="password"
            label="Choose password"
            type="password"
            help="Must be at least 8 characters long"
            persistentHelp
            required
          />
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Text Field box
          </Text>

          <TextField
            id="fullName"
            label="Your Name"
            help="Must be at least 8 characters"
            disabled={this.state.fullNameIsDisabled}
            dense={this.state.fullNameIsDense}
            withBox
            required
          />

          <br />

          <label htmlFor="fullName_disabled">
            <input
              type="checkbox"
              value={this.state.fullNameIsDisabled}
              id="fullName_disabled"
              onClick={this.handleFullNameDisabled}
            />{' '}
            Disabled
          </label>

          <br />

          <label htmlFor="email_rtl">
            <input type="checkbox" id="email_rtl" /> RTL
          </label>

          <br />

          <label htmlFor="fullName_darktheme">
            <input type="checkbox" id="edarkthememail_dark_theme" /> Dark Theme
          </label>

          <br />

          <label htmlFor="fullName_dense">
            <input
              type="checkbox"
              id="fullName_dense"
              value={this.state.fullNameIsDense}
              onClick={this.handleFullNameDense}
            />{' '}
            Dense
          </label>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Text Field - Leading/Trailing icons
          </Text>

          <div className="demo-note">
            <em>
              Note: Some implementations utilizing leading and trailing icons
              may wish to set a width on the
              <code>input</code> element to achieve uniform widths on text
              fields. This demo achieves that by adding a custom class name:{' '}
              <code>custom-text-field-input</code> and setting some style:
            </em>
            <br />
            <pre>
              <code>{cssCode}</code>
            </pre>
          </div>

          <TextField
            id="yourName"
            label="Your Name"
            className="custom-text-field-input"
            icon="leading"
            disabled={this.state.otherNameIsDisabled}
            dense={this.state.otherNameIsDense}
            withBox>
            <TextFieldIcon className="material-icons" tabIndex="0">
              event
            </TextFieldIcon>
          </TextField>

          <br />

          <TextField
            id="otherName"
            label="Your other Name"
            className="custom-text-field-input"
            icon="trailing"
            disabled={this.state.otherNameIsDisabled}
            dense={this.state.otherNameIsDense}
            withBox>
            <TextFieldIcon className="material-icons" tabIndex="0">
              delete
            </TextFieldIcon>
          </TextField>

          <br />

          <label htmlFor="fullName_disabled">
            <input
              type="checkbox"
              value={this.state.otherNameIsDisabled}
              id="fullName_disabled"
              onClick={this.handleOtherNameDisabled}
            />{' '}
            Disabled
          </label>

          <br />

          <label htmlFor="email_rtl">
            <input type="checkbox" id="email_rtl" /> RTL
          </label>

          <br />

          <label htmlFor="fullName_darktheme">
            <input type="checkbox" id="edarkthememail_dark_theme" /> Dark Theme
          </label>

          <br />

          <label htmlFor="fullName_dense">
            <input
              type="checkbox"
              id="fullName_dense"
              value={this.state.otherNameIsDense}
              onClick={this.handleOtherNameDense}
            />{' '}
            Dense
          </label>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            CSS Only Text Field
          </Text>

          <label htmlFor="cssName">
            Your name: <TextField id="cssName" label="Name" cssOnly />
          </label>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            CSS Only Text Field box
          </Text>

          <label htmlFor="cssYourName">
            Your name:{' '}
            <TextField id="cssYourName" label="Name" cssOnly withBox />
          </label>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Preventing FOUC
          </Text>

          <TextField
            id="fouc"
            label="Label floating above"
            defaultValue="Pre-filled value"
          />
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Textarea
          </Text>

          <TextField
            id="textArea1"
            label="Textarea Label"
            rows="8"
            cols="40"
            disabled={this.state.textarea1IsDisabled}
            required={this.state.textarea1isRequired}
            multiline
          />

          <br />

          <label htmlFor="textarea1_disabled">
            <input
              type="checkbox"
              value={this.state.textarea1IsDisabled}
              id="textarea1_disabled"
              onClick={this.handleTextarea1Disabled}
            />{' '}
            Disabled
          </label>

          <br />

          <label htmlFor="textarea1_rtl">
            <input type="checkbox" id="textarea1_rtl" /> RTL
          </label>

          <br />

          <label htmlFor="textarea1_dark_theme">
            <input type="checkbox" id="textarea1_dark_theme" /> Dark Theme
          </label>

          <br />

          <label htmlFor="textarea1_required">
            <input
              type="checkbox"
              id="textarea1_required"
              value={this.state.textarea1isRequired}
              onClick={this.handleTextarea1Required}
            />{' '}
            Required
          </label>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            CSS Only Textarea
          </Text>

          <TextField
            id="textArea2"
            label="Enter something about yourself"
            rows="8"
            cols="40"
            multiline
            cssOnly
          />
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Full-Width Text Field and Textarea
          </Text>

          <TextField
            id="full-input"
            label="Subject"
            disabled={this.state.fullWidthIsDisabled}
            dense={this.state.fullWidthIsDense}
            fullWidth
          />

          <br />

          <TextField
            id="full-textarea"
            label="Textarea label"
            rows="8"
            cols="40"
            disabled={this.state.fullWidthIsDisabled}
            dense={this.state.fullWidthIsDense}
            multiline
            fullWidth
          />
        </section>

        <label htmlFor="full_width_disabled">
          <input
            type="checkbox"
            value={this.state.fullWidthIsDisabled}
            id="full_width_disabled"
            onClick={this.handleFullWidthDisabled}
          />{' '}
          Disabled
        </label>

        <br />

        <label htmlFor="full_width_darktheme">
          <input type="checkbox" id="full_width_darktheme" /> Dark Theme
        </label>

        <br />

        <label htmlFor="full_width_dense">
          <input
            type="checkbox"
            id="full_width_dense"
            value={this.state.fullWidthIsDense}
            onClick={this.handleFullWidthDense}
          />{' '}
          Dense
        </label>
      </LayoutCell>
    );
  }
}
