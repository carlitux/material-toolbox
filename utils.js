"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizePropToReactStyle = normalizePropToReactStyle;


// eslint-disable-next-line
function normalizePropToReactStyle(property) {
  return property.replace(/(-.)/g, function (txt) {
    return txt.slice(1).toUpperCase();
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(normalizePropToReactStyle, "normalizePropToReactStyle", "src/utils.js");
}();

;