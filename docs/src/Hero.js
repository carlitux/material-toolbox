// @flow
import * as React from 'react';

/* eslint-disable */
import Theme from '@mcw/theme';
import { LayoutGrid, LayoutInner, LayoutCell } from '@mcw/layout-grid';
import { Text } from '@mcw/typography';
/* eslint-enable */

const Hero = () => (
  <Theme theme="primary" textStyle="primary">
    <header>
      <LayoutGrid>
        <LayoutInner>
          <LayoutCell align="bottom" span={12}>
            <Text mdcStyle="display2" component="h1">
              React Material Components for the Web
            </Text>
            <Text mdcStyle="headline" component="span" adjustMargin>
              Create beautiful apps with modular and customizable UI components
              using React wrapper of Google's Material Components for the Web.
            </Text>
            <Text mdcStyle="body2" component="p">
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

export default Hero;
