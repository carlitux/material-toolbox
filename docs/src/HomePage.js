// @flow
import * as React from 'react';
import Highlight from 'react-highlight';

/* eslint-disable */
import { LayoutCell } from '@mcw/layout-grid';
import { Text } from '@mcw/typography';
/* eslint-enable */

const HomePage = () => (
  <LayoutCell align="bottom" span={12}>
    <Text component="p" mdcStyle="body2">
      Second note.- Most of examples, design and content is from
      https://material.io/components/web/catalog/ and
      https://react-mdc.github.io/
    </Text>
    <Text component="h5" mdcStyle="headline">
      Getting started
    </Text>
    <Text component="p" mdcStyle="body1">
      Get up and running with React Material Components web
    </Text>
    <Highlight>$ npm install --save @mcw/__component-name__</Highlight>
  </LayoutCell>
);

export default HomePage;
