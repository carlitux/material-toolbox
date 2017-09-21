// @flow
import * as React from 'react';

/* eslint-disable */
import { LayoutCell } from '@mcw/layout-grid';
import { Text } from '@mcw/typography';
/* eslint-enable */

const AnimationPage = () => (
  <LayoutCell align="bottom" span={12}>
    <Text component="h1" mdcStyle="display1">
      Animation
    </Text>
    <Text component="p" mdcStyle="body1">
      Material in motion is responsive and natural. Use these easing curves and
      duration patterns to create smooth and consistent motion.
    </Text>
    <Text component="p" mdcStyle="body2">
      So this is not implemented as React component this should be installed and
      used as you need in your components.{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://material.io/components/web/catalog/animation/">
        Read This.
      </a>
    </Text>
  </LayoutCell>
);

export default AnimationPage;
