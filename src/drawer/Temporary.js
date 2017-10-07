// @flow
import * as React from 'react';
import classnames from 'classnames';

import { MDCTemporaryDrawerFoundation, util } from '@material/drawer';
import {
  FOCUSABLE_ELEMENTS,
  OPACITY_VAR_NAME,
} from '@material/drawer/temporary/constants';

import styles from '@material/drawer/mdc-drawer.scss';

type Props = {
  onOpen: () => void,
  onClose: () => void,
  open: boolean,
  children: React.Node,
};

type State = {
  classes: Set<string>,
};

export default class TemporaryDrawer extends React.Component<Props, State> {
  state = {
    classes: new Set(),
  };

  componentDidMount() {
    // NOTE.- Still not sure if we have to wait for next tick to get computed
    // values of dom element on foundation
    // setTimeout(() => {
    //   this.foundation.init();
    // });
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

  props: Props;
  allClasses: Set<string>;
  drawer: ?HTMLElement;
  root: ?HTMLElement;

  foundation = new MDCTemporaryDrawerFoundation({
    addClass: className =>
      this.setState(prevState => {
        prevState.classes.add(styles[className] || className);
        return {
          classes: prevState.classes,
        };
      }),
    removeClass: className =>
      this.setState(prevState => {
        prevState.classes.delete(styles[className] || className);
        return {
          classes: prevState.classes,
        };
      }),
    hasClass: className => this.allClasses.has(styles[className] || className),
    addBodyClass: className =>
      document.body && document.body.classList.add(className),
    removeBodyClass: className =>
      document.body && document.body.classList.remove(className),
    hasNecessaryDom: () => Boolean(this.drawer),
    registerInteractionHandler: (evt, handler) =>
      this.root &&
      this.root.addEventListener(
        util.remapEvent(evt),
        handler,
        util.applyPassive(),
      ),
    deregisterInteractionHandler: (evt, handler) =>
      this.root &&
      this.root.removeEventListener(
        util.remapEvent(evt),
        handler,
        util.applyPassive(),
      ),
    registerDrawerInteractionHandler: (evt, handler) =>
      this.drawer &&
      this.drawer.addEventListener(util.remapEvent(evt), handler),
    deregisterDrawerInteractionHandler: (evt, handler) =>
      this.drawer &&
      this.drawer.removeEventListener(util.remapEvent(evt), handler),
    registerTransitionEndHandler: handler =>
      this.root && this.root.addEventListener('transitionend', handler),
    deregisterTransitionEndHandler: handler =>
      this.root && this.root.removeEventListener('transitionend', handler),
    registerDocumentKeydownHandler: handler =>
      document.addEventListener('keydown', handler),
    deregisterDocumentKeydownHandler: handler =>
      document.removeEventListener('keydown', handler),
    getDrawerWidth: () => this.drawer && this.drawer.offsetWidth,
    setTranslateX: value =>
      this.drawer &&
      this.drawer.style.setProperty(
        util.getTransformPropertyName(),
        value === null ? null : `translateX(${value}px)`,
      ),
    updateCssVariable: value => {
      // TODO: move this to state
      if (util.supportsCssCustomProperties() && this.root) {
        this.root.style.setProperty(OPACITY_VAR_NAME, value);
      }
    },
    getFocusableElements: () =>
      this.drawer && this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
    saveElementTabState: el => util.saveElementTabState(el),
    restoreElementTabState: el => util.restoreElementTabState(el),
    makeElementUntabbable: el => el.setAttribute('tabindex', -1),
    notifyOpen: () => {
      if (this.props.onOpen) {
        this.props.onOpen();
      }
    },
    notifyClose: () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    },
    isRtl: () =>
      this.root &&
      getComputedStyle(this.root).getPropertyValue('direction') === 'rtl',
    isDrawer: el => el === this.drawer,
  });

  render() {
    const className = classnames(
      styles['mdc-temporary-drawer'],
      styles['mdc-typography'],
      ...this.state.classes,
    );

    this.allClasses = new Set(className.split(' '));

    return (
      <aside
        ref={root => {
          this.root = root;
        }}
        className={className}>
        <nav
          ref={drawer => {
            this.drawer = drawer;
          }}
          className={styles['mdc-temporary-drawer__drawer']}>
          {this.props.children}
        </nav>
      </aside>
    );
  }
}
