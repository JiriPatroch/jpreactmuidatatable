"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MainTableContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainTableReducer = require("./reducers/mainTableReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialState = {
  columnsData: [],
  order: "asc",
  orderBy: "id",
  selected: [],
  page: 0,
  dense: true,
  rowsPerPage: 5,
  searchTerm: "",
  isSearching: false,
  isSearchingMulti: false,
  multiSearchTerms: {},
  isExactly: {}
};

var MainTableContext = _react.default.createContext();

exports.MainTableContext = MainTableContext;

var StoreProvider = function StoreProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = _react.default.useReducer(_mainTableReducer.mainTableReducer, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return _react.default.createElement(MainTableContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};

StoreProvider.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired
};
var _default = StoreProvider;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2pwVGFibGUvc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY29sdW1uc0RhdGEiLCJvcmRlciIsIm9yZGVyQnkiLCJzZWxlY3RlZCIsInBhZ2UiLCJkZW5zZSIsInJvd3NQZXJQYWdlIiwic2VhcmNoVGVybSIsImlzU2VhcmNoaW5nIiwiaXNTZWFyY2hpbmdNdWx0aSIsIm11bHRpU2VhcmNoVGVybXMiLCJpc0V4YWN0bHkiLCJNYWluVGFibGVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiU3RvcmVQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsIm1haW5UYWJsZVJlZHVjZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsRUFBQUEsV0FBVyxFQUFFLEVBREk7QUFFakJDLEVBQUFBLEtBQUssRUFBRSxLQUZVO0FBR2pCQyxFQUFBQSxPQUFPLEVBQUUsSUFIUTtBQUlqQkMsRUFBQUEsUUFBUSxFQUFFLEVBSk87QUFLakJDLEVBQUFBLElBQUksRUFBRSxDQUxXO0FBTWpCQyxFQUFBQSxLQUFLLEVBQUUsSUFOVTtBQU9qQkMsRUFBQUEsV0FBVyxFQUFFLENBUEk7QUFRakJDLEVBQUFBLFVBQVUsRUFBRSxFQVJLO0FBU2pCQyxFQUFBQSxXQUFXLEVBQUUsS0FUSTtBQVVqQkMsRUFBQUEsZ0JBQWdCLEVBQUUsS0FWRDtBQVdqQkMsRUFBQUEsZ0JBQWdCLEVBQUUsRUFYRDtBQVlqQkMsRUFBQUEsU0FBUyxFQUFFO0FBWk0sQ0FBckI7O0FBZU8sSUFBTUMsZ0JBQWdCLEdBQUdDLGVBQU1DLGFBQU4sRUFBekI7Ozs7QUFFUCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLDBCQUNWSCxlQUFNSSxVQUFOLENBQWlCQyxrQ0FBakIsRUFBbUNuQixZQUFuQyxDQURVO0FBQUE7QUFBQSxNQUM3Qm9CLEtBRDZCO0FBQUEsTUFDdEJDLFFBRHNCOztBQUdwQyxTQUNJLDZCQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLElBQUEsS0FBSyxFQUFFO0FBQUVELE1BQUFBLEtBQUssRUFBTEEsS0FBRjtBQUFTQyxNQUFBQSxRQUFRLEVBQVJBO0FBQVQ7QUFBbEMsS0FDS0osUUFETCxDQURKO0FBS0gsQ0FSRDs7QUFVQUQsYUFBYSxDQUFDTSxTQUFkLEdBQTBCO0FBQ3RCTCxFQUFBQSxRQUFRLEVBQUVNLG1CQUFVQyxTQUFWLENBQW9CLENBQzFCRCxtQkFBVUUsT0FBVixDQUFrQkYsbUJBQVVHLElBQTVCLENBRDBCLEVBRTFCSCxtQkFBVUcsSUFGZ0IsQ0FBcEIsRUFHUEM7QUFKbUIsQ0FBMUI7ZUFPZVgsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBtYWluVGFibGVSZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlcnMvbWFpblRhYmxlUmVkdWNlclwiXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjb2x1bW5zRGF0YTogW10sXHJcbiAgICBvcmRlcjogXCJhc2NcIixcclxuICAgIG9yZGVyQnk6IFwiaWRcIixcclxuICAgIHNlbGVjdGVkOiBbXSxcclxuICAgIHBhZ2U6IDAsXHJcbiAgICBkZW5zZTogdHJ1ZSxcclxuICAgIHJvd3NQZXJQYWdlOiA1LFxyXG4gICAgc2VhcmNoVGVybTogXCJcIixcclxuICAgIGlzU2VhcmNoaW5nOiBmYWxzZSxcclxuICAgIGlzU2VhcmNoaW5nTXVsdGk6IGZhbHNlLFxyXG4gICAgbXVsdGlTZWFyY2hUZXJtczoge30sXHJcbiAgICBpc0V4YWN0bHk6IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVGFibGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgU3RvcmVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihtYWluVGFibGVSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5UYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9NYWluVGFibGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblN0b3JlUHJvdmlkZXIucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcclxuICAgICAgICBQcm9wVHlwZXMubm9kZVxyXG4gICAgXSkuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVQcm92aWRlcjsiXX0=