// @flow
import * as React from 'react';

import Example from '../Example';

import LayoutCell from '../material-toolbox/layout-grid/Cell';
import LayoutInner from '../material-toolbox/layout-grid/Inner';
import Ripple from '../material-toolbox/ripple';

const unboundedSource = `import Ripple from 'material-toolbox/ripple';

const component = (
  <Ripple unbounded>
    <div
      tabIndex="0"
      className="ripple-demo-surface material-icons ripple-demo-surface--icon">
      favorite
    </div>
  </Ripple>
)`;

const unboundedSourceOnlyCss = `import Ripple from 'material-toolbox/ripple';

const component = (
  <Ripple unbounded cssOnly>
    <div
      tabIndex="0"
      className="ripple-demo-surface material-icons ripple-demo-surface--icon">
      favorite
    </div>
  </Ripple>
)`;

const UnboundedRipple = () => (
  <LayoutInner>
    <LayoutCell desktop={6}>
      <Example title="Unbounded" source={unboundedSource}>
        <Ripple unbounded>
          <div
            tabIndex="0" // eslint-disable-line
            className="ripple-demo-surface material-icons ripple-demo-surface--icon">
            favorite
          </div>
        </Ripple>
      </Example>
    </LayoutCell>

    <LayoutCell desktop={6}>
      <Example title="Unbounded - CSS Only" source={unboundedSourceOnlyCss}>
        <Ripple unbounded cssOnly>
          <div
            tabIndex="0" // eslint-disable-line
            className="ripple-demo-surface material-icons ripple-demo-surface--icon">
            favorite
          </div>
        </Ripple>
      </Example>
    </LayoutCell>
  </LayoutInner>
);

export default UnboundedRipple;
