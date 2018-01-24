// @flow
/* eslint-disable */
import * as React from 'react';

import Theme from 'material-toolbox/theme';
import { LayoutGrid, LayoutInner, LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';

const Hero = () => (
  <Theme theme="primary" textStyle="primary" textOn="primary">
    <header>
      <LayoutGrid>
        <LayoutInner>
          <LayoutCell align="bottom" span={12}>
            <Text textStyle="display2" component="h1">
              React Material Components for the Web
            </Text>
            <Text textStyle="headline" component="span" adjustMargin>
              Create beautiful apps with modular and customizable UI components
              using React wrapper of Google's Material Components for the Web.
            </Text>
            <Text textStyle="body2" component="p">
              Note.- This library is as simple as Material Web Components is,
              Tries to follow the guide lines as much as possible. The library
              do not do any assumptions on components or tags to be used unless
              the Material Components guide does.
            </Text>
          </LayoutCell>
        </LayoutInner>
      </LayoutGrid>
    </header>
  </Theme>
);

/* eslint-enable */
export default Hero;
