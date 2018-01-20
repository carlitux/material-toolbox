// @flow
import * as React from 'react';
import classnames from 'classnames';

import MDCSnackbarFoundation from '@material/snackbar/foundation';
import { getCorrectEventName } from '@material/animation';

type Props = {
  message: string,
  actionText: string,
  align: boolean,
  active: boolean,
  multiline: boolean,
  actionOnBottom: boolean,
  dismiss: boolean,
  timeout: number,
  onActionClick: () => void,
  onShow: () => void,
  onHide: () => void,
};

type State = {
  classes: { [string]: boolean },
  rootAriaHidden: null | true,
  actionAriaHidden: null | true,
  actionText: string,
  messageText: string,
};

export default class Snackbar extends React.Component<Props, State> {
  static defaultProps = {
    timeout: 2750,
    dismiss: true,
  };

  state = {
    classes: {},
    rootAriaHidden: true,
    actionAriaHidden: true,
    messageText: '',
    actionText: '',
  };

  componentDidMount() {
    this.mdcSnackbar.init();
    if (this.props.active) {
      this.mdcSnackbar.setDismissOnAction(this.props.dismiss);
      this.showSnackbar();
    }
  }

  componentWillReceiveProps(props: Props) {
    if (props.active) {
      this.mdcSnackbar.setDismissOnAction(this.props.dismiss);
      this.showSnackbar();
    }
  }

  componentWillUnmount() {
    this.mdcSnackbar.destroy();
  }

  showSnackbar() {
    this.mdcSnackbar.show({
      message: this.props.message,
      actionText: this.props.actionText,
      multiline: this.props.multiline,
      actionOnBottom: this.props.actionOnBottom,
      timeout: this.props.timeout,
      actionHandler: this.props.onActionClick,
    });
  }

  button: ?HTMLButtonElement;
  root: ?HTMLDivElement;

  mdcSnackbar = new MDCSnackbarFoundation({
    addClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: true },
      })),
    removeClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: false },
      })),
    setAriaHidden: () => {
      this.setState(state => ({ rootAriaHidden: true }));
    },
    unsetAriaHidden: () => {
      this.setState(state => ({ rootAriaHidden: null }));
    },
    setActionAriaHidden: () => {
      this.setState(state => ({ actionAriaHidden: true }));
    },
    unsetActionAriaHidden: () => {
      this.setState(state => ({ actionAriaHidden: null }));
    },
    setActionText: (actionText: string) => {
      this.setState(state => ({ actionText }));
    },
    setMessageText: (messageText: string) => {
      this.setState(state => ({ messageText }));
    },
    setFocus: () => this.button && this.button.focus(),
    visibilityIsHidden: () => document.hidden,
    registerCapturedBlurHandler: handler =>
      this.button && this.button.addEventListener('blur', handler, true),
    deregisterCapturedBlurHandler: handler =>
      this.button && this.button.removeEventListener('blur', handler, true),
    registerVisibilityChangeHandler: handler =>
      document.addEventListener('visibilitychange', handler),
    deregisterVisibilityChangeHandler: handler =>
      document.removeEventListener('visibilitychange', handler),
    registerCapturedInteractionHandler: (evt, handler) =>
      document.body && document.body.addEventListener(evt, handler, true),
    deregisterCapturedInteractionHandler: (evt, handler) =>
      document.body && document.body.removeEventListener(evt, handler, true),
    registerActionClickHandler: handler =>
      this.button && this.button.addEventListener('click', handler),
    deregisterActionClickHandler: handler =>
      this.button && this.button.removeEventListener('click', handler),
    registerTransitionEndHandler: handler =>
      this.root &&
      this.root.addEventListener(
        getCorrectEventName(window, 'transitionend'),
        handler,
      ),
    deregisterTransitionEndHandler: handler =>
      this.root &&
      this.root.removeEventListener(
        getCorrectEventName(window, 'transitionend'),
        handler,
      ),
    notifyShow: () => this.props.onShow && this.props.onShow(),
      notifyHide: () => this.props.onHide && this.props.onHide(),
  });

  render() {
    return (
      <div
        ref={element => {
          this.root = element;
        }}
        className={classnames('mdc-snackbar', this.state.classes, {
          'mdc-snackbar--align-start': this.props.align,
        })}
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden={this.state.rootAriaHidden}>
        <div className="mdc-snackbar__text">{this.state.messageText}</div>
        <div className="mdc-snackbar__action-wrapper">
          <button
            ref={element => {
              this.button = element;
            }}
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
