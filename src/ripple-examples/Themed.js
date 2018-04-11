// @flow
import * as React from 'react';

import Example from '../Example';

import LayoutCell from '../material-toolbox/layout-grid/Cell';
import LayoutInner from '../material-toolbox/layout-grid/Inner';
import Ripple from '../material-toolbox/ripple';
import Elevation from '../material-toolbox/elevation';
import Theme from '../material-toolbox/theme';

const themedSource = `import Ripple from 'material-toolbox/ripple';
import Elevation from 'material-toolbox/elevation';
import Theme from 'material-toolbox/theme';

const component = (
  <div>
    <Theme textStyle="primary">
      <Elevation depth={2}>
        <Ripple primary>
          <div
            tabIndex="0"
            className="ripple-demo-surface">
            Primary
          </div>
        </Ripple>
      </Elevation>
    </Theme>

    <Theme textStyle="secondary">
      <Elevation depth={2}>
        <Ripple accent>
          <div
            tabIndex="0"
            className="ripple-demo-surface">
            Secondary
          </div>
        </Ripple>
      </Elevation>
    </Theme>
  </div>
)`;

const themedSourceOnlyCss = `import Ripple from 'material-toolbox/ripple';
import Elevation from 'material-toolbox/elevation';
import Theme from 'material-toolbox/theme';

const component = (
  <div>
    <Theme textStyle="primary">
      <Elevation depth={2}>
        <Ripple primary cssOnly>
          <div
            tabIndex="0"
            className="ripple-demo-surface">
            Primary
          </div>
        </Ripple>
      </Elevation>
    </Theme>

    <Theme textStyle="secondary">
      <Elevation depth={2}>
        <Ripple accent cssOnly>
          <div
            tabIndex="0"
            className="ripple-demo-surface">
            Secondary
          </div>
        </Ripple>
      </Elevation>
    </Theme>
  </div>
)`;

const ThemedRipple = () => (
  <LayoutInner>
    <LayoutCell desktop={6}>
      <Example title="Theme Styles" source={themedSource}>
        <Theme textStyle="primary">
          <Elevation depth={2}>
            <Ripple primary>
              <div
                tabIndex="0" // eslint-disable-line
                className="ripple-demo-surface">
                Primary
              </div>
            </Ripple>
          </Elevation>
        </Theme>

        <Theme textStyle="secondary">
          <Elevation depth={2}>
            <Ripple accent>
              <div
                tabIndex="0" // eslint-disable-line
                className="ripple-demo-surface">
                Secondary
              </div>
            </Ripple>
          </Elevation>
        </Theme>
      </Example>
    </LayoutCell>

    <LayoutCell desktop={6}>
      <Example title="Theme Styles - CSS Only" source={themedSourceOnlyCss}>
        <Theme textStyle="primary">
          <Elevation depth={2}>
            <Ripple primary cssOnly>
              <div
                tabIndex="0" // eslint-disable-line
                className="ripple-demo-surface">
                Primary
              </div>
            </Ripple>
          </Elevation>
        </Theme>

        <Theme textStyle="secondary">
          <Elevation depth={2}>
            <Ripple accent cssOnly>
              <div
                tabIndex="0" // eslint-disable-line
                className="ripple-demo-surface">
                Secondary
              </div>
            </Ripple>
          </Elevation>
        </Theme>
      </Example>
    </LayoutCell>
  </LayoutInner>
);

export default ThemedRipple;
