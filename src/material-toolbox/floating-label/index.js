// @flow
import * as React from 'react';
import cx from 'classnames';

import MDCFloatingLabelFoundation from '@material/floating-label/foundation';

type Props = {
  label: string,
  cssOnly: boolean,
  preFilled: boolean,
  htmlFor?: string,
};

type State = {
  classNames: { [string]: boolean },
};

export default class FloatingLabel extends React.PureComponent<Props, State> {
  static defaultProps = {
    shake: false,
    float: false,
    htmlFor: undefined,
    cssOnly: false,
    preFilled: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      classNames: {
        'mdc-floating-label--float-above': props.preFilled,
      },
    };
  }

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.createMDCFloatingLabel_();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.cssOnly !== prevProps.cssOnly) {
      if (this.props.cssOnly) {
        this.removeMDCFloatingLabel_();
      } else {
        this.createMDCFloatingLabel_();
      }
    }
  }

  componentWillUnmount() {
    this.removeMDCFloatingLabel_();
  }

  getWidth() {
    return this.mdcFloatinLabel_ && this.mdcFloatinLabel_.getWidth();
  }

  float(shouldFloat: boolean) {
    return this.mdcFloatinLabel_ && this.mdcFloatinLabel_.float(shouldFloat);
  }

  shake(shouldShake: boolean) {
    return this.mdcFloatinLabel_ && this.mdcFloatinLabel_.shake(shouldShake);
  }

  mdcFloatinLabel_: ?MDCFloatingLabelFoundation;
  label_: ?HTMLSpanElement | ?HTMLLabelElement;

  createMDCFloatingLabel_() {
    this.mdcFloatinLabel_ = new MDCFloatingLabelFoundation({
      addClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: true },
        })),
      removeClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: undefined },
        })),
      getWidth: () => this.label_ && this.label_.offsetWidth,
      registerInteractionHandler: (evtType, handler) =>
        this.label_ && this.label_.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) =>
        this.label_ && this.label_.removeEventListener(evtType, handler),
    });
    this.mdcFloatinLabel_.init();
  }

  removeMDCFloatingLabel_() {
    if (this.mdcFloatinLabel_) {
      this.mdcFloatinLabel_.destroy();
      delete this.mdcFloatinLabel_;
    }
  }

  render() {
    const { label, htmlFor } = this.props;
    const Component = htmlFor ? 'label' : 'span';

    return (
      <Component
        htmlFor={htmlFor}
        ref={element => {
          this.label_ = element;
        }}
        className={cx('mdc-floating-label', this.state.classNames)}>
        {label}
      </Component>
    );
  }
}
