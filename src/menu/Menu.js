// @flow
import * as React from 'react';
import classnames from 'classnames';

import { MDCSimpleMenuFoundation } from '@material/menu/foundation';
import { getTransformPropertyName } from '@material/menu/util';

type Props = {
  show: boolean | number,
  className: string,
  children: React.Node,
  style: { [string]: any },
  onCancel: () => void,
  onSelect: (index: number, item: HTMLLIElement) => void,
  role: string,
};

type State = {
  classes: { [string]: boolean },
  rootStyles: { [string]: any },
  innerStyles: { [string]: any },
};

export default class SimpleMenu extends React.Component<Props, State> {
  state = {
    classes: {
      'mdc-menu': true,
    },
    rootStyles: {},
    innerStyles: {},
  };

  componentDidMount() {
    this.mdcSimpleMenu.init();
  }

  componentWillReceiveProps(newProps: Props) {
    if (newProps.show !== this.props.show) {
      if (newProps.show) {
        if (Number.isInteger(newProps.show)) {
          this.mdcSimpleMenu.open({ focusIndex: newProps.show });
        } else {
          this.mdcSimpleMenu.open();
        }
      } else {
        this.mdcSimpleMenu.close();
      }
    }
  }

  componentWillUnmount() {
    this.mdcSimpleMenu.destroy();
  }

  getItems(): Array<HTMLLIElement> {
    return this.itemsContainer
      ? [].slice.call(
          this.itemsContainer.querySelectorAll('.mdc-list-item[role]'),
        )
      : [];
  }

  // Used in select
  getOffsetHeight() {
    return this.root && this.root.offsetHeight;
  }

  itemsContainer: ?HTMLUListElement;
  root: ?HTMLDivElement;
  previousFocus: ?HTMLElement;

  mdcSimpleMenu = new MDCSimpleMenuFoundation({
    addClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: true },
      })),
    removeClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: false },
      })),
    hasClass: className => this.state.classes[className],
    hasNecessaryDom: () => Boolean(this.itemsContainer),
    getAttributeForEventTarget: (target, attributeName) =>
      target.getAttribute(attributeName),
    getInnerDimensions: () =>
      this.itemsContainer
        ? {
            width: this.itemsContainer.offsetWidth,
            height: this.itemsContainer.offsetHeight,
          }
        : null,
    hasAnchor: () =>
      this.root &&
      this.root.parentElement &&
      this.root.parentElement.classList.contains('mdc-menu-anchor'),
    getAnchorDimensions: () =>
      this.root &&
      this.root.parentElement &&
      this.root.parentElement.getBoundingClientRect(),
    getWindowDimensions: () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }),
    getNumberOfItems: () => this.getItems().length,
    registerInteractionHandler: (type, handler) =>
      this.root && this.root.addEventListener(type, handler),
    deregisterInteractionHandler: (type, handler) =>
      this.root && this.root.removeEventListener(type, handler),
    registerBodyClickHandler: handler =>
      document &&
      document.body &&
      document.body.addEventListener('click', handler),
    deregisterBodyClickHandler: handler =>
      document &&
      document.body &&
      document.body.removeEventListener('click', handler),
    getIndexForEventTarget: target => this.getItems().indexOf(target),
    notifySelected: evtData =>
      this.props.onSelect(evtData.index, this.getItems()[evtData.index]),
    notifyCancel: () => this.props.onCancel(),
    saveFocus: () => {
      this.previousFocus = document.activeElement;
    },
    restoreFocus: () => {
      if (this.previousFocus) {
        this.previousFocus.focus();
      }
    },
    isFocused: () => document.activeElement === this.root,
    focus: () => this.root && this.root.focus(),
    getFocusedItemIndex: () => this.getItems().indexOf(document.activeElement),
    focusItemAtIndex: index => this.getItems()[index].focus(),
    isRtl: () =>
      this.root &&
      getComputedStyle(this.root).getPropertyValue('direction') === 'rtl',
    setTransformOrigin: origin => {
      this.setState(state => ({
        rootStyles: {
          ...state.rootStyles,
          [`${getTransformPropertyName(window)}Origin`]: origin,
        },
      }));
    },
    setPosition: position => {
      this.setState(state => ({
        rootStyles: {
          ...state.rootStyles,
          left: 'left' in position ? position.left : null,
          right: 'right' in position ? position.right : null,
          top: 'top' in position ? position.top : null,
          bottom: 'bottom' in position ? position.bottom : null,
        },
      }));
    },
    setMaxHeight: height => {
      this.setState(state => ({
        rootStyles: {
          ...state.rootStyles,
          maxHeight: height,
        },
      }));
    },
  });

  render() {
    const {
      show,
      onCancel,
      onSelect,
      className,
      style,
      children,
      role,
      ...rest
    } = this.props;
    const rootClassName = classnames(className, this.state.classes);

    return (
      <div
        {...rest}
        ref={element => {
          this.root = element;
        }}
        style={{ ...style, ...this.state.rootStyles }}
        className={rootClassName}>
        <ul
          ref={element => {
            this.itemsContainer = element;
          }}
          style={this.state.innerStyles}
          className="mdc-menu__items mdc-list"
          role={role === undefined ? 'menu' : role}
          aria-hidden={show === false ? 'true' : undefined}>
          {children}
        </ul>
      </div>
    );
  }
}
