// @flow
import * as React from 'react';
import classnames from 'classnames';

import MDCTextFieldIconFoundation from '@material/textfield/icon/foundation';

type Props = {
  cssOnly: boolean,
  clickable: boolean,
  disabled: boolean,
  className?: string,
  onActived?: () => void, // NOTE: Maybe set on click and on keydown
  onClick?: (evt: SyntheticInputEvent<any>) => void,
  onKeyDown?: (evt: SyntheticInputEvent<any>) => void,
};

export default class TextFieldIcon extends React.Component<Props> {
  static defaultProps = {
    cssOnly: false,
    clickable: false,
    disabled: false,
  };

  constructor(props: Props) {
    super(props);
    // $FlowFixMe
    this.root_ = React.createRef();
    this.handlers_ = {};
  }

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.createMDCTextFieldIcon_();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.cssOnly !== prevProps.cssOnly) {
      if (this.props.cssOnly) {
        this.removeMDCTextFieldIcon_();
      } else {
        this.createMDCTextFieldIcon_();
      }
    }
  }

  handleClick = (evt: SyntheticInputEvent<any>) => {
    if (this.props.onClick) {
      this.props.onClick(evt);
    }

    if (this.handlers_.click) {
      this.handlers_.click(evt);
    }
  };

  handleKeyDown = (evt: SyntheticInputEvent<any>) => {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(evt);
    }

    if (this.handlers_.keydown) {
      this.handlers_.keydown(evt);
    }
  };

  root_: any;
  handlers_: { [string]: (evt: SyntheticInputEvent<any>) => void };
  mdcTextFieldIcon_: ?MDCTextFieldIconFoundation;

  createMDCTextFieldIcon_() {
    this.mdcTextFieldIcon_ = new MDCTextFieldIconFoundation({
      registerInteractionHandler: (evtType, handler) => {
        this.handlers_[evtType] = handler;
      },
      deregisterInteractionHandler: evtType => delete this.handlers_[evtType],
      notifyIconAction: () => this.props.onActived && this.props.onActived(),
    });
    this.mdcTextFieldIcon_.init();
  }

  removeMDCTextFieldIcon_() {
    if (this.mdcTextFieldIcon_) {
      this.mdcTextFieldIcon_.destroy();
      delete this.mdcTextFieldIcon_;
    }
  }

  render() {
    const { className, clickable, cssOnly, disabled, ...rest } = this.props;

    return (
      <i // eslint-disable-line
        {...rest}
        tabIndex={clickable && !disabled ? '0' : '-1'} // eslint-disable-line
        ref={this.root_}
        className={classnames('mdc-text-field__icon', className)}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
