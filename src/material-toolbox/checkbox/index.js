// @flow
import * as React from 'react';
import * as util from '@material/ripple/util';
import cx from 'classnames';

import MDCRippleFoundation from '@material/ripple/foundation';
import MDCCheckboxFoundation from '@material/checkbox/foundation';

import { getCorrectEventName } from '@material/animation/index';

import { createAdapter } from '../ripple';

type Props = {
  cssOnly: boolean,
  disabled: boolean,
  indeterminate: boolean,
  style?: { [string]: any },
  className?: string,
  onChange?: (evt: SyntheticInputEvent<HTMLInputElement>) => void,
};

type State = {
  rippleStyle: { [string]: any },
  rippleClassName: { [string]: boolean },
  onChange?: (evt: SyntheticInputEvent<HTMLInputElement>) => void,
};

export default class Checkbox extends React.PureComponent<Props, State> {
  static defaultProps = {
    cssOnly: false,
    disabled: false,
    indeterminate: false,
  };

  state = {
    rippleClassName: {},
    rippleStyle: {},
    onChange: undefined,
  };

  componentDidMount() {
    if (this.props.indeterminate) {
      // $FlowFixMe
      this.checkbox_.indeterminate = true;
    }

    if (!this.props.cssOnly) {
      this.createMDCRipple_();
      this.createMDCChecbox_();
    }
  }

  componentDidUpdate({ indeterminate, cssOnly }: Props) {
    if (this.props.indeterminate !== indeterminate) {
      // $FlowFixMe
      this.checkbox_.indeterminate = indeterminate;
    }

    if (this.props.cssOnly !== cssOnly) {
      if (this.props.cssOnly) {
        this.removeMDCRipple_();
        this.removeMDCCheckbox_();
      } else {
        this.createMDCRipple_();
        this.createMDCChecbox_();
      }
    }
  }

  componentWillUnmount() {
    this.removeMDCRipple_();
    this.removeMDCCheckbox_();
  }

  createMDCChecbox_() {
    this.mdcCheckbox_ = new MDCCheckboxFoundation({
      addClass: className =>
        this.setState(state => ({
          rippleClassName: { ...state.rippleClassName, [className]: true },
        })),
      removeClass: className =>
        this.setState(state => ({
          rippleClassName: { ...state.rippleClassName, [className]: undefined },
        })),
      registerAnimationEndHandler: handler =>
        this.root_ &&
        this.root_.addEventListener(
          getCorrectEventName(window, 'animationend'),
          handler,
        ),
      deregisterAnimationEndHandler: handler =>
        this.root_ &&
        this.root_.removeEventListener(
          getCorrectEventName(window, 'animationend'),
          handler,
        ),
      registerChangeHandler: handler => this.setState({ onChange: handler }),
      deregisterChangeHandler: () => this.setState({ onChange: undefined }),
      getNativeControl: () => this.checkbox_,
      forceLayout: () => this.root_ && this.root_.offsetWidth,
      isAttachedToDOM: () => Boolean(this.root_ && this.root_.parentNode),
    });
    this.mdcCheckbox_.init();
  }

  removeMDCCheckbox_() {
    if (this.mdcCheckbox_) {
      this.mdcCheckbox_.destroy();
      delete this.mdcCheckbox_;
    }
  }

  createMDCRipple_() {
    const MATCHES = util.getMatchesProperty(HTMLElement.prototype);
    this.rippleAdapter_ = Object.assign(
      createAdapter(this, this.root_, { unbounded: true }),
      {
        isUnbounded: () => true,
        // $FlowFixMe
        isSurfaceActive: () => this.checkbox_[MATCHES](':active'),
        registerInteractionHandler: (type, handler) =>
          this.checkbox_ && this.checkbox_.addEventListener(type, handler),
        deregisterInteractionHandler: (type, handler) =>
          this.checkbox_ && this.checkbox_.removeEventListener(type, handler),
      },
    );

    this.mdcRipple_ = new MDCRippleFoundation(this.rippleAdapter_);
    this.mdcRipple_.init();
  }

  removeMDCRipple_() {
    if (this.rippleAdapter_) {
      this.rippleAdapter_.componentRemoved();
    }

    if (this.mdcRipple_) {
      this.mdcRipple_.destroy();
      delete this.mdcRipple_;
      delete this.rippleAdapter_;
    }
  }

  handleChange = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange(evt);
    }
    if (this.state.onChange) {
      this.state.onChange(evt);
    }
  };

  checkbox_: ?HTMLInputElement;
  root_: ?HTMLDivElement;
  mdcRipple_: ?MDCRippleFoundation;
  mdcCheckbox_: ?MDCCheckboxFoundation;
  rippleAdapter_: ?any;

  render() {
    const {
      indeterminate,
      cssOnly,
      disabled,
      style,
      className,
      ...rest
    } = this.props;

    const totalStyle = { ...style, ...this.state.rippleStyle };

    return (
      <div
        style={totalStyle}
        ref={element => {
          this.root_ = element;
        }}
        className={cx('mdc-checkbox', className, this.state.rippleClassName, {
          'mdc-checkbox--disabled': disabled,
        })}>
        <input
          {...rest}
          disabled={disabled}
          type="checkbox"
          className="mdc-checkbox__native-control"
          onChange={this.handleChange}
          ref={element => {
            this.checkbox_ = element;
          }}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>
    );
  }
}
