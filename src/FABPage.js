// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import FAB from 'material-toolbox/fab';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import FAB from 'material-toolbox/fab';`;

export default class FABPage extends React.Component<
  {},
  {
    exited: boolean,
  },
> {
  state = {
    exited: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleExit = () => {
    this.setState(state => ({ exited: !state.exited }));
  };

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Floating Action Button
        </Text>

        <Text component="h2" textStyle="headline">
          Floating Action Button component is a React wrappers of mdc-fab
          component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/buttons-floating-action-button.html"
            target="_blank">
            Material Design guidelines: Floating Action Button
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/buttons/floating-action-buttons/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          React components
        </Text>

        <Text component="h3" textStyle="title">
          Import
        </Text>

        <Highlighter language="javascript">{importComponents}</Highlighter>

        <Text component="h3" textStyle="title">
          FAB
        </Text>

        <table className={styles['table-doc']}>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>component</td>
              <td>String: button, a</td>
              <td>button</td>
              <td />
              <td>Element type that will generate the button</td>
            </tr>
            <tr>
              <td>ripple</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true will enable ripple effects</td>
            </tr>
            <tr>
              <td>primary</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true will set primary theme ripple effect</td>
            </tr>
            <tr>
              <td>accent</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true will set the secondary color on ripple effect</td>
            </tr>
            <tr>
              <td>mini</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true the FAB is smaller</td>
            </tr>
            <tr>
              <td>exited</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true creates a CSS transition effect</td>
            </tr>
          </tbody>
        </table>

        <section>
          <Text component="legend" textStyle="display1">
            FABs with Ripple
          </Text>

          <div className="demo-fabs">
            <figure>
              <FAB className="material-icons" ripple>
                favorite_border
              </FAB>
              <figcaption>
                <div>Themed FAB</div>
              </figcaption>
            </figure>
            <figure>
              <FAB className="material-icons" mini ripple>
                favorite_border
              </FAB>
              <figcaption>
                <div>Mini FAB</div>
                <div>
                  <code>mdc-fab--mini</code>
                </div>
              </figcaption>
            </figure>
            <figure>
              <FAB className="lightGreen800Fab material-icons" ripple>
                favorite
              </FAB>
              <figcaption>
                <div>Customized Accessible FAB</div>
                <div>
                  <code>@include mdc-fab-accessible</code>
                </div>
              </figcaption>
            </figure>
            <figure>
              <FAB className="lightGreen800Fab material-icons" mini ripple>
                favorite_border
              </FAB>
              <figcaption>
                <div>Customized Accessible Mini FAB</div>
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <Text component="legend" textStyle="display1">
            FABs with Ripple
          </Text>

          <div className="demo-fabs">
            <figure>
              <FAB className="material-icons">favorite_border</FAB>
              <figcaption>
                <div>Themed FAB</div>
              </figcaption>
            </figure>
            <figure>
              <FAB className="material-icons" mini>
                favorite_border
              </FAB>
              <figcaption>
                <div>Mini FAB</div>
                <div>
                  <code>mdc-fab--mini</code>
                </div>
              </figcaption>
            </figure>
            <figure>
              <FAB className="lightGreen800Fab material-icons">favorite</FAB>
              <figcaption>
                <div>Customized Accessible FAB</div>
                <div>
                  <code>@include mdc-fab-accessible</code>
                </div>
              </figcaption>
            </figure>
            <figure>
              <FAB className="lightGreen800Fab material-icons" mini>
                favorite_border
              </FAB>
              <figcaption>
                <div>Customized Accessible Mini FAB</div>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="demo-fabs relative">
          <Text component="legend" textStyle="display1">
            Example of Enter and Exit Motions
          </Text>

          <div className="fab-motion-container">
            <div className="fab-motion-container__view">
              <p>View one (with FAB)</p>
            </div>
            <div
              className={`fab-motion-container__view ${
                this.state.exited ? 'fab-motion-container__view--exited' : ''
              }`}>
              <p>View two (without FAB)</p>
              <p>
                <button
                  type="button"
                  id="enter-exit-back"
                  disabled=""
                  onClick={this.handleExit}>
                  Go back
                </button>
              </p>
            </div>
            <FAB
              className="demo-absolute-fab material-icons"
              onClick={this.handleExit}
              exited={!this.state.exited}
              ripple>
              add
            </FAB>
          </div>
        </section>
        <FAB className="demo-fixed-fab" ripple>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </FAB>
      </LayoutCell>
    );
  }
}
