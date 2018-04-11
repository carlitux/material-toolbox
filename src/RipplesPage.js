// @flow
import * as React from 'react';

import LayoutCell from './material-toolbox/layout-grid/Cell';
import Text from './material-toolbox/typography/Text';

import ThemedLink from './ThemedLink';
import BoundedRipple from './ripple-examples/Bounded';
import UnboundedRipple from './ripple-examples/Unbounded';
import ThemedRipple from './ripple-examples/Themed';
import ButtonRipple from './ripple-examples/Button';

export default class RipplesPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Ripple
        </Text>

        <Text component="h2" textStyle="headline">
          Ripple component is a React wrapper of mdc-ripple component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction"
            target="_blank">
            Material Design guidelines: Choreography
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/ripples/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          Create Adapter function
        </Text>

        <p>
          Function that create adapter this is used for more advanced use. You
          can see source of Checkbox component.
        </p>

        <Text component="h1" textStyle="display1">
          React Components
        </Text>

        <Text component="h2" textStyle="title">
          Ripple
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
              <td>primary</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Sets primary color to ripple effect.</td>
            </tr>
            <tr>
              <td>accent</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Sets secondary color to ripple effect.</td>
            </tr>
            <tr>
              <td>unbounded</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Unbound to ripple effect from element.</td>
            </tr>
            <tr>
              <td>cssOnly</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Disable all dynamic behaviour</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Disable ripple effect</td>
            </tr>
          </tbody>
        </table>

        <Text component="h1" textStyle="display1">
          Examples
        </Text>

        <BoundedRipple />
        <UnboundedRipple />
        <ThemedRipple />
        <ButtonRipple />
      </LayoutCell>
    );
  }
}
