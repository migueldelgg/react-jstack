"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// renderize o h1 dentro da DIV com id igual a root
_reactDom["default"].render(/*#__PURE__*/_react["default"].createElement("h1", {
  id: "title"
}, /*#__PURE__*/_react["default"].createElement("span", null, "Hello World!")), document.getElementById('root'));