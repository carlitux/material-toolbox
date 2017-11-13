// @flow
import * as React from 'react';
import classnames from 'classnames';
import MDCRippleFoundation from '@material/ripple/foundation';
import MDCIconToggleFoundation from '@material/icon-toggle/foundation';

import createAdapter from '../ripple';

type Props = {
  disabled: boolean,
  pressed: boolean,
  primary: boolean,
  accent: boolean,
  className: string,
  style: { [string]: any },
  on: { label: string, content?: string, cssClass?: string },
  off: { label: string, content?: string, cssClass?: string },
  children: React.Node,
  onChange: (evtData: { isOn: boolean }) => void,
};

type State = {
  classes: { [string]: boolean },
  iconClasses: { [string]: boolean },
  styles: { [string]: any },
  attributes: { [string]: any },
  content?: string,
};

export default class IconToggle extends React.Component<Props, State> {
  static defaultProps = {
    pressed: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      classes: {},
      iconClasses: {},
      styles: {},
      attributes: {
        'aria-pressed': props.pressed,
        'aria-label': props.pressed ? props.on.label : props.off.label,
        'aria-disabled': props.disabled,
      },
      content: props.pressed ? props.on.content : props.off.content,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.bootstrapRipple(this.props);
      this.mdcIconToggle.init();
    }, 100);
  }

  componentWillReceiveProps(props: Props) {
    if (
      props.disabled !== this.props.disabled ||
      props.primary !== this.props.primary ||
      props.accent !== this.props.accent
    ) {
      this.bootstrapRipple(props);
    }
    if (
      props.on !== this.props.on ||
      props.off !== this.props.off ||
      props.pressed !== this.props.pressed
    ) {
      this.setState({
        attributes: {
          'aria-pressed': props.pressed ? 'true' : 'false',
          'aria-label': props.pressed ? props.on.label : props.off.label,
          'aria-disabled': props.disabled,
        },
        content: props.pressed ? props.on.content : props.off.content,
      });
      this.mdcIconToggle.refreshToggleData();
      this.mdcIconToggle.toggle(props.pressed);
      this.mdcIconToggle.setDisabled(props.disabled);
    }
  }

  componentWillUnmount() {
    if (this.mdcRipple) {
      this.mdcRippleAdapter.componentRemoved();
      this.mdcRipple.destroy();
    }
    this.mdcIconToggle.destroy();
  }

  bootstrapRipple(props: Props) {
    if (this.mdcRipple) {
      this.mdcRipple.destroy();
    }

    if (this.ripple) {
      this.mdcRippleAdapter = Object.assign(
        createAdapter(this, this.ripple, {
          primary: props.primary,
          accent: props.accent,
          disabled: props.disabled,
          unbounded: true,
        }),
        {
          isSurfaceActive: () =>
            this.mdcIconToggle && this.mdcIconToggle.isKeyboardActivated(),
          computeBoundingRect: () => {
            if (this.ripple) {
              const dim = 48;
              const { left, top } = this.ripple.getBoundingClientRect();
              return {
                left,
                top,
                width: dim,
                height: dim,
                right: left + dim,
                bottom: left + dim,
              };
            }
            return {};
          },
        },
      );
      this.mdcRipple = new MDCRippleFoundation(this.mdcRippleAdapter);
      this.mdcRipple.init();
    }
  }

  ripple: ?HTMLElement;
  mdcRipple: MDCRippleFoundation;
  mdcIconToggle: MDCIconToggleFoundation;
  mdcRippleAdapter: { [any]: any };

  mdcIconToggle = new MDCIconToggleFoundation({
    addClass: className =>
      this.setState(state => ({
        iconClasses: { ...state.iconClasses, [className]: true },
      })),
    removeClass: className =>
      this.setState(state => ({
        iconClasses: { ...state.iconClasses, [className]: false },
      })),
    registerInteractionHandler: (type, handler) =>
      this.ripple && this.ripple.addEventListener(type, handler),
    deregisterInteractionHandler: (type, handler) =>
      this.ripple && this.ripple.removeEventListener(type, handler),
    setText: text => {
      this.setState(state => ({ content: text }));
    },
    getAttr: (name, value) => {
      if (name === 'data-toggle-on') {
        return JSON.stringify(this.props.on);
      }
      if (name === 'data-toggle-off') {
        return JSON.stringify(this.props.off);
      }
      return this.state.attributes[name] || value;
    },
    setAttr: (name, value) => {
      this.setState(state => ({
        attributes: { ...state.attributes, [name]: value },
      }));
    },
    rmAttr: name => {
      this.setState(state => ({
        attributes: { ...state.attributes, [name]: undefined },
      }));
    },
    // TODO: Maybe use state?
    getTabIndex: () => /* number */ this.ripple && this.ripple.tabIndex,
    setTabIndex: tabIndex => {
      if (this.ripple) {
        this.ripple.tabIndex = tabIndex;
      }
    },
    notifyChange: data => this.props.onChange && this.props.onChange(data),
  });

  render() {
    const {
      disabled,
      primary,
      accent,
      className,
      style,
      children,
      on,
      off,
      pressed,
      onChange,
      ...rest
    } = this.props;

    const rootProps = {
      ...rest,
      ...this.state.attributes,
      role: 'button',
      style: { ...style, ...this.state.styles },
    };

    const iconProps = {};

    if (children) {
      const cn = classnames('mdc-icon-toggle', className, this.state.classes, {
        'mdc-icon-toggle--disabled': disabled,
      });

      return (
        <span
          {...rootProps}
          className={cn}
          ref={element => {
            this.ripple = element;
          }}>
          {React.Children.map(children, child => {
            const iconCN = classnames(
              child.props.className,
              this.state.iconClasses,
            );
            return (
              <child.type
                {...iconProps}
                {...child.props}
                className={iconCN}
                aria-hidden="true">
                {this.state.content}
              </child.type>
            );
          })}
        </span>
      );
    }

    const cn = classnames(
      'mdc-icon-toggle',
      className,
      this.state.classes,
      this.state.iconClasses,
      {
        'mdc-icon-toggle--disabled': disabled,
        'mdc-icon-toggle--primary': primary,
        'mdc-icon-toggle--accent': accent,
      },
    );

    return (
      <i
        {...rootProps}
        {...iconProps}
        className={cn}
        ref={element => {
          this.ripple = element;
        }}>
        {this.state.content}
      </i>
    );
  }
}
