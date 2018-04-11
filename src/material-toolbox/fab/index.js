// @flow
import * as React from 'react';
import classnames from 'classnames';
import MDCRippleFoundation from '@material/ripple/foundation';

import { createAdapter } from '../ripple';

type Props = {
  component: 'button' | 'a',
  ripple: boolean,
  primary: boolean,
  accent: boolean,
  mini: boolean,
  exited: boolean,
  className: string,
  style: { [string]: any },
  children: React.Node,
};

type State = {
  classes: { [string]: boolean },
  styles: { [string]: any },
};

export default class FAB extends React.Component<Props, State> {
  static defaultProps = {
    component: 'button',
  };

  state = {
    classes: {},
    styles: {},
  };

  componentDidMount() {
    if (this.props.ripple && this.ripple) {
      setTimeout(() => {
        this.bootstrapRipple(this.props);
      }, 100);
    }
  }

  componentWillReceiveProps(props: Props) {
    if (
      props.ripple !== this.props.ripple ||
      props.primary !== this.props.primary ||
      props.accent !== this.props.accent
    ) {
      this.bootstrapRipple(props);
    }
  }

  componentWillUnmount() {
    if (this.mdcRipple) {
      this.mdcRippleAdapter.componentRemoved();
      this.mdcRipple.destroy();
    }
  }

  bootstrapRipple(props: Props) {
    if (this.mdcRipple) {
      this.mdcRipple.destroy();
    }

    if (this.ripple && props.ripple) {
      this.mdcRippleAdapter = createAdapter(this, this.ripple, {
        primary: props.primary,
        accent: props.accent,
      });
      this.mdcRipple = new MDCRippleFoundation(this.mdcRippleAdapter);
      this.mdcRipple.init();
    }
  }

  ripple: ?HTMLElement;
  mdcRipple: MDCRippleFoundation;
  mdcRippleAdapter: { [any]: any };

  render() {
    const {
      component: Component,
      ripple,
      primary,
      accent,
      className,
      style,
      mini,
      exited,
      ...rest
    } = this.props;

    const cn = classnames('mdc-fab', className, this.state.classes, {
      'mdc-fab--mini': mini,
      'mdc-fab--exited': exited,
    });

    return (
      <Component
        {...rest}
        style={{ ...style, ...this.state.styles }}
        className={cn}
        ref={element => {
          this.ripple = element;
        }}>
        <span className="mdc-fab__icon">{this.props.children}</span>
      </Component>
    );
  }
}
