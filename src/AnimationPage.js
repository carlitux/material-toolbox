// @flow
import * as React from 'react';

import { LayoutCell } from './material-toolbox/layout-grid';
import { Text } from './material-toolbox/typography';

import ThemedLink from './ThemedLink';

const AnimationPage = () => (
  <LayoutCell align="bottom" span={12}>
    <Text component="h1" textStyle="display1">
      Animation
    </Text>
    <Text component="p" textStyle="body1">
      Material in motion is responsive and natural. Use these easing curves and
      duration patterns to create smooth and consistent motion.
    </Text>
    <Text component="p" textStyle="body2">
      So this is not implemented as React component this should be installed and
      used as you need in your components.{' '}
      <ThemedLink
        target="_blank"
        to="https://material.io/components/web/catalog/animation/">
        Read This.
      </ThemedLink>
    </Text>
  </LayoutCell>
);

export default AnimationPage;
