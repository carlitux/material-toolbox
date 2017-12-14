// @flow
import * as React from 'react';
import classnames from 'classnames';

import MDCRippleFoundation from '@material/ripple/foundation';
import MDCTextFieldFoundation from '@material/textfield/foundation';
import MDCTextFieldBottomLineFoundation from '@material/textfield/bottom-line/foundation';
import MDCTextFieldHelperTextFoundation from '@material/textfield/helper-text/foundation';
// import MDCTextFieldLabelFoundation from '@material/textfield/label/foundation';

import TextFieldIcon from './Icon';
import createAdapter from '../ripple';
import { normalizePropToReactStyle } from '../utils';

type Props = {
  wrapped: boolean,
  cssOnly: boolean,
  dense: boolean,
  hasError: boolean,
  id: string,
  label: string,
  disabled: boolean,
  value: string,
  help: string,
  persistentHelp: boolean,
  onIconClick: () => void,
  onAnimationEnd: () => void,
  children: React.Element<typeof TextFieldIcon>,
  icon: 'leading' | 'trailing',
  withBox: boolean,
  style: { [string]: any },
  multiline: boolean,
  fullWidth: boolean,
};

type State = {
  classes: { [string]: boolean },
  labelClasses: { [string]: boolean },
  bottomLineClasses: { [string]: boolean },
  helperTextClasses: { [string]: boolean },
  bottomLineAttr: { [string]: any },
  helpTextAttr: { [string]: any },
  iconAttr: { [string]: any },
  styles: { [string]: any },
};

export default class TextField extends React.Component<Props, State> {
  constructor(props: Props) {
    super();

    this.state = {
      classes: {},
      styles: {},
      labelClasses: {},
      bottomLineClasses: {},
      helperTextClasses: {
        'mdc-text-field-helper-text--persistent': !!props.persistentHelp,
      },
      bottomLineAttr: {},
      helpTextAttr: {},
      iconAttr: {},
    };
  }

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.init();
    }

    if (this.props.withBox && !this.props.cssOnly) {
      setTimeout(() => {
        this.bootstrapRipple();
      }, 1000);
    }
  }

  componentWillReceiveProps(props: Props) {
    if (this.props.persistentHelp !== props.persistentHelp && !props.cssOnly) {
      this.setState(
        state => ({
          helperTextClasses: {
            ...state.helperTextClasses,
            'mdc-text-field-helper-text--persistent': props.persistentHelp,
          },
        }),
        () => {
          this.destroy();
          this.init();
        },
      );
    }

    if (
      props.withBox &&
      !props.cssOnly &&
      props.withBox !== this.props.withBox
    ) {
      this.bootstrapRipple();
    }

    this.mdcTextField.valid = !!props.hasError;
  }

  componentWillUnmount() {
    this.destroy();
  }

  init() {
    this.mdcTextField.init();
    this.mdcHelperText.init();
    this.mdcBottomLine.init();
    // this.mdcLabel.init();
  }

  destroy() {
    this.mdcTextField.destroy();
    this.mdcHelperText.destroy();
    this.mdcBottomLine.destroy();
    // this.mdcLabel.destroy();
  }

  bootstrapRipple() {
    if (this.mdcRipple) {
      this.mdcRipple.destroy();
    }

    if (this.root) {
      this.mdcRippleAdapter = createAdapter(this, this.root, {});
      this.mdcRipple = new MDCRippleFoundation(this.mdcRippleAdapter);
      this.mdcRipple.init();
    }
  }

  root: ?HTMLElement;
  input: ?HTMLInputElement | ?HTMLTextAreaElement;
  bottomLine: ?HTMLDivElement;
  mdcRipple: MDCRippleFoundation;
  mdcRippleAdapter: { [any]: any };

  mdcBottomLine = new MDCTextFieldBottomLineFoundation({
    addClass: className =>
      this.setState(state => ({
        bottomLineClasses: {
          ...state.bottomLineClasses,
          [className]: true,
        },
      })),
    removeClass: className =>
      this.setState(state => ({
        bottomLineClasses: {
          ...state.bottomLineClasses,
          [className]: false,
        },
      })),
    setAttr: (attr: string, value: string) => {
      let newValue: string | {} = value;

      if (attr === 'style') {
        const parsed = value.split(':').map(item => item.trim());
        newValue = { [normalizePropToReactStyle(parsed[0])]: parsed[1] };
      }

      this.setState(state => ({
        bottomLineAttr: { ...state.bottomLineAttr, [attr]: newValue },
      }));
    },
    registerEventHandler: (evtType, handler) =>
      this.bottomLine && this.bottomLine.addEventListener(evtType, handler),
    deregisterEventHandler: (evtType, handler) =>
      this.bottomLine && this.bottomLine.removeEventListener(evtType, handler),
    notifyAnimationEnd: () => {
      this.props.onAnimationEnd && this.props.onAnimationEnd();
      this.emit(
        MDCTextFieldBottomLineFoundation.strings.ANIMATION_END_EVENT,
        {},
      );
    },
  });

  mdcHelperText = new MDCTextFieldHelperTextFoundation({
    addClass: className =>
      this.setState(state => ({
        helperTextClasses: {
          ...state.helperTextClasses,
          [className]: true,
        },
      })),
    removeClass: className =>
      this.setState(state => ({
        helperTextClasses: {
          ...state.helperTextClasses,
          [className]: false,
        },
      })),
    hasClass: className => this.state.helperTextClasses[className],
    setAttr: (attr: string, value: string) => {
      this.setState(state => ({
        helpTextAttr: {
          ...state.helpTextAttr,
          [attr]: value,
        },
      }));
    },
    removeAttr: (attr: string) => {
      this.setState(state => ({
        helpTextAttr: {
          ...state.helpTextAttr,
          [attr]: undefined,
        },
      }));
    },
    setContent: content => {
      console.log(content);
      // this.root_.textContent = content;
    },
  });

  // mdcLabel = new MDCTextFieldLabelFoundation({
  //   addClass: className =>
  //     this.setState(state => ({
  //       labelClasses: {
  //         ...state.labelClasses,
  //         [className]: true,
  //       },
  //     })),
  //   removeClass: className =>
  //     this.setState(state => ({
  //       labelClasses: {
  //         ...state.labelClasses,
  //         [className]: false,
  //       },
  //     })),
  // });

  mdcTextField = new MDCTextFieldFoundation(
    {
      addClass: className =>
        this.setState(state => ({
          classes: { ...state.classes, [className]: true },
        })),
      removeClass: className =>
        this.setState(state => ({
          classes: { ...state.classes, [className]: false },
        })),
      addClassToLabel: className =>
        this.setState(state => ({
          labelClasses: { ...state.labelClasses, [className]: true },
        })),
      removeClassFromLabel: className =>
        this.setState(state => ({
          labelClasses: { ...state.labelClasses, [className]: false },
        })),
      // TODO: this will be another component
      setIconAttr: (attr: string, value: string) => {
        this.setState(state => ({
          iconAttr: { ...state.iconAttr, [attr]: value },
        }));
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      registerTextFieldInteractionHandler: (evtType, handler) =>
        this.root && this.root.addEventListener(evtType, handler),
      deregisterTextFieldInteractionHandler: (evtType, handler) =>
        this.root && this.root.removeEventListener(evtType, handler),
      notifyIconAction: () => {
        this.props.onIconClick && this.props.onIconClick();
      },
      registerInputInteractionHandler: (evtType, handler) =>
        this.input && this.input.addEventListener(evtType, handler),
      deregisterInputInteractionHandler: (evtType, handler) =>
        this.input && this.input.removeEventListener(evtType, handler),
      registerBottomLineEventHandler: (evtType, handler) =>
        this.bottomLine && this.bottomLine.addEventListener(evtType, handler),
      deregisterBottomLineEventHandler: (evtType, handler) =>
        this.bottomLine &&
        this.bottomLine.removeEventListener(evtType, handler),
      // TODO: if change values on input is not a good option?
      getNativeInput: () => this.input,
    },
    {
      bottomLine: this.mdcBottomLine,
      helperText: this.mdcHelperText,
      // label: this.mdcLabel,
    },
  );

  /**
   * From https://github.com/material-components/material-components-web/blob/master/packages/mdc-base/component.js
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType: string, evtData: {}, shouldBubble: boolean = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.bottomLine && this.bottomLine.dispatchEvent(evt);
  }

  render() {
    const {
      wrapped,
      cssOnly,
      id,
      label,
      disabled,
      value,
      help,
      persistentHelp,
      dense,
      hasError,
      icon,
      withBox,
      style,
      children,
      multiline,
      fullWidth,
      ...rest
    } = this.props;

    // Components Type
    const Wrapper = wrapped ? 'label' : 'div';
    const Label = wrapped ? 'span' : 'label';
    const Input = multiline ? 'textarea' : 'input';

    // Root props
    const rootClassName = classnames('mdc-text-field', this.state.classes, {
      'mdc-text-field--disabled': disabled,
      'mdc-text-field--upgraded': value,
      'mdc-text-field--dense': dense,
      'mdc-text-field--box': withBox,
      'mdc-text-field--textarea': multiline,
      'mdc-text-field--fullwidth': fullWidth,
      [`mdc-text-field--with-${icon}-icon`]: icon,
    });

    const rootProps = {
      ref: element => {
        this.root = element;
      },
      className: rootClassName,
      style: { ...style, ...this.state.styles },
    };

    // Input props
    const inputProps = {
      ...rest,
      id,
      value,
      // if input and fullFill or cssOnly enable placeholder
      placeholder: cssOnly || (fullWidth && !multiline) ? label : null,
      className: 'mdc-text-field__input',
      disabled,
      'aria-controls': help ? `${id}-helptext` : null,
      ref: element => {
        this.input = element;
      },
    };

    const labelClassName = classnames(
      'mdc-text-field__label',
      this.state.labelClasses,
      {
        'mdc-text-field__label--float-above': value && !cssOnly,
      },
    );

    // BottomLine Props
    const bottomLineClasses = classnames(
      'mdc-text-field__bottom-line',
      this.state.bottomLineClasses,
    );

    const bottomLineProps = {
      ...this.state.bottomLineAttr,
      className: bottomLineClasses,
      ref: element => {
        this.bottomLine = element;
      },
    };

    // HelpText Props
    const helpTextClasses = classnames(
      'mdc-text-field-helper-text',
      this.state.helperTextClasses,
      {
        'mdc-text-field-helper-text--validation-msg': hasError,
      },
    );

    const helpTextProps = {
      ...this.state.helpTextAttr,
      id: `${id}-helptext`,
      className: helpTextClasses,
      'aria-hidden': 'true',
    };

    return (
      <React.Fragment>
        <Wrapper {...rootProps}>
          {icon === 'leading' && children}
          <Input {...inputProps} />
          {!((fullWidth && !multiline) || cssOnly) && (
            <Label className={labelClassName} htmlFor={id}>
              {label}
            </Label>
          )}
          {icon === 'trailing' && children}
          {!multiline && <div {...bottomLineProps} />}
        </Wrapper>
        {help && <p {...helpTextProps}>{help}</p>}
      </React.Fragment>
    );
  }
}
