// @flow
/* eslint-disable */
import * as React from 'react';
import classnames from 'classnames';
import Highlighter from './Highlighter';
import MDCRippleFoundation from '@material/ripple/foundation';

import { LayoutCell, LayoutGrid, LayoutInner } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import createAdapter from 'material-toolbox/ripple';
import Elevation from 'material-toolbox/elevation';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import createAdapter from 'material-toolbox/ripple';`;

const Div = ({
  component: Component,
  ...rest
}: {
  component: React.ComponentType<any> | string,
}) => (
  <Elevation elevation={2}>
    <Component {...rest} />
  </Elevation>
);

Div.defaultProps = {
  component: 'div', // eslint-disable-line
};

type RippleDivProps = {
  children: React.Node,
  elevation?: boolean,
  unbounded?: boolean,
  primary?: boolean,
  accent?: boolean,
  className: string,
  component: React.ComponentType<any> | string,
};

type RippleDivState = {
  classes: { [string]: boolean },
  styles: { [string]: any },
};

class RippledDiv extends React.Component<RippleDivProps, RippleDivState> {
  static defaultProps = {
    component: 'div',
  };

  state = {
    classes: {},
    styles: {},
  };

  componentDidMount() {
    this.ripple = this.initRipple();
    setTimeout(() => {
      if (this.ripple) {
        this.ripple.init();
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.ripple) {
      this.ripple.destroy();
    }
  }

  initRipple() {
    if (this.rippledElement) {
      const adapter = createAdapter(this, this.rippledElement, {
        unbounded: this.props.unbounded,
        primary: this.props.primary,
        accent: this.props.accent,
      });
      return new MDCRippleFoundation(adapter);
    }

    return null;
  }

  ripple: ?MDCRippleFoundation;
  rippledElement: ?HTMLElement;

  render() {
    const className = classnames(
      this.props.className,
      'mdc-ripple-surface',
      this.state.classes,
    );
    const Component = this.props.component;

    return (
      <Elevation elevation={this.props.elevation ? 2 : 0}>
        <Component
          className={className}
          style={this.state.styles}
          ref={element => {
            // $FlowFixMe
            this.rippledElement = element;
          }}>
          {this.props.children}
        </Component>
      </Elevation>
    );
  }
}

// eslint-disable-next-line
export default class ThemePage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Ripple
        </Text>

        <Text component="h2" textStyle="headline">
          Ripple component is a function that create the adapter for element.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/ripples/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          MDC Adapter for react components
        </Text>

        <Text component="h3" textStyle="title">
          Import
        </Text>

        <Highlighter language="javascript">{importComponents}</Highlighter>

        <Text component="h2" textStyle="title">
          createAdapter
        </Text>

        <p>
          <strong>Important Note</strong>.- This funtion also defines a function{' '}
          <code>componentRemoved</code> to notify that the component was removed
          and no setState needed any more. Call it on componentWillUnmount.
        </p>

        <p>
          Function that create the adapter to pass to MDCRippleFoundation and
          enable ripple effects.
        </p>

        <table className={styles['table-doc']}>
          <thead>
            <tr>
              <th>Param</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>component</td>
              <td>React.Component&lt;any&gt;</td>
              <td />
              <td>✔</td>
              <td>
                Component instance where classes and styles attributes will be
                added.
              </td>
            </tr>
            <tr>
              <td>element</td>
              <td>HTMLElement</td>
              <td />
              <td>✔</td>
              <td>HTMLElement instance used to calculate effects</td>
            </tr>
            <tr>
              <td>options</td>
              <td>object</td>
              <td />
              <td />
              <td>unbounded, disabled, primary, accent boolean options</td>
            </tr>
          </tbody>
        </table>

        <section className="ripple-example">
          <div>
            <Text component="h1" textStyle="display1">
              Bounded
            </Text>
            <RippledDiv elevation className="ripple-demo-surface">
              Interact with me!
            </RippledDiv>
          </div>
          <div>
            <Text component="h1" textStyle="display1">
              Bounded - CSS Only
            </Text>
            <Div className="ripple-demo-surface mdc-ripple-surface">
              Interact with me!
            </Div>
          </div>
        </section>

        <section className="ripple-example">
          <div>
            <Text component="h1" textStyle="display1">
              Bounded
            </Text>
            <RippledDiv
              className="ripple-demo-surface icon material-icons"
              unbounded>
              favorite
            </RippledDiv>
          </div>
          <div>
            <Text component="h1" textStyle="display1">
              Bounded - CSS Only
            </Text>
            <div className="icon ripple-demo-surface mdc-ripple-surface material-icons">
              favorite
            </div>
          </div>
        </section>

        <section className="ripple-example">
          <div>
            <Text component="h1" textStyle="display1">
              Theme Styles
            </Text>
            <Theme textStyle="primary">
              <RippledDiv elevation primary className="ripple-demo-surface">
                Primary
              </RippledDiv>
            </Theme>
            <Theme textStyle="secondary">
              <RippledDiv elevation accent className="ripple-demo-surface">
                Secondary
              </RippledDiv>
            </Theme>
          </div>
          <div>
            <Text component="h1" textStyle="display1">
              Theme Styles - CSS Only
            </Text>
            <Theme textStyle="primary">
              <Div className="ripple-demo-surface mdc-ripple-surface mdc-ripple-surface--primary">
                Primary
              </Div>
            </Theme>
            <Theme textStyle="secondary">
              <Div className="ripple-demo-surface mdc-ripple-surface mdc-ripple-surface--accent">
                Secondary
              </Div>
            </Theme>
          </div>
        </section>
        <section className="ripple-example">
          <div>
            <Text component="h1" textStyle="display1">
              Applied to &lt;button&gt; element
            </Text>
            <RippledDiv
              elevation
              primary
              className="ripple-demo-surface"
              component="button">
              button
            </RippledDiv>
          </div>
          <div>
            <Text component="h1" textStyle="display1">
              Applied to &lt;button&gt; element - CSS Only
            </Text>
            <Div
              component="button"
              className="ripple-demo-surface mdc-ripple-surface">
              button
            </Div>
          </div>
        </section>
      </LayoutCell>
    );
  }
}
