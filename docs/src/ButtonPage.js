// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button, ButtonIcon } from 'material-toolbox/button';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import { Button, ButtonIcon } from 'material-toolbox/button';`;

const buttons = [
  {
    children: 'Baseline',
    props: {},
  },
  {
    children: 'Compact',
    props: {
      buttonType: 'compact',
    },
  },
  {
    children: 'Dense',
    props: {
      buttonType: 'dense',
    },
  },
  {
    children: [
      <ButtonIcon key="icon" className="material-icons">
        favorite
      </ButtonIcon>,
      'Icon',
    ],
    props: {},
  },
  {
    children: 'Link',
    props: {
      href: 'javascript:void(0)', // eslint-disable-line
      component: 'a',
    },
  },
];

export default class TypographyPage extends React.Component<
  {},
  {
    disabled: boolean,
    dark: boolean,
  },
> {
  state = {
    disabled: false,
    dark: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChangeDark = () => {
    this.setState({ dark: !this.state.dark });
  };

  handleChangeDisabled = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Button
        </Text>

        <Text component="h2" textStyle="headline">
          Button components are a React wrappers of mdc-button component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/buttons.html"
            target="_blank">
            Material Design guidelines: Buttons
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/buttons/"
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
          Button
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
              <td>buttonType</td>
              <td>String: compact, dense</td>
              <td />
              <td />
              <td>Modify the button type</td>
            </tr>
            <tr>
              <td>buttonVariant</td>
              <td>String: raised, unelevated, stroked</td>
              <td />
              <td />
              <td>Modify the button appearance</td>
            </tr>
            <tr>
              <td>className</td>
              <td>String</td>
              <td />
              <td />
              <td>classname of component</td>
            </tr>
          </tbody>
        </table>

        <Text component="h2" textStyle="title">
          ButtonIcon
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
              <td>className</td>
              <td>String</td>
              <td />
              <td />
              <td>classname of component</td>
            </tr>
          </tbody>
        </table>

        <div className={this.state.dark ? 'mdc-theme--dark' : ''}>
          <div>
            <div className="mdc-form-field">
              <label htmlFor="toggle-dark">
                <input
                  id="toogle-dark"
                  type="checkbox"
                  aria-labelledby="toggle-dark-label"
                  checked={this.state.dark}
                  onChange={this.handleChangeDark}
                />{' '}
                Dark Theme
              </label>
            </div>
            <div className="mdc-form-field">
              <label htmlFor="toggle-disabled">
                <input
                  id="tootle-disabled "
                  type="checkbox"
                  aria-labelledby="toggle-dark-label"
                  checked={this.state.disabled}
                  onChange={this.handleChangeDisabled}
                />{' '}
                Disable buttons (excluding links)
              </label>
            </div>
          </div>

          <Text textStyle="display2" component="h2">
            Ripple Enabled
          </Text>

          <div className="buttons-page">
            <Text textStyle="title" component="h2">
              Text Button
            </Text>
            <div>
              {buttons.map((button, index) => (
                // eslint-disable-next-line
              <Button {...button.props} key={`${index}-text_button`} disabled={this.state.disabled} ripple>
                  {button.children}
                </Button>
              ))}

              <Theme textStyle="secondary">
                <Button disabled={this.state.disabled} ripple accent>
                  Secondary
                </Button>
              </Theme>
            </div>
          </div>

          <div className="buttons-page">
            <Text textStyle="title" component="h2">
              Raised Button
            </Text>
            <div>
              {buttons.map((button, index) => (
                // eslint-disable-next-line
              <Button {...button.props} disabled={this.state.disabled} key={`${index}-text_button`} buttonVariant="raised" ripple>
                  {button.children}
                </Button>
              ))}

              <Theme textStyle="secondary" textOn="secondary" theme="secondary">
                <Button
                  disabled={this.state.disabled}
                  ripple
                  accent
                  buttonVariant="raised">
                  Secondary
                </Button>
              </Theme>
            </div>
          </div>
          <div className="buttons-page">
            <Text textStyle="title" component="h2">
              Unelevated Button (Experimental)
            </Text>
            <div>
              {buttons.map((button, index) => (
                // eslint-disable-next-line
              <Button {...button.props} disabled={this.state.disabled} key={`${index}-text_button`} buttonVariant="unelevated" ripple>
                  {button.children}
                </Button>
              ))}

              <Theme textStyle="secondary" textOn="secondary" theme="secondary">
                <Button
                  disabled={this.state.disabled}
                  ripple
                  accent
                  buttonVariant="unelevated">
                  Secondary
                </Button>
              </Theme>
            </div>
          </div>
          <div className="buttons-page">
            <Text textStyle="title" component="h2">
              Stroked Button (Experimental)
            </Text>
            <div>
              {buttons.map((button, index) => (
                // eslint-disable-next-line
              <Button {...button.props} disabled={this.state.disabled} key={`${index}-text_button`} buttonVariant="stroked" ripple>
                  {button.children}
                </Button>
              ))}

              <Theme textStyle="secondary" textOn="secondary" theme="secondary">
                <Button
                  disabled={this.state.disabled}
                  ripple
                  accent
                  buttonVariant="stroked">
                  Secondary
                </Button>
              </Theme>
            </div>
          </div>

          <Text textStyle="display2" component="h2">
            CSS Only
          </Text>

          <div className="buttons-page">
            <Text textStyle="title" component="h2">
              Text Button
            </Text>
            <div>
              {buttons.map((button, index) => (
                // eslint-disable-next-line
              <Button {...button.props} disabled={this.state.disabled} key={`${index}-text_button`} >
                  {button.children}
                </Button>
              ))}

              <Theme textStyle="secondary">
                <Button disabled={this.state.disabled} accent>
                  Secondary
                </Button>
              </Theme>
            </div>
          </div>

          <div className="buttons-page">
            <Text textStyle="title" component="h2">
              Raised Button
            </Text>
            <div>
              {buttons.map((button, index) => (
                // eslint-disable-next-line
              <Button {...button.props} disabled={this.state.disabled} key={`${index}-text_button`} buttonVariant="raised" >
                  {button.children}
                </Button>
              ))}

              <Theme textStyle="secondary" textOn="secondary" theme="secondary">
                <Button
                  disabled={this.state.disabled}
                  accent
                  buttonVariant="raised">
                  Secondary
                </Button>
              </Theme>
            </div>
          </div>
          <div className="buttons-page">
            <Text textStyle="title" component="h2">
              Unelevated Button (Experimental)
            </Text>
            <div>
              {buttons.map((button, index) => (
                // eslint-disable-next-line
              <Button {...button.props} disabled={this.state.disabled} key={`${index}-text_button`} buttonVariant="unelevated" >
                  {button.children}
                </Button>
              ))}

              <Theme textStyle="secondary" textOn="secondary" theme="secondary">
                <Button
                  disabled={this.state.disabled}
                  accent
                  buttonVariant="unelevated">
                  Secondary
                </Button>
              </Theme>
            </div>
          </div>
          <div className="buttons-page">
            <Text textStyle="title" component="h2">
              Stroked Button (Experimental)
            </Text>
            <div>
              {buttons.map((button, index) => (
                // eslint-disable-next-line
              <Button {...button.props} disabled={this.state.disabled} key={`${index}-text_button`} buttonVariant="stroked" >
                  {button.children}
                </Button>
              ))}

              <Theme textStyle="secondary" textOn="secondary" theme="secondary">
                <Button
                  disabled={this.state.disabled}
                  accent
                  buttonVariant="stroked">
                  Secondary
                </Button>
              </Theme>
            </div>
          </div>
        </div>
      </LayoutCell>
    );
  }
}
