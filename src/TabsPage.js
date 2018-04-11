// @flow
import * as React from 'react';

import { LayoutCell } from './material-toolbox/layout-grid';
import { Text } from './material-toolbox/typography';
import BasicTabBar from './tabs-examples/BasicTabBar';
import ThemedLink from './ThemedLink';

type Props = {};

export default class TabsPage extends React.Component<Props> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell span={12}>
        <Text component="h1" textStyle="display1">
          Tabs
        </Text>

        <Text component="h2" textStyle="headline">
          Tabs components is a React wrapper of mdc-tabs component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/snackbars-toasts.html"
            target="_blank">
            Material Design guidelines: Snackbars & toasts
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/snackbars/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          React components
        </Text>

        <BasicTabBar />

        {/* <Text component="p" textStyle="body1"> */}
        {/*   Material in motion is responsive and natural. Use these easing curves and */}
        {/*   duration patterns to create smooth and consistent motion. */}
        {/* </Text> */}
        {/* <Text component="p" textStyle="body2"> */}
        {/*   So this is not implemented as React component this should be installed and */}
        {/*   used as you need in your components.{' '} */}
        {/*   <ThemedLink */}
        {/*     target="_blank" */}
        {/*     to="https://material.io/components/web/catalog/animation/"> */}
        {/*     Read This. */}
        {/*   </ThemedLink> */}
        {/* </Text> */}
      </LayoutCell>
    );
  }
}
