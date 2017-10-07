// @flow
import * as React from 'react';
import classnames from 'classnames';

import { MDCPersistentDrawerFoundation, util } from '@material/drawer';
import { FOCUSABLE_ELEMENTS } from '@material/drawer/persistent/constants';

type Props = {
  onOpen: () => void,
  onClose: () => void,
  open: boolean,
  children: React.Node,
};

type State = {
  classes: Set<string>,
};

export default class PersistentDrawer extends React.Component<Props, State> {
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
    if (newProps.open !== this.props.open) {
      if (newProps.open) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    }
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  props: Props;
  allClasses: Set<string>;
  drawer: ?HTMLElement;
  root: ?HTMLElement;

  foundation = new MDCPersistentDrawerFoundation({
    addClass: className =>
      this.setState(prevState => {
        prevState.classes.add(className);
        return {
          classes: prevState.classes,
        };
      }),
    removeClass: className =>
      this.setState(prevState => {
        prevState.classes.delete(className);
        return {
          classes: prevState.classes,
        };
      }),
    hasClass: className => this.allClasses.has(className),
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
      'mdc-persistent-drawer',
      'mdc-typography',
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
          className="mdc-persistent-drawer__drawer">
          {this.props.children}
        </nav>
      </aside>
    );
  }
}
