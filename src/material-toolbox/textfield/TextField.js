// @flow
import * as React from 'react';
import * as util from '@material/ripple/util';
import cx from 'classnames';

import MDCTextFieldFoundation from '@material/textfield/foundation';
import MDCRippleFoundation from '@material/ripple/foundation';

import FloatingLabel from '../floating-label';
import LineRipple from '../line-ripple';
import NotchedOutline from '../notched-outline';
import HelperText from './HelperText';
import { createAdapter } from '../ripple';

type Props = {
  label: string,
  cssOnly: boolean,
  fullWidth: boolean,
  multiline: boolean,
  disabled: boolean,
  dense: boolean,
  outlined: boolean,
  box: boolean,
  helperText?: string,
  persistentHelperText: boolean,
  validationHelperText: boolean,
  value?: string,
  defaultValue?: string,
  invalid: boolean,
  className?: string,
  'aria-controls'?: string,
  onClick?: (evt: Event) => void,
  onKeyDown?: (evt: Event) => void,
  children?: React.Element<any>,
  icon?: 'trailing' | 'leading',
};

type State = {
  classNames: { [string]: string },
  rippleStyle: { [string]: any },
  rippleClassName: { [string]: boolean },
};

// TODO: Move ref to the new way of references
export default class TextField extends React.Component<Props, State> {
  static defaultProps = {
    cssOnly: false,
    fullWidth: false,
    multiline: false,
    disabled: false,
    dense: false,
    invalid: false,
    outlined: false,
    persistentHelperText: false,
    validationHelperText: false,
    box: false,
  };

  state = {
    rippleClassName: {},
    rippleStyle: {},
    classNames: {},
  };

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.createMDCTextField_();
      this.createMDCRipple_(this.props);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const didChange = [
      'multiline',
      'helperText',
      'cssOnly',
      'outlined',
      'box',
      'aria-controls',
    ].some(key => this.props[key] !== prevProps[key]);

    if (didChange) {
      this.removeMDCRipple_();
      this.removeMDCTextField_();
      if (!this.props.cssOnly) {
        this.createMDCTextField_();
        this.createMDCRipple_(this.props);
      }
    }

    if (this.mdcTextField_ && this.props.invalid !== prevProps.invalid) {
      this.mdcTextField_.setValid(!this.props.invalid);
    }
  }

  componentWillUnmount() {
    this.removeMDCRipple_();
    this.removeMDCTextField_();
  }

  getInputAdapterMethods_() {
    return {
      registerInputInteractionHandler: (evtType: any, handler: () => void) =>
        this.input_ && this.input_.addEventListener(evtType, handler),
      deregisterInputInteractionHandler: (evtType: any, handler: () => void) =>
        this.input_ && this.input_.removeEventListener(evtType, handler),
      getNativeInput: () => this.input_,
    };
  }

  getLabelAdapterMethods_() {
    return {
      shakeLabel: (shouldShake: boolean) =>
        this.label_ && this.label_.shake(shouldShake),
      floatLabel: (shouldFloat: boolean) =>
        this.label_ && this.label_.float(shouldFloat),
      hasLabel: () => !!this.label_,
      getLabelWidth: () => this.label_ && this.label_.getWidth(),
    };
  }

  getLineRippleAdapterMethods_() {
    return {
      activateLineRipple: () => {
        if (this.lineRipple_) {
          this.lineRipple_.activate();
        }
      },
      deactivateLineRipple: () => {
        if (this.lineRipple_) {
          this.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: (normalizedX: number) => {
        if (this.lineRipple_) {
          this.lineRipple_.setRippleCenter(normalizedX);
        }
      },
    };
  }

  getOutlineAdapterMethods_() {
    return {
      notchOutline: (labelWidth: number, isRtl: boolean) =>
        this.notchedOutline_ && this.notchedOutline_.notch(labelWidth, isRtl),
      closeOutline: () =>
        this.notchedOutline_ && this.notchedOutline_.closeNotch(),
      hasOutline: () => !!this.notchedOutline_,
    };
  }

  getFoundationMap_() {
    return {
      helperText: {
        showToScreenReader: () =>
          this.helperText_ && this.helperText_.showToScreenReader(),
        setValidity: (inputIsValid: boolean) =>
          this.helperText_ && this.helperText_.setValidity(inputIsValid),
      },
    };
  }

  createMDCTextField_() {
    this.mdcTextField_ = new MDCTextFieldFoundation(
      {
        addClass: className =>
          this.setState(state => ({
            classNames: { ...state.classNames, [className]: true },
          })),
        removeClass: className =>
          this.setState(state => ({
            classNames: { ...state.classNames, [className]: undefined },
          })),
        hasClass: className => this.state.classNames[className],
        registerTextFieldInteractionHandler: (evtType, handler) => {
          this.handlers[evtType] = handler;
        },
        deregisterTextFieldInteractionHandler: evtType =>
          delete this.handlers[evtType],
        registerValidationAttributeChangeHandler: handler => {
          const observer = new MutationObserver(handler);
          if (this.input_) {
            const targetNode = this.input_;
            const config = { attributes: true };
            observer.observe(targetNode, config);
          }
          return observer;
        },
        deregisterValidationAttributeChangeHandler: observer =>
          observer.disconnect(),
        isFocused: () => document.activeElement === this.input_,
        isRtl: () =>
          window.getComputedStyle(this.root_).getPropertyValue('direction') ===
          'rtl',
        // Extra
        ...this.getInputAdapterMethods_(),
        ...this.getLabelAdapterMethods_(),
        ...this.getLineRippleAdapterMethods_(),
        ...this.getOutlineAdapterMethods_(),
      },
      this.getFoundationMap_(),
    );
    this.mdcTextField_.init();
  }

  createMDCRipple_(props: Props) {
    if (props.box) {
      const MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      this.rippleAdapter_ = Object.assign(createAdapter(this, this.root_, {}), {
        // $FlowFixMe
        isSurfaceActive: () => this.input_[MATCHES](':active'),
        registerInteractionHandler: (type, handler) =>
          this.input_ && this.input_.addEventListener(type, handler),
        deregisterInteractionHandler: (type, handler) =>
          this.input_ && this.input_.removeEventListener(type, handler),
      });

      this.mdcRipple_ = new MDCRippleFoundation(this.rippleAdapter_);
      this.mdcRipple_.init();
    }
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

  removeMDCTextField_() {
    if (this.mdcTextField_) {
      this.mdcTextField_.destroy();
      delete this.mdcTextField_;
    }
  }

  handleClick = (evt: Event) => {
    if (this.handlers.click) {
      this.handlers.click(evt);
    }
    if (this.props.onClick) {
      this.props.onClick(evt);
    }
  };

  handleKeyDown = (evt: Event) => {
    if (this.handlers.keydown) {
      this.handlers.keydown(evt);
    }
    if (this.props.onKeyDown) {
      this.props.onKeyDown(evt);
    }
  };

  mdcRipple_: ?MDCRippleFoundation;
  mdcTextField_: ?MDCTextFieldFoundation;
  handlers: { [string]: (evt: Event) => void } = {};
  rippleAdapter_: ?any;

  // Refs
  label_: ?FloatingLabel;
  lineRipple_: ?LineRipple;
  helperText_: ?HelperText;
  notchedOutline_: ?NotchedOutline;
  input_: ?HTMLInputElement | ?HTMLTextAreaElement;
  root_: ?HTMLLabelElement | ?HTMLDivElement;

  render() {
    const {
      multiline,
      fullWidth,
      className,
      cssOnly,
      value,
      label,
      disabled,
      dense,
      invalid,
      helperText,
      persistentHelperText,
      validationHelperText,
      outlined,
      box,
      children,
      icon,
      'aria-controls': ariaControls,
      ...rest
    } = this.props;
    const Component = cssOnly ? 'div' : 'label';
    const Input = multiline ? 'textarea' : 'input';

    const rootClassName = cx(
      'mdc-text-field',
      className,
      this.state.classNames,
      this.state.rippleClassName,
      {
        'mdc-text-field--upgraded': value,
        'mdc-text-field--box': box,
        'mdc-text-field--outlined': outlined,
        'mdc-text-field--fullwidth': fullWidth,
        'mdc-text-field--textarea': multiline,
        'mdc-text-field--disabled': disabled,
        'mdc-text-field--dense': dense,
        [`mdc-text-field--with-${icon || ''}-icon`]: icon,
      },
    );

    // Input props
    const inputProps = {
      ...rest,
      disabled,
      value,
      // if input and fullFill or cssOnly enable placeholder
      placeholder: cssOnly || (fullWidth && !multiline) ? label : null,
      className: 'mdc-text-field__input',
      'aria-controls': ariaControls,
      ref: element => {
        this.input_ = element;
      },
    };

    if ((box || outlined) && fullWidth) {
      // eslint-disable-next-line
      console.error('You can\'t use box or outlined with fullWidth');
    }

    return (
      <React.Fragment>
        <Component
          style={this.state.rippleStyle}
          ref={element => {
            this.root_ = element;
          }}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          className={rootClassName}>
          {children &&
            icon === 'leading' && (
              <children.type
                {...children.props}
                disabled={disabled}
                cssOnly={cssOnly}
              />
            )}
          <Input {...inputProps} />
          {(!fullWidth || multiline) && (
            <FloatingLabel
              ref={element => {
                this.label_ = element;
              }}
              label={label}
              cssOnly={cssOnly}
              preFilled={!!this.props.defaultValue}
            />
          )}
          {children &&
            icon === 'trailing' && (
              <children.type
                {...children.props}
                disabled={disabled}
                cssOnly={cssOnly}
              />
            )}
          {!outlined &&
            !multiline && (
              <LineRipple
                ref={element => {
                  this.lineRipple_ = element;
                }}
                cssOnly={cssOnly}
              />
            )}
          {outlined && (
            <NotchedOutline
              ref={element => {
                this.notchedOutline_ = element;
              }}
              cssOnly={cssOnly}
            />
          )}
        </Component>
        {helperText && (
          <HelperText
            ref={element => {
              this.helperText_ = element;
            }}
            id={ariaControls}
            text={helperText}
            cssOnly={cssOnly}
            persistent={persistentHelperText}
            validation={validationHelperText}
          />
        )}
      </React.Fragment>
    );
  }
}
