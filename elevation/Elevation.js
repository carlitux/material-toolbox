'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Elevation = function Elevation(_ref) {
  var children = _ref.children,
      transition = _ref.transition,
      elevation = _ref.elevation;
  return React.Children.map(children, function (child) {
    var _classnames;

    var newClassName = (0, _classnames3.default)(child.props.className, (_classnames = {}, _defineProperty(_classnames, 'mdc-elevation--z' + elevation, elevation >= 0), _defineProperty(_classnames, 'mdc-elevation-transition', transition), _classnames));
    return React.createElement(child.type, _extends({}, child.props, {
      className: newClassName,
      ref: function ref(node) {
        var ref = child.ref;

        if (typeof ref === 'function') {
          ref(node);
        }
      }
    }));
  });
};

var _default = Elevation;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Elevation, 'Elevation', 'src/elevation/Elevation.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/elevation/Elevation.js');
}();

;
module.exports = exports['default'];