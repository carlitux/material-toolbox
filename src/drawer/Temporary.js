// @flow
import * as React from 'react';
import classnames from 'classnames';

import MDCTemporaryDrawerFoundation from '@material/drawer/temporary/foundation';
import * as util from '@material/drawer/util';
import { strings } from '@material/drawer/temporary/constants';

import DrawerContent from './Content';
import DrawerToolbarSpacer from './ToolbarSpacer';
import DrawerHeader from './Header';

type ContentType = React.Element<
  typeof DrawerContent | typeof DrawerToolbarSpacer | typeof DrawerHeader,
>;

type Props = {
  onOpen: () => void,
  onClose: () => void,
  open: boolean,
  children: React.ChildrenArray<ContentType> | ContentType,
  style: { [any]: any },
};

type State = {
  classes: { [string]: boolean },
  styles: { [string]: any },
  rootStyles: { [string]: any },
};

export default class TemporaryDrawer extends React.Component<Props, State> {
  state = {
    classes: {
      'mdc-temporary-drawer': true,
      'mdc-typography': true,
    },
    styles: {},
    rootStyles: {},
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

  drawer: ?HTMLElement;
  root: ?HTMLElement;

  foundation = new MDCTemporaryDrawerFoundation({
    addClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: true },
      })),
    removeClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: false },
      })),
    hasClass: className => this.state.classes[className],
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
    setTranslateX: value => {
      this.setState(state => ({
        styles: {
          ...state.styles,
          [util.getTransformPropertyName()]: `translateX(${value}px)`,
        },
      }));
    },
    updateCssVariable: value => {
      this.setState(state => ({
        rootStyles: {
          ...state.rootStyles,
          [strings.OPACITY_VAR_NAME]: value,
        },
      }));
    },
    getFocusableElements: () =>
      this.drawer && this.drawer.querySelectorAll(strings.FOCUSABLE_ELEMENTS),
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
    const className = classnames(this.state.classes);

    return (
      <aside
        ref={root => {
          this.root = root;
        }}
        style={{ ...this.props.style, ...this.state.rootStyles }}
        className={className}>
        <nav
          ref={drawer => {
            this.drawer = drawer;
          }}
          style={this.state.styles}
          className="mdc-temporary-drawer__drawer">
          {React.Children.map(this.props.children, child => (
            <child.type {...child.props} drawerType="temporary" />
          ))}
        </nav>
      </aside>
    );
  }
}
