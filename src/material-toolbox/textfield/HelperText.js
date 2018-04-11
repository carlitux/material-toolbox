// @flow
import * as React from 'react';
import cx from 'classnames';

import MDCTextFieldHelperTextFoundation from '@material/textfield/helper-text/foundation';

type Props = {
  text: string,
  cssOnly: boolean,
  persistent: boolean,
  validation: boolean,
};

type State = {
  classNames: { [string]: boolean },
  attrs: { [string]: any },
};

export default class TextFieldHelperText extends React.PureComponent<
  Props,
  State,
> {
  static defaultProps = {
    cssOnly: false,
    persistent: false,
    validation: false,
  };

  static getDerivedStateFromProps(props: Props) {
    return {
      classNames: {
        'mdc-text-field-helper-text--persistent': props.persistent,
        'mdc-text-field-helper-text--validation-msg': props.validation,
      },
    };
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      classNames: {
        'mdc-text-field-helper-text--persistent': this.props.persistent,
        'mdc-text-field-helper-text--validation-msg': this.props.validation,
      },
      attrs: {
        'aria-hidden': true,
      },
    };
  }

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.createMDCTextFieldHelperText_();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.cssOnly !== prevProps.cssOnly) {
      if (this.props.cssOnly) {
        this.removeMDCTextFieldHelperText_();
      } else {
        this.createMDCTextFieldHelperText_();
      }
    }
  }

  componentWillUnmount() {
    this.removeMDCTextFieldHelperText_();
  }

  setValidity(inputIsValid: boolean) {
    if (this.mdcTextFieldHelperText_) {
      this.mdcTextFieldHelperText_.setValidity(inputIsValid);
    }
  }

  showToScreenReader() {
    if (this.mdcTextFieldHelperText_) {
      this.mdcTextFieldHelperText_.showToScreenReader();
    }
  }

  mdcTextFieldHelperText_: ?MDCTextFieldHelperTextFoundation;

  createMDCTextFieldHelperText_() {
    this.mdcTextFieldHelperText_ = new MDCTextFieldHelperTextFoundation({
      addClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: true },
        })),
      removeClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: undefined },
        })),
      hasClass: className => this.state.classNames[className],
      setAttr: (attr, value) =>
        this.setState(state => ({
          attrs: { ...state.attrs, [attr]: value },
        })),
      removeAttr: attr =>
        this.setState(state => ({
          attrs: { ...state.attrs, [attr]: undefined },
        })),
    });
    this.mdcTextFieldHelperText_.init();
  }

  removeMDCTextFieldHelperText_() {
    if (this.mdcTextFieldHelperText_) {
      this.mdcTextFieldHelperText_.destroy();
      delete this.mdcTextFieldHelperText_;
    }
  }

  render() {
    const { persistent, validation, text, cssOnly, ...rest } = this.props;
    return (
      <p
        {...rest}
        {...this.state.attrs}
        className={cx('mdc-text-field-helper-text', this.state.classNames)}>
        {text}
      </p>
    );
  }
}
