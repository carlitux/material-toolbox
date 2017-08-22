// @flow
import * as React from 'react';

import { LayoutGrid, LayoutInner, LayoutCell } from '@mcw/layout-grid';

const App = () =>
  <LayoutGrid>
    <LayoutInner>
      <LayoutCell align="bottom" span={2}>
        Test
      </LayoutCell>
      <LayoutCell align="bottom" span={2}>
        Test 2 <br />
        Test 2 <br />
      </LayoutCell>
    </LayoutInner>
  </LayoutGrid>;

export default App;
