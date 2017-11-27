// @flow
import * as React from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';
import MDCRippleFoundation from '@material/ripple/foundation';

import createAdapter from '../ripple';

type Props = {
  children: React.Node,
  component: React.ComponentType<any>,
  devider: boolean,
  inset: boolean,
  className: string,
  ripple: boolean,
  disabled: boolean,
  primary: boolean,
  accent: boolean,
  style: { [any]: any },
};

type State = {
  classes: { [string]: boolean },
  styles: { [string]: any },
};

export default class ListItem extends React.Component<Props, State> {
  static defaultProps = {
    component: 'li',
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
      props.disabled !== this.props.disabled ||
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
      // eslint-disable-next-line
			const element = ReactDom.findDOMNode(this.ripple);
      if (element) {
        this.mdcRippleAdapter = createAdapter(this, element, {
          primary: props.primary,
          accent: props.accent,
          disabled: props.disabled,
        });
        this.mdcRipple = new MDCRippleFoundation(this.mdcRippleAdapter);
        this.mdcRipple.init();
      }
    }
  }

  ripple: ?Element | ?React.Component<any, any>;
  mdcRipple: MDCRippleFoundation;
  mdcRippleAdapter: { [any]: any };

  render() {
    const {
      component: Component,
      className,
      devider,
      inset,
      children,
      ripple,
      primary,
      accent,
      style,
      ...rest
    } = this.props;

    const cn = classnames(
      className,
      {
        'mdc-list-item': !devider,
        'mdc-list-divider': devider,
        'mdc-list-divider--inset': devider && inset,
      },
      this.state.classes,
    );

    if (devider) {
      return <Component {...rest} className={cn} role="separator" />;
    }

    return (
      <Component
        {...rest}
        style={{ ...style, ...this.state.styles }}
        ref={rippledElement => {
          // eslint-disable-next-line
					this.ripple = rippledElement;
        }}
        className={cn}>
        {children}
      </Component>
    );
  }
}
