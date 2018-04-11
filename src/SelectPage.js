// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button } from 'material-toolbox/button';
import { List, ListItem } from 'material-toolbox/list';
import { Select, SelectOption, SelectOptGroup } from 'material-toolbox/select';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import {
  Select,
  SelectOption,
  SelectOptGroup,
  } from 'material-toolbox/select';
`;
const cbSignature = '(value: string) => void';

export default class SelectPage extends React.Component<
  {},
  {
    value: string,
    disabled: boolean,
  },
> {
  state = {
    value: '',
    disabled: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange = (value: string) => {
    this.setState({ value });
  };

  handleDisabled = () => {
    this.setState(state => ({ disabled: !state.disabled }));
  };

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Select Menus
        </Text>
        <Text component="h2" textStyle="headline">
          Select Menu components are React wrappers of mdc-select components.
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
            to="https://material.io/guidelines/components/menus.html"
            target="_blank">
            Material Design guidelines: Menus
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
          SelectOption
        </Text>
        <Text component="h3" textStyle="title">
          SelectOptGroup
        </Text>
        <Text component="h3" textStyle="title">
          Select
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
              <td>size</td>
              <td>string</td>
              <td />
              <td />
              <td>The size of values in multiple select</td>
            </tr>
            <tr>
              <td>cssOnly</td>
              <td>boolean</td>
              <td />
              <td />
              <td>if true will disable javascript component</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>method to be called when change is done</td>
            </tr>
          </tbody>
        </table>

        <section>
          <Text component="h3" textStyle="title">
            Fully-Featured Component
          </Text>
          <Select onChange={this.handleChange} disabled={this.state.disabled}>
            <SelectOption value="fruit-roll-up">Fruit Rool Ups</SelectOption>
            <SelectOption value="cotton-candy">Candy (cotton)</SelectOption>
            <SelectOption disabled>Vegetables</SelectOption>
          </Select>
          <p>Selected Value: {this.state.value}</p>
          <label>
            <input
              type="checkbox"
              value={this.state.disabled}
              onClick={this.handleDisabled}
            />{' '}
            Disabled
          </label>

          <br />

          <label>
            <input type="checkbox" /> Dark Theme
          </label>

          <br />

          <label>
            <input type="checkbox" /> RTL
          </label>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            CSS Only
          </Text>

          <Select cssOnly>
            <SelectOption>Pick a food group</SelectOption>
            <SelectOption value="grains">
              Bread, Cereal, Rice, and Pasta
            </SelectOption>
            <SelectOption value="vegetables" disabled>
              Vegetables
            </SelectOption>
            <SelectOption value="fruit">Fruit</SelectOption>
            <SelectOption value="dairy">Milk, Yogurt, and Cheese</SelectOption>
            <SelectOption value="meat">
              Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </SelectOption>
            <SelectOption value="fats">Fats, Oils, and Sweets</SelectOption>
          </Select>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Select Multiple - CSS Only
          </Text>

          <Select multiple size="8">
            <SelectOptGroup label="Fats, Oils, &amp; Sweets">
              <SelectOption>Olive Oil</SelectOption>
              <SelectOption>Brown Sugar</SelectOption>
              <SelectOption>Ice Cream</SelectOption>
            </SelectOptGroup>
            <SelectOption divider />
            <SelectOptGroup label="Dairy">
              <SelectOption>Milk</SelectOption>
              <SelectOption>Cheese</SelectOption>
              <SelectOption>More Cheese</SelectOption>
            </SelectOptGroup>
          </Select>
        </section>
      </LayoutCell>
    );
  }
}
