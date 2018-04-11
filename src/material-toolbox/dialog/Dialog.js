// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import MDCDialogFoundation from '@material/dialog/foundation';
import * as util from '@material/dialog/util';

import { Button } from '../button';

type Props = {
  children: React.Node,
  className: string,
  name: string,
  dark: boolean,
  onAccept: () => void,
  onCancel: () => void,
  acceptLabel: string,
  cancelLabel: string,
  isAction: 'accept' | 'cancel',
  open: boolean,
};

type State = {
  classes: { [string]: boolean },
};

export default class Dialog extends React.Component<Props, State> {
  state = {
    classes: {},
  };

  componentDidMount() {
    this.foundation.init();
  }

  componentWillReceiveProps(newProps: Props) {
    if (newProps.open) {
      this.foundation.open();
    }
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  getFocusTrap() {
    if (this.surface && this.acceptButton) {
      return util.createFocusTrapInstance(
        this.surface,
        // eslint-disable-next-line
        ReactDOM.findDOMNode(this.acceptButton),
      );
    }

    return {
      activate: () => {},
      deactivate: () => {},
    };
  }

  root: ?HTMLElement;
  surface: ?HTMLElement;
  acceptButton: ?Button;
  cancelButton: ?Button;

  foundation = new MDCDialogFoundation({
    addClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: true },
      })),
    removeClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: false },
      })),
    addBodyClass: className =>
      document.body && document.body.classList.add(className),
    removeBodyClass: className =>
      document.body && document.body.classList.remove(className),
    eventTargetHasClass: (target, className) =>
      target.classList.contains(className),
    registerInteractionHandler: (evt, handler) =>
      this.root && this.root.addEventListener(evt, handler),
    deregisterInteractionHandler: (evt, handler) =>
      this.root && this.root.removeEventListener(evt, handler),
    registerDocumentKeydownHandler: handler =>
      document.addEventListener('keydown', handler),
    deregisterDocumentKeydownHandler: handler =>
      document.removeEventListener('keydown', handler),
    registerSurfaceInteractionHandler: (evt, handler) =>
      this.surface && this.surface.addEventListener(evt, handler),
    deregisterSurfaceInteractionHandler: (evt, handler) =>
      this.surface && this.surface.removeEventListener(evt, handler),
    registerTransitionEndHandler: handler =>
      this.surface && this.surface.addEventListener('transitionend', handler),
    deregisterTransitionEndHandler: handler =>
      this.surface &&
      this.surface.removeEventListener('transitionend', handler),
    notifyAccept: () => this.props.onAccept && this.props.onAccept(),
    notifyCancel: () => this.props.onCancel && this.props.onCancel(),
    trapFocusOnSurface: () => this.getFocusTrap().activate(),
    untrapFocusOnSurface: () => this.getFocusTrap().deactivate(),
    isDialog: el => el === this.surface,
    layoutFooterRipples: () => {
      this.acceptButton && this.acceptButton.layout();
      this.cancelButton && this.cancelButton.layout();
    },
  });

  render() {
    const cn = classnames(
      'mdc-dialog',
      this.props.className,
      this.state.classes,
      {
        'mdc-dialog--theme-dark': this.props.dark,
      },
    );

    return (
      <aside
        ref={element => {
          this.root = element;
        }}
        id={this.props.name}
        aria-labelledby={`${this.props.name}-label`}
        aria-describedby={`${this.props.name}-description`}
        className={cn}
        role="alertdialog">
        <div
          ref={element => {
            this.surface = element;
          }}
          className="mdc-dialog__surface">
          {React.Children.map(this.props.children, child => (
            <child.type {...child.props} name={this.props.name} />
          ))}
          {(this.props.acceptLabel || this.props.cancelLabel) && (
            <footer className="mdc-dialog__footer">
              {this.props.cancelLabel && (
                <Button
                  ref={element => {
                    this.cancelButton = element;
                  }}
                  ripple
                  className={classnames(
                    'mdc-dialog__footer__button',
                    'mdc-dialog__footer__button--cancel',
                    {
                      'mdc-dialog__action': this.props.isAction === 'cancel',
                    },
                  )}>
                  {this.props.cancelLabel}
                </Button>
              )}
              {this.props.acceptLabel && (
                <Button
                  ref={element => {
                    this.acceptButton = element;
                  }}
                  ripple
                  className={classnames(
                    'mdc-dialog__footer__button',
                    'mdc-dialog__footer__button--accept',
                    {
                      'mdc-dialog__action': this.props.isAction === 'accept',
                    },
                  )}>
                  {this.props.acceptLabel}
                </Button>
              )}
            </footer>
          )}
        </div>
        <div className="mdc-dialog__backdrop" />
      </aside>
    );
  }
}
