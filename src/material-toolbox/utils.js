// @flow

// eslint-disable-next-line
export function normalizePropToReactStyle(property: string): string {
  return property.replace(/(-.)/g, txt => txt.slice(1).toUpperCase());
}

/**
 * From https://github.com/material-components/material-components-web/blob/master/packages/mdc-base/component.js
 * Fires a cross-browser-compatible custom event from the component root of the given type,
 * with the given data.
 * @param {string} evtType
 * @param {!Object} evtData
 * @param {boolean=} shouldBubble
 */
export function emit(
  evtType: string,
  evtData: {},
  shouldBubble: boolean = false,
) {
  let evt;
  if (typeof CustomEvent === 'function') {
    evt = new CustomEvent(evtType, {
      detail: evtData,
      bubbles: shouldBubble,
    });
  } else {
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(evtType, shouldBubble, false, evtData);
  }
}
