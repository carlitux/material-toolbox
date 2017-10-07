// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';
import ThemedLink from './ThemedLink';

import { LayoutCell } from 'react-mcw/layout-grid';
import { Text } from 'react-mcw/typography';
/* eslint-enable */

const HomePage = () => (
  <LayoutCell align="bottom" span={12}>
    <Text component="div" textStyle="body2">
      <p>Second note.- Most of examples, design and content is from:</p>
      <p>
        <ThemedLink
          to="https://material.io/components/web/catalog/"
          target="_blank">
          https://material.io/components/web/catalog/
        </ThemedLink>
      </p>
      <p>
        <ThemedLink to="https://react-mdc.github.io/" target="_blank">
          https://react-mdc.github.io/
        </ThemedLink>
      </p>
    </Text>
    <Text component="h5" textStyle="headline">
      Getting started
    </Text>
    <Text component="p" textStyle="body1">
      Get up and running with React Material Components web
    </Text>
    <Highlighter>$ npm install --save react-mcw</Highlighter>
  </LayoutCell>
);

export default HomePage;
