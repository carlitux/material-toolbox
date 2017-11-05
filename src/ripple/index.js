// @flow
import type { Element, ComponentType } from 'react';
import * as util from '@material/ripple/util';

export default function createAdapter(
  component: Element<ComponentType<any>>,
  element: HTMLElement,
  {
    unbounded = false,
    disabled = false,
    primary = false,
    accent = false,
  }: {
    unbounded: boolean,
    disabled: boolean,
    primary: boolean,
    accent: boolean,
  },
): { [any]: any } {
  const MATCHES = util.getMatchesProperty(HTMLElement.prototype);
  // $FlowFixMe
  component.setState(state => ({
    styles: {},
    classes: {
      'mdc-ripple-surface': true,
      'mdc-ripple-surface--primary': primary,
      'mdc-ripple-surface--accent': accent,
    },
  }));

  return {
    browserSupportsCssVars: () => util.supportsCssVariables(window),
    isUnbounded: () => unbounded,
    // $FlowFixMe
    isSurfaceActive: () => element[MATCHES](':active'),
    isSurfaceDisabled: () => disabled,
    addClass: className => {
      // $FlowFixMe
      component.setState(state => ({
        // $FlowFixMe
        classes: { ...state.classes, [className]: true },
      }));
    },
    removeClass: className => {
      // $FlowFixMe
      component.setState(state => ({
        // $FlowFixMe
        classes: { ...state.classes, [className]: false },
      }));
    },
    registerInteractionHandler: (evtType, handler) =>
      element.addEventListener(evtType, handler, util.applyPassive()),
    deregisterInteractionHandler: (evtType, handler) =>
      element.removeEventListener(evtType, handler, util.applyPassive()),
    registerResizeHandler: handler => {
      window.addEventListener('resize', handler);
    },
    deregisterResizeHandler: handler => {
      window.removeEventListener('resize', handler);
    },
    updateCssVariable: (cssVar, value) => {
      // $FlowFixMe
      component.setState(state => ({
        // $FlowFixMe
        styles: { ...state.styles, [cssVar]: value },
      }));
    },
    computeBoundingRect: () => element.getBoundingClientRect(),
    getWindowPageOffset: () => ({
      x: window.pageXOffset,
      y: window.pageYOffset,
    }),
  };
}
