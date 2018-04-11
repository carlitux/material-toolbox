// @flow
import * as React from 'react';
import cx from 'classnames';

import MDCSnackbarFoundation from '@material/snackbar/foundation';
import { getCorrectEventName } from '@material/animation';

type Props = {
  active: boolean,
  timeout: number,
  message: string,
  multiline: boolean,
  dismissesOnAction: boolean,
  actionOnBottom: boolean,
  actionText?: string,
  align?: boolean,
  onHide?: () => void,
  onShow?: () => void,
  onClick?: () => void,
};

type State = {
  classNames: { [string]: true },
  message: string,
  actionText: string,
  rootAriaHidden?: true,
  actionAriaHidden?: true,
};

export default class Snackbar extends React.PureComponent<Props, State> {
  static defaultProps = {
    timeout: 2750,
    active: false,
    align: false,
    multiline: false,
    actionOnBottom: false,
    dismissesOnAction: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      classNames: {},
      message: '',
      actionText: '',
    };

    // $FlowFixMe
    this.button_ = React.createRef();
    // $FlowFixMe
    this.root_ = React.createRef();
  }

  componentDidMount() {
    this.mdcSnackbar_ = new MDCSnackbarFoundation({
      addClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: true },
        })),
      removeClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: undefined },
        })),
      setAriaHidden: () => {
        this.setState({ rootAriaHidden: true });
      },
      unsetAriaHidden: () => {
        this.setState({ rootAriaHidden: undefined });
      },
      setActionAriaHidden: () => {
        this.setState({ actionAriaHidden: true });
      },
      unsetActionAriaHidden: () => {
        this.setState({ actionAriaHidden: undefined });
      },
      setActionText: (actionText: string) => {
        this.setState({ actionText });
      },
      setMessageText: (message: string) => {
        this.setState({ message });
      },
      setFocus: () => this.button_.current && this.button_.current.focus(),
      visibilityIsHidden: () => document.hidden,
      registerCapturedBlurHandler: handler =>
        this.button_.current &&
        this.button_.current.addEventListener('blur', handler, true),
      deregisterCapturedBlurHandler: handler =>
        this.button_.current &&
        this.button_.current.removeEventListener('blur', handler, true),
      registerVisibilityChangeHandler: handler =>
        document.addEventListener('visibilitychange', handler),
      deregisterVisibilityChangeHandler: handler =>
        document.removeEventListener('visibilitychange', handler),
      registerCapturedInteractionHandler: (evt, handler) =>
        document.body && document.body.addEventListener(evt, handler, true),
      deregisterCapturedInteractionHandler: (evt, handler) =>
        document.body && document.body.removeEventListener(evt, handler, true),
      registerActionClickHandler: handler =>
        this.button_.current &&
        this.button_.current.addEventListener('click', handler),
      deregisterActionClickHandler: handler =>
        this.button_.current &&
        this.button_.current.removeEventListener('click', handler),
      registerTransitionEndHandler: handler =>
        this.root_.current &&
        this.root_.current.addEventListener(
          getCorrectEventName(window, 'transitionend'),
          handler,
        ),
      deregisterTransitionEndHandler: handler =>
        this.root_.current &&
        this.root_.current.removeEventListener(
          getCorrectEventName(window, 'transitionend'),
          handler,
        ),
      notifyShow: () => this.props.onShow && this.props.onShow(),
      notifyHide: () => this.props.onHide && this.props.onHide(),
    });

    this.mdcSnackbar_.init();
    this.updateSnackbar();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      this.props.dismissesOnAction !== prevProps.dismissesOnAction &&
      this.mdcSnackbar_
    ) {
      this.mdcSnackbar_.setDismissOnAction(this.props.dismissesOnAction);
    }

    if (prevState === this.state) {
      this.updateSnackbar();
    }
  }

  componentWillUnmount() {
    if (this.mdcSnackbar_) {
      this.mdcSnackbar_.destroy();
      delete this.mdcSnackbar_;
    }
  }

  mdcSnackbar_: ?MDCSnackbarFoundation;
  button_: any;
  root_: any;

  updateSnackbar() {
    if (this.props.active && this.mdcSnackbar_) {
      this.mdcSnackbar_.show({
        message: this.props.message,
        actionText: this.props.actionText,
        timeout: this.props.timeout,
        multiline: this.props.multiline,
        actionOnBottom: this.props.actionOnBottom,
        actionHandler: this.props.onClick,
      });
    }
  }

  render() {
    const { align } = this.props;

    return (
      <div
        ref={this.root_}
        className={cx('mdc-snackbar', this.state.classNames, {
          'mdc-snackbar--align-start': align,
        })}
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden={this.state.rootAriaHidden}>
        <div className="mdc-snackbar__text">{this.state.message}</div>
        <div className="mdc-snackbar__action-wrapper">
          <button
            ref={this.button_}
            type="button"
            className="mdc-snackbar__action-button"
            aria-hidden={this.state.actionAriaHidden}>
            {this.state.actionText}
          </button>
        </div>
      </div>
    );
  }
}
