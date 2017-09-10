// @flow
import * as React from 'react';

/* eslint-disable */
import { LayoutCell } from '@mcw/layout-grid';
import { TypographyElement } from '@mcw/typography';
/* eslint-enable */

const HomePage = () =>
  <LayoutCell align="bottom" span={12}>
    <TypographyElement mdcStyle="display2" component="h1">
      React Material Components for the Web
    </TypographyElement>
    <TypographyElement mdcStyle="headline" component="span" adjustMargin>
      Create beautiful apps with modular and customizable UI components.
    </TypographyElement>
    <TypographyElement mdcStyle="body2" component="p">
      Note.- This library is as simple as Material Web Components is, you can
      add many native fields to react components. Tries to follow the guide
      lines as much as possible. The library do not do any assumptions on
      components, tags to be used unless the Material Components guide does.
    </TypographyElement>
  </LayoutCell>;

export default HomePage;
