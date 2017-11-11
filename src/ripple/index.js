// @flow
import type { Component } from 'react';
import * as util from '@material/ripple/util';

export default function createAdapter(
  component: Component<any, any>,
  element: HTMLElement | Element | Text,
  {
    unbounded = false,
    disabled = false,
    primary = false,
    accent = false,
  }: {
    unbounded?: boolean,
    disabled?: boolean,
    primary?: boolean,
    accent?: boolean,
  },
): { [any]: any } {
  if (!element) {
    return {};
  }

  const MATCHES = util.getMatchesProperty(HTMLElement.prototype);
  let removed = false;
  let timeoutID;

  // $FlowFixMe
  component.setState(state => ({
    styles: {},
    classes: {
      // 'mdc-ripple-surface': true,
      'mdc-ripple-surface--primary': primary,
      'mdc-ripple-surface--accent': accent,
    },
  }));

  return {
    componentRemoved: () => {
      removed = true;
    },
    browserSupportsCssVars: () => util.supportsCssVariables(window),
    isUnbounded: () => unbounded,
    // $FlowFixMe
    isSurfaceActive: () => element[MATCHES](':active'),
    isSurfaceDisabled: () => disabled,
    addClass: className => {
      if (!removed) {
        // $FlowFixMe
        component.setState(state => ({
          // $FlowFixMe
          classes: { ...state.classes, [className]: true },
        }));
      }
    },
    removeClass: className => {
      // This used to allow mdc-ripple do clean component destroy
      // return to false to do not enter into isMount antipattern
      // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
      if (removed && !timeoutID) {
        setTimeout(() => {
          removed = false;
          timeoutID = undefined;
        }, 1000);
      } else {
        // $FlowFixMe
        component.setState(state => ({
          // $FlowFixMe
          classes: { ...state.classes, [className]: false },
        }));
      }
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
      if (!removed) {
        // $FlowFixMe
        component.setState(state => ({
          // $FlowFixMe
          styles: { ...state.styles, [cssVar]: value },
        }));
      }
    },
    // $FlowFixMe
    computeBoundingRect: () => element.getBoundingClientRect(),
    getWindowPageOffset: () => ({
      x: window.pageXOffset,
      y: window.pageYOffset,
    }),
  };
}
