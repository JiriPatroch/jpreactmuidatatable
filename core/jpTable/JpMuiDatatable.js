"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _JpTableMain = _interopRequireDefault(require("./JpTableMain"));

var _store = _interopRequireDefault(require("./store/store"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
|--------------------------------------------------
| Default Table setting START
|--------------------------------------------------
*/
var defaultTableSetting = {
  tableName: "JpTable",
  globalSearch: false,
  columnsHideShowSwitch: false,
  tableMenu: false,
  multiSearch: false,
  hasEditing: false,
  hasDeleting: false,
  denseRowsSwitch: false
};
/**
|--------------------------------------------------
| Default Table setting END
|--------------------------------------------------
*/

function JpMuiDatatable(_ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$usersData = _ref.usersData,
      usersData = _ref$usersData === void 0 ? [] : _ref$usersData,
      _ref$tableSetting = _ref.tableSetting,
      tableSetting = _ref$tableSetting === void 0 ? _objectSpread({}, defaultTableSetting) : _ref$tableSetting,
      _ref$onEditClick = _ref.onEditClick,
      onEditClick = _ref$onEditClick === void 0 ? function () {} : _ref$onEditClick,
      _ref$onRemoveClick = _ref.onRemoveClick,
      onRemoveClick = _ref$onRemoveClick === void 0 ? function () {} : _ref$onRemoveClick;
  return _react.default.createElement(_store.default, null, _react.default.createElement(_reactDnd.DndProvider, {
    backend: _reactDndHtml5Backend.default
  }, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_JpTableMain.default, {
    usersData: usersData,
    columns: columns,
    onEditClick: onEditClick,
    onRemoveClick: onRemoveClick,
    tableSetting: tableSetting
  })));
}

JpMuiDatatable.prototypes = {
  columns: _propTypes.default.array.isRequired,
  usersData: _propTypes.default.array.isRequired,
  tableSetting: _propTypes.default.object,
  onEditClick: _propTypes.default.func,
  onRemoveClick: _propTypes.default.func
};
var _default = JpMuiDatatable;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2pwVGFibGUvSnBNdWlEYXRhdGFibGUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFRhYmxlU2V0dGluZyIsInRhYmxlTmFtZSIsImdsb2JhbFNlYXJjaCIsImNvbHVtbnNIaWRlU2hvd1N3aXRjaCIsInRhYmxlTWVudSIsIm11bHRpU2VhcmNoIiwiaGFzRWRpdGluZyIsImhhc0RlbGV0aW5nIiwiZGVuc2VSb3dzU3dpdGNoIiwiSnBNdWlEYXRhdGFibGUiLCJjb2x1bW5zIiwidXNlcnNEYXRhIiwidGFibGVTZXR0aW5nIiwib25FZGl0Q2xpY2siLCJvblJlbW92ZUNsaWNrIiwiSFRNTDVCYWNrZW5kIiwicHJvdG90eXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUdBOzs7OztBQUtBLElBQU1BLG1CQUFtQixHQUFHO0FBQzFCQyxFQUFBQSxTQUFTLEVBQUUsU0FEZTtBQUUxQkMsRUFBQUEsWUFBWSxFQUFFLEtBRlk7QUFHMUJDLEVBQUFBLHFCQUFxQixFQUFFLEtBSEc7QUFJMUJDLEVBQUFBLFNBQVMsRUFBRSxLQUplO0FBSzFCQyxFQUFBQSxXQUFXLEVBQUUsS0FMYTtBQU0xQkMsRUFBQUEsVUFBVSxFQUFFLEtBTmM7QUFPMUJDLEVBQUFBLFdBQVcsRUFBRSxLQVBhO0FBUTFCQyxFQUFBQSxlQUFlLEVBQUU7QUFSUyxDQUE1QjtBQVVBOzs7Ozs7QUFNQSxTQUFTQyxjQUFULE9BTUc7QUFBQSwwQkFMREMsT0FLQztBQUFBLE1BTERBLE9BS0MsNkJBTFMsRUFLVDtBQUFBLDRCQUpEQyxTQUlDO0FBQUEsTUFKREEsU0FJQywrQkFKVyxFQUlYO0FBQUEsK0JBSERDLFlBR0M7QUFBQSxNQUhEQSxZQUdDLG9EQUhtQlosbUJBR25CO0FBQUEsOEJBRkRhLFdBRUM7QUFBQSxNQUZEQSxXQUVDLGlDQUZhLFlBQU0sQ0FBRyxDQUV0QjtBQUFBLGdDQUREQyxhQUNDO0FBQUEsTUFEREEsYUFDQyxtQ0FEZSxZQUFNLENBQUcsQ0FDeEI7QUFFRCxTQUNFLDZCQUFDLGNBQUQsUUFDRSw2QkFBQyxxQkFBRDtBQUFhLElBQUEsT0FBTyxFQUFFQztBQUF0QixLQUNFLDZCQUFDLG9CQUFELE9BREYsRUFFRSw2QkFBQyxvQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFFSixTQURiO0FBRUUsSUFBQSxPQUFPLEVBQUVELE9BRlg7QUFHRSxJQUFBLFdBQVcsRUFBRUcsV0FIZjtBQUlFLElBQUEsYUFBYSxFQUFFQyxhQUpqQjtBQUtFLElBQUEsWUFBWSxFQUFFRjtBQUxoQixJQUZGLENBREYsQ0FERjtBQWFEOztBQUVESCxjQUFjLENBQUNPLFVBQWYsR0FBNEI7QUFDMUJOLEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVDLEtBQVYsQ0FBZ0JDLFVBREM7QUFFMUJSLEVBQUFBLFNBQVMsRUFBRU0sbUJBQVVDLEtBQVYsQ0FBZ0JDLFVBRkQ7QUFHMUJQLEVBQUFBLFlBQVksRUFBRUssbUJBQVVHLE1BSEU7QUFJMUJQLEVBQUFBLFdBQVcsRUFBRUksbUJBQVVJLElBSkc7QUFLMUJQLEVBQUFBLGFBQWEsRUFBRUcsbUJBQVVJO0FBTEMsQ0FBNUI7ZUFRZVosYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCBKcFRhYmxlTWFpbiBmcm9tIFwiLi9KcFRhYmxlTWFpblwiO1xyXG5pbXBvcnQgU3RvcmVQcm92aWRlciBmcm9tIFwiLi9zdG9yZS9zdG9yZVwiXHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWRuZFwiO1xyXG5pbXBvcnQgSFRNTDVCYWNrZW5kIGZyb20gXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiO1xyXG5cclxuXHJcbi8qKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBEZWZhdWx0IFRhYmxlIHNldHRpbmcgU1RBUlRcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbmNvbnN0IGRlZmF1bHRUYWJsZVNldHRpbmcgPSB7XHJcbiAgdGFibGVOYW1lOiBcIkpwVGFibGVcIixcclxuICBnbG9iYWxTZWFyY2g6IGZhbHNlLFxyXG4gIGNvbHVtbnNIaWRlU2hvd1N3aXRjaDogZmFsc2UsXHJcbiAgdGFibGVNZW51OiBmYWxzZSxcclxuICBtdWx0aVNlYXJjaDogZmFsc2UsXHJcbiAgaGFzRWRpdGluZzogZmFsc2UsXHJcbiAgaGFzRGVsZXRpbmc6IGZhbHNlLFxyXG4gIGRlbnNlUm93c1N3aXRjaDogZmFsc2VcclxufTtcclxuLyoqXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IERlZmF1bHQgVGFibGUgc2V0dGluZyBFTkRcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcblxyXG5mdW5jdGlvbiBKcE11aURhdGF0YWJsZSh7XHJcbiAgY29sdW1ucyA9IFtdLFxyXG4gIHVzZXJzRGF0YSA9IFtdLFxyXG4gIHRhYmxlU2V0dGluZyA9IHsgLi4uZGVmYXVsdFRhYmxlU2V0dGluZyB9LFxyXG4gIG9uRWRpdENsaWNrID0gKCkgPT4geyB9LFxyXG4gIG9uUmVtb3ZlQ2xpY2sgPSAoKSA9PiB7IH1cclxufSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0b3JlUHJvdmlkZXI+XHJcbiAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxKcFRhYmxlTWFpblxyXG4gICAgICAgICAgdXNlcnNEYXRhPXt1c2Vyc0RhdGF9XHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgb25FZGl0Q2xpY2s9e29uRWRpdENsaWNrfVxyXG4gICAgICAgICAgb25SZW1vdmVDbGljaz17b25SZW1vdmVDbGlja31cclxuICAgICAgICAgIHRhYmxlU2V0dGluZz17dGFibGVTZXR0aW5nfSAvPlxyXG4gICAgICA8L0RuZFByb3ZpZGVyPlxyXG4gICAgPC9TdG9yZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbkpwTXVpRGF0YXRhYmxlLnByb3RvdHlwZXMgPSB7XHJcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgdXNlcnNEYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICB0YWJsZVNldHRpbmc6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgb25FZGl0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uUmVtb3ZlQ2xpY2s6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKcE11aURhdGF0YWJsZTtcclxuIl19