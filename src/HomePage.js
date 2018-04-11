// @flow
import * as React from 'react';

import LayoutCell from './material-toolbox/layout-grid/Cell';
import Text from './material-toolbox/typography/Text';

import Highlighter from './Highlighter';
import ThemedLink from './ThemedLink';

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

    <Text component="h2" textStyle="headline">
      Notes
    </Text>

    <p>
      1. Some components needs to refresh on first load of app, this because
      those components needs to know the correct values of DOM and those
      components have a property <strong>refreshAt</strong> to get the timeout
      to be refreshed. This value depends a lot of your app. If you need to
      avoid that, use another library like{' '}
      <ThemedLink
        target="_blank"
        to="https://github.com/ctrlplusb/react-sizeme">
        react-sizeme
      </ThemedLink>
    </p>

    <p>
      2. You have to import the css/scss files from material components, into
      your scss or the css as needed.
    </p>

    <Highlighter language="css">{importCode}</Highlighter>
  </LayoutCell>
);

export default HomePage;
