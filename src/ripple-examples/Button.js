// @flow
import * as React from 'react';

import Example from '../Example';

import LayoutCell from '../material-toolbox/layout-grid/Cell';
import LayoutInner from '../material-toolbox/layout-grid/Inner';
import Ripple from '../material-toolbox/ripple';
import Elevation from '../material-toolbox/elevation';

const source = `import Ripple from 'material-toolbox/ripple';
import Elevation from 'material-toolbox/elevation';

const component = (
<Elevation depth={2}>
  <Ripple>
    <button type="button" className="ripple-demo-surface">
      button
    </button>
  </Ripple>
</Elevation>
)`;

const sourceOnlyCss = `import Ripple from 'material-toolbox/ripple';
import Elevation from 'material-toolbox/elevation';

const component = (
<Elevation depth={2}>
  <Ripple cssOnly>
    <button type="button" className="ripple-demo-surface">
      button
    </button>
  </Ripple>
</Elevation>
)`;

const BoundedRipple = () => (
  <LayoutInner>
    <LayoutCell desktop={6}>
      <Example title="Applied to <button> element" source={source}>
        <Elevation depth={2}>
          <Ripple>
            <button type="button" className="ripple-demo-surface">
              button
            </button>
          </Ripple>
        </Elevation>
      </Example>
    </LayoutCell>

    <LayoutCell desktop={6}>
      <Example
        title="Applied to <button> element - CSS Only"
        source={sourceOnlyCss}>
        <Elevation depth={2}>
          <Ripple cssOnly>
            <button type="button" className="ripple-demo-surface">
              button
            </button>
          </Ripple>
        </Elevation>
      </Example>
    </LayoutCell>
  </LayoutInner>
);

export default BoundedRipple;
