// @flow
import * as React from 'react';

import LayoutGrid from '@mcw/layout-grid/Grid';
import LayoutInner from '@mcw/layout-grid/Inner';
import LayoutCell from '@mcw/layout-grid/Cell';

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
