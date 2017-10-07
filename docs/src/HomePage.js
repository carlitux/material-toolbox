// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';
import ThemedLink from './ThemedLink';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
/* eslint-enable */

const importCode = '@import "@material/drawer/mdc-drawer";';

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
    <Text component="h2" textStyle="headline">
      Getting started
    </Text>
    <Text component="p" textStyle="body1">
      Get up and running with React Material Components web
    </Text>
    <Highlighter language="bash">
      $ npm install --save material-toolbox
    </Highlighter>
    <Text component="h3" textStyle="title">
      NOTE.- You have to import the css/scss files from material components,
      into your scss or the css as needed.
    </Text>
    <Highlighter language="css">{importCode}</Highlighter>
  </LayoutCell>
);

export default HomePage;
