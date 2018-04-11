// @flow
import * as React from 'react';

import Example from '../Example';

import LayoutCell from '../material-toolbox/layout-grid/Cell';
import LayoutInner from '../material-toolbox/layout-grid/Inner';
import Ripple from '../material-toolbox/ripple';
import Elevation from '../material-toolbox/elevation';

const boundedSource = `import Ripple from 'material-toolbox/ripple';
import Elevation from 'material-toolbox/elevation';

const component = (
<Elevation depth={2}>
  <Ripple>
    <div
      tabIndex="0"
      className="ripple-demo-surface">
      Interact with me!
    </div>
  </Ripple>
</Elevation>
)`;

const boundedSourceOnlyCss = `import Ripple from 'material-toolbox/ripple';
import Elevation from 'material-toolbox/elevation';

const component = (
<Elevation depth={2}>
  <Ripple cssOnly>
    <div
      tabIndex="0"
      className="ripple-demo-surface">
      Interact with me!
    </div>
  </Ripple>
</Elevation>
)`;

const BoundedRipple = () => (
  <LayoutInner>
    <LayoutCell desktop={6}>
      <Example title="Bounded" source={boundedSource}>
        <Elevation depth={2}>
          <Ripple>
            <div
              tabIndex="0" // eslint-disable-line
              className="ripple-demo-surface">
              Interact with me!
            </div>
          </Ripple>
        </Elevation>
      </Example>
    </LayoutCell>

    <LayoutCell desktop={6}>
      <Example title="Bounded - CSS Only" source={boundedSourceOnlyCss}>
        <Elevation depth={2}>
          <Ripple cssOnly>
            <div
              tabIndex="0" // eslint-disable-line
              className="ripple-demo-surface">
              Interact with me!
            </div>
          </Ripple>
        </Elevation>
      </Example>
    </LayoutCell>
  </LayoutInner>
);

export default BoundedRipple;
