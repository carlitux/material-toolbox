// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import IconToggle from 'material-toolbox/icon-toggle';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import IconToggle from 'material-toolbox/icon-toggle';`;
const onChangeSignature = '(evtData: { isOn: boolean }) => void';
const onOffSignature = '{ label: string, content?: string, cssClass?: string }';

export default class IconTogglePage extends React.Component<
  {},
  {
    checked: boolean,
  },
> {
  state = {
    checked: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChecked = (data: { isOn: boolean }) => {
    this.setState({ checked: data.isOn });
  };

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          IconToggle
        </Text>

        <Text component="h2" textStyle="headline">
          IconToggle component is a React wrappers of mdc-icon-toggle component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/buttons.html#buttons-toggle-buttons"
            target="_blank">
            Material Design guidelines: Toggle buttons
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/buttons/icon-toggle-buttons/"
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
          IconToggle
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
              <td>pressed</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true the icon will be filled</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{onChangeSignature}</td>
              <td />
              <td />
              <td>Notify when the state changed</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td />
              <td />
              <td>
                if true will disable button and ripple effect if ripple set.
              </td>
            </tr>
            <tr>
              <td>primary</td>
              <td>boolean</td>
              <td />
              <td />
              <td>
                If true will set primary theme ripple effect and component
              </td>
            </tr>
            <tr>
              <td>on</td>
              <td>{onOffSignature}</td>
              <td />
              <td>✔</td>
              <td>Object used to update aria attributes.</td>
            </tr>
            <tr>
              <td>off</td>
              <td>{onOffSignature}</td>
              <td />
              <td>✔</td>
              <td>Object used to update aria attributes.</td>
            </tr>
          </tbody>
        </table>

        <section className="icon-toggle-example">
          <div className="toggle-example">
            <h2>Using Material Icons</h2>
            <div className="demo-wrapper">
              <IconToggle
                className="material-icons"
                on={{ label: 'Remove from favorites', content: 'favorite' }}
                off={{ label: 'Add to favorites', content: 'favorite_border' }}
                onChange={this.handleChecked}
                pressed={this.state.checked}
              />
            </div>
            <p>
              Favorited?{' '}
              <span id="favorited-status">
                {this.state.checked ? 'yes' : 'no'}
              </span>
            </p>
          </div>

          <div className="toggle-example">
            <h2>Using Font Awesome</h2>
            <div className="demo-wrapper">
              <IconToggle
                on={{ label: 'Unstar this item', cssClass: 'fa-star' }}
                off={{ label: 'Star this item', cssClass: 'fa-star-o' }}
                pressed>
                <i className="fa" aria-hidden="true" />
              </IconToggle>
            </div>
          </div>

          <div className="toggle-example mdc-theme--dark">
            <h2 className="mdc-theme--text-primary-on-dark">Dark Theme</h2>
            <div className="demo-wrapper">
              <IconToggle
                className="material-icons"
                on={{ label: 'Remove from favorites', content: 'favorite' }}
                off={{ label: 'Add to favorites', content: 'favorite_border' }}
              />
            </div>
          </div>

          <div className="toggle-example">
            <h2>Disabled Icons</h2>
            <div className="demo-wrapper">
              <IconToggle
                className="material-icons"
                on={{ label: 'Remove from favorites', content: 'favorite' }}
                off={{ label: 'Add to favorites', content: 'favorite_border' }}
                disabled
              />
            </div>
            <div className="mdc-theme--dark">
              <div className="demo-wrapper">
                <div className="demo-wrapper">
                  <IconToggle
                    className="material-icons"
                    on={{ label: 'Remove from favorites', content: 'favorite' }}
                    off={{
                      label: 'Add to favorites',
                      content: 'favorite_border',
                    }}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="toggle-example">
            <h2>Additional Color Combinations</h2>
            <div id="demo-color-combos">
              <div id="light-on-bg" className="demo-color-combo">
                <div>
                  <Theme textStyle="primary" textOn="primary">
                    <IconToggle
                      className="material-icons"
                      on={{
                        label: 'Remove from favorites',
                        content: 'favorite',
                      }}
                      off={{
                        label: 'Add to favorites',
                        content: 'favorite_border',
                      }}
                    />
                  </Theme>
                </div>
                <p className="mdc-theme--text-primary-on-primary">
                  Light icon on background
                </p>
              </div>

              <div id="dark-on-bg" className="demo-color-combo">
                <Theme textStyle="primary">
                  <IconToggle
                    className="material-icons"
                    on={{
                      label: 'Remove from favorites',
                      content: 'favorite',
                    }}
                    off={{
                      label: 'Add to favorites',
                      content: 'favorite_border',
                    }}
                  />
                </Theme>
                <p>Dark icon on background</p>
              </div>
              <div
                id="custom-on-dark"
                className="demo-color-combo mdc-theme--dark">
                <div>
                  <IconToggle
                    className="material-icons"
                    on={{ label: 'Remove from favorites', content: 'favorite' }}
                    off={{
                      label: 'Add to favorites',
                      content: 'favorite_border',
                    }}
                  />
                </div>
                <p className="mdc-theme--text-primary-on-dark">
                  Custom color on dark background
                </p>
              </div>
            </div>
          </div>
        </section>
      </LayoutCell>
    );
  }
}
