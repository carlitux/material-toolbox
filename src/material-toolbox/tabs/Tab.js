// @flow
import * as React from 'react';
import cx from 'classnames';
import MDCTabFoundation from '@material/tabs/tab/foundation';

type Props = {
  className?: string,
  children?: React.Node,
  onClick?: (evt: Event) => void,
  onKeyDown?: (evt: Event) => void,
  active?: boolean,
  component?: React.ElementType | string,

  // Private to users
  cssOnly_?: boolean,
  onNotify_?: ({ tab: any }) => void,
};

type State = {
  classNames: { [string]: boolean },
  handlers: { [string]: (evt: Event) => void },
};

// TODO: Add ripple
export default class Tab extends React.PureComponent<Props, State> {
  static defaultProps = {
    className: undefined,
    cssOnly_: false,
    active: false,
    children: null,
  };

  state = {
    classNames: {},
    handlers: {},
  };

  componentDidMount() {
    if (!this.props.cssOnly_) {
      this.createMDCTab_();
    }
  }

  componentWillReceiveProps(props: Props) {
    if (this.props.cssOnly_ !== props.cssOnly_) {
      if (props.cssOnly_) {
        this.removeMDCTab_();
      } else {
        this.createMDCTab_();
      }
    }

    if (this.props.active !== props.active && this.mdcTab_) {
      this.mdcTab_.isActive(props.active);
    }
  }

  componentWillUnmount() {
    this.removeMDCTab_();
  }

  get computedWidth(): ?number {
    return this.mdcTab_ && this.mdcTab_.getComputedWidth();
  }

  get computedLeft(): ?number {
    return this.mdcTab_ && this.mdcTab_.getComputedLeft();
  }

  get preventDefaultOnClick(): ?boolean {
    return this.mdcTab_ && this.mdcTab_.preventsDefaultOnClick();
  }

  set preventDefaultOnClick(preventDefaultOnClick: boolean) {
    if (this.mdcTab_) {
      this.mdcTab_.setPreventDefaultOnClick(preventDefaultOnClick);
    }
  }

  measureSelf() {
    if (this.mdcTab_) {
      this.mdcTab_.measureSelf();
    }
  }

  mdcTab_: ?MDCTabFoundation;
  tab_: ?HTMLAnchorElement;

  handleClick = (evt: Event) => {
    if (this.state.handlers.click) {
      this.state.handlers.click(evt);
    }

    if (this.props.onClick) {
      this.props.onClick(evt);
    }
  };

  handleKeyDown = (evt: Event) => {
    if (this.state.handlers.keydown) {
      this.state.handlers.keydown(evt);
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(evt);
    }
  };

  createMDCTab_() {
    this.mdcTab_ = new MDCTabFoundation({
      addClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: true },
        })),
      removeClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: undefined },
        })),
      registerInteractionHandler: (type, handler) =>
        this.setState(state => ({
          handlers: { ...state.handlers, [type]: handler },
        })),
      deregisterInteractionHandler: type =>
        this.setState(state => ({
          handlers: { ...state.handlers, [type]: undefined },
        })),
      getOffsetWidth: () => this.tab_ && this.tab_.offsetWidth,
      getOffsetLeft: () => this.tab_ && this.tab_.offsetLeft,
      notifySelected: () => {
        if (this.props.onNotify_) {
          this.props.onNotify_({ tab: this });
        }
      },
    });

    this.mdcTab_.init();
  }

  removeMDCTab_() {
    if (this.mdcTab_) {
      this.mdcTab_.destroy();
      delete this.mdcTab_;
    }
  }

  render() {
    const {
      className,
      onNotify_,
      cssOnly_,
      active,
      children,
      component: Component,
      ...rest
    } = this.props;
    return (
      <a
        {...rest}
        role="tab"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
        className={cx(
          className,
          'mdc-tab',
          { 'mdc-tab--active': active },
          this.state.classNames,
        )}
        ref={element => {
          this.tab_ = element;
        }}>
        {children}
        {cssOnly_ && <span className="mdc-tab__indicator" />}
      </a>
    );
  }
}
