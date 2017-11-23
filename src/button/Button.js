// @flow
import * as React from 'react';
import classnames from 'classnames';
import MDCRippleFoundation from '@material/ripple/foundation';

import createAdapter from '../ripple';

type Props = {
  component: 'button' | 'a',
  ripple: boolean,
  disabled: boolean,
  primary: boolean,
  accent: boolean,
  className: string,
  buttonType: 'compact' | 'dense',
  buttonVariant: 'raised' | 'unelevated' | 'stroked',
  style: { [string]: any },
};

type State = {
  classes: { [string]: boolean },
  styles: { [string]: any },
};

export default class Button extends React.Component<Props, State> {
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
      this.mdcRippleAdapter = createAdapter(this, this.ripple, {
        primary: props.primary,
        accent: props.accent,
        disabled: props.disabled,
      });
      this.mdcRipple = new MDCRippleFoundation(this.mdcRippleAdapter);
      this.mdcRipple.init();
    }
  }

  ripple: ?HTMLElement;
  mdcRipple: MDCRippleFoundation;
  mdcRippleAdapter: { [any]: any };

  layout() {
    if (this.mdcRipple) {
      this.mdcRipple.layout();
    }
  }

  render() {
    const {
      component: Component,
      ripple,
      disabled,
      primary,
      accent,
      className,
      style,
      buttonType,
      buttonVariant,
      ...rest
    } = this.props;

    const cn = classnames('mdc-button', className, this.state.classes, {
      'mdc-button--compact': buttonType === 'compact',
      'mdc-button--dense': buttonType === 'dense',
      [`mdc-button--${buttonVariant || ''}`]: buttonVariant,
    });

    return (
      <Component
        {...rest}
        style={{ ...style, ...this.state.styles }}
        disabled={disabled}
        className={cn}
        ref={element => {
          this.ripple = element;
        }}
      />
    );
  }
}
