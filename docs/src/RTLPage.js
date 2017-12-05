// @flow
/* eslint-disable */
import * as React from 'react';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';

import ThemedLink from './ThemedLink';
/* eslint-enable */

const RTLPage = () => (
  <LayoutCell align="bottom" span={12}>
    <Text component="h1" textStyle="display1">
      RTL
    </Text>
    <Text component="p" textStyle="body1">
      UIs for languages that are read from right-to-left (RTL), such as Arabic
      and Hebrew, should be mirrored to ensure content is easy to understand.
    </Text>

    <Text component="p" textStyle="body2">
      So this is not implemented as React component this should be installed and
      used as you need in your components.{' '}
      <ThemedLink
        target="_blank"
        to="https://material.io/components/web/catalog/rtl/">
        Read This.
      </ThemedLink>
    </Text>
  </LayoutCell>
);

export default RTLPage;
