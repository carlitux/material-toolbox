// @flow
import * as React from 'react';

import { LayoutCell } from './material-toolbox/layout-grid';
import { Text } from './material-toolbox/typography';
import DefaultTextField from './textfield-examples/DefaultTextfield';
import ValidationPassword from './textfield-examples/ValidationPassword';
import OutlinedTextField from './textfield-examples/OutlinedTextField';
import BoxedTextField from './textfield-examples/Boxed';
import WithIcons from './textfield-examples/WithIcons';
import PreFilled from './textfield-examples/PreFilled';
import TextArea from './textfield-examples/TextArea';
import FullWidth from './textfield-examples/FullWidth';

import ThemedLink from './ThemedLink';

const cbSignature = '() => void';

export default class TextFieldPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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

        <Text component="h3" textStyle="title">
          Text Field Icon
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/text-fields.html#text-fields-layout"
            target="_blank">
            Material Design guidelines: Text Fields Layout
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/input-controls/text-field/icon/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h3" textStyle="title">
          Floating Labels
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/text-fields.html#text-fields-layout"
            target="_blank">
            Material Design guidelines: Text Fields Layout
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/input-controls/floating-label/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h3" textStyle="title">
          Line Ripple
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/text-fields.html#text-fields-layout"
            target="_blank">
            Material Design guidelines: Text Fields Layout
          </ThemedLink>
        </p>

        <Text component="h3" textStyle="title">
          Notched Outline
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/text-fields.html#text-fields-field-variations"
            target="_blank">
            Material Design guidelines: Text Field Variations
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/input-controls/text-field/outline/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h3" textStyle="title">
          Text Field Helper Text
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/text-fields.html#text-fields-layout"
            target="_blank">
            Material Design guidelines: Text Fields Layout
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/input-controls/text-field/helper-text/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h3" textStyle="title">
          Text Fields
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
            to="https://material.io/components/web/catalog/input-controls/text-field/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          React components
        </Text>

        <Text component="h3" textStyle="title">
          TextFieldIcon
        </Text>

        <table className="table-props">
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
              <td>clickable</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Used to create some atributtes.</td>
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
              <td>onActived</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>
                Callback called when component icon is clicked or Enter key,
                preferred method use onClick or onKeyDown
              </td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          TextField
        </Text>

        <table className="table-props">
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
              <td>label</td>
              <td>string</td>
              <td />
              <td>✔</td>
              <td>
                Label text for element if cssOnly is set will be set as
                placeholder
              </td>
            </tr>
            <tr>
              <td>cssOnly</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>
                If true will render css only component without js effects.
              </td>
            </tr>
            <tr>
              <td>fullWidth</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>
                If true set full width element and do not use outlined or box.
              </td>
            </tr>
            <tr>
              <td>multiline</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>If true render a textarea element.</td>
            </tr>
            <tr>
              <td>dense</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>If true will generate dense UI</td>
            </tr>
            <tr>
              <td>outlined</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>If true set the outlined UI.</td>
            </tr>
            <tr>
              <td>box</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>If true set the box UI with ripple effect.</td>
            </tr>
            <tr>
              <td>helperText</td>
              <td>string</td>
              <td />
              <td />
              <td>Text used to create a help message element</td>
            </tr>
            <tr>
              <td>persistentHelperText</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>If true sets the helper text visible all the time.</td>
            </tr>
            <tr>
              <td>validationHelperText</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>
                If true sets the helper text visible all the time with message
                as validation.
              </td>
            </tr>
            <tr>
              <td>icon</td>
              <td>string: leading, trailing</td>
              <td />
              <td />
              <td>Put the TextFieldIcon in the correct place</td>
            </tr>
            <tr>
              <td>invalid</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true set invalid/error UI to component.</td>
            </tr>
            <tr>
              <td>children</td>
              <td>React.Element&lt;any&gt;</td>
              <td />
              <td />
              <td>Only one children that is used as Icon</td>
            </tr>
            <tr>
              <td>aria-controls</td>
              <td>string</td>
              <td />
              <td />
              <td>
                text that is used as id on text helper and enable aria values
              </td>
            </tr>
          </tbody>
        </table>

        <DefaultTextField />
        <ValidationPassword />
        <OutlinedTextField />
        <BoxedTextField />
        <WithIcons />
        <PreFilled />
        <TextArea />
        <FullWidth />
      </LayoutCell>
    );
  }
}
