"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainTableReducer = mainTableReducer;

var Types = _interopRequireWildcard(require("./../actions/types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mainTableReducer(state, action) {
  switch (action.type) {
    case Types.SET_ORDER:
      return _objectSpread({}, state, {
        order: action.payload
      });

    case Types.SET_ORDER_BY:
      return _objectSpread({}, state, {
        orderBy: action.payload
      });

    case Types.SET_SELECTED:
      return _objectSpread({}, state, {
        selected: action.payload
      });

    case Types.SET_PAGE:
      return _objectSpread({}, state, {
        page: action.payload
      });

    case Types.SET_DENSE:
      return _objectSpread({}, state, {
        dense: action.payload
      });

    case Types.SET_ROWS_PER_PAGE:
      return _objectSpread({}, state, {
        rowsPerPage: action.payload
      });

    case Types.SET_SEARCH_TERM:
      return _objectSpread({}, state, {
        searchTerm: action.payload
      });

    case Types.SET_IS_SEARCHING:
      return _objectSpread({}, state, {
        isSearching: action.payload
      });

    case Types.SET_IS_SEARCHING_MULTI:
      return _objectSpread({}, state, {
        isSearchingMulti: action.payload
      });

    case Types.SET_MULTI_SEARCH_TERMS:
      return _objectSpread({}, state, {
        multiSearchTerms: action.payload
      });

    case Types.SET_IS_EXACTLY:
      return _objectSpread({}, state, {
        isExactly: action.payload
      });

    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2pwVGFibGUvc3RvcmUvcmVkdWNlcnMvbWFpblRhYmxlUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJtYWluVGFibGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVHlwZXMiLCJTRVRfT1JERVIiLCJvcmRlciIsInBheWxvYWQiLCJTRVRfT1JERVJfQlkiLCJvcmRlckJ5IiwiU0VUX1NFTEVDVEVEIiwic2VsZWN0ZWQiLCJTRVRfUEFHRSIsInBhZ2UiLCJTRVRfREVOU0UiLCJkZW5zZSIsIlNFVF9ST1dTX1BFUl9QQUdFIiwicm93c1BlclBhZ2UiLCJTRVRfU0VBUkNIX1RFUk0iLCJzZWFyY2hUZXJtIiwiU0VUX0lTX1NFQVJDSElORyIsImlzU2VhcmNoaW5nIiwiU0VUX0lTX1NFQVJDSElOR19NVUxUSSIsImlzU2VhcmNoaW5nTXVsdGkiLCJTRVRfTVVMVElfU0VBUkNIX1RFUk1TIiwibXVsdGlTZWFyY2hUZXJtcyIsIlNFVF9JU19FWEFDVExZIiwiaXNFeGFjdGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVPLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsTUFBakMsRUFBeUM7QUFDNUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MsS0FBSyxDQUFDQyxTQUFYO0FBQ0ksK0JBQVlKLEtBQVo7QUFBbUJLLFFBQUFBLEtBQUssRUFBRUosTUFBTSxDQUFDSztBQUFqQzs7QUFDSixTQUFLSCxLQUFLLENBQUNJLFlBQVg7QUFDSSwrQkFBWVAsS0FBWjtBQUFtQlEsUUFBQUEsT0FBTyxFQUFFUCxNQUFNLENBQUNLO0FBQW5DOztBQUNKLFNBQUtILEtBQUssQ0FBQ00sWUFBWDtBQUNJLCtCQUFZVCxLQUFaO0FBQW1CVSxRQUFBQSxRQUFRLEVBQUVULE1BQU0sQ0FBQ0s7QUFBcEM7O0FBQ0osU0FBS0gsS0FBSyxDQUFDUSxRQUFYO0FBQ0ksK0JBQVlYLEtBQVo7QUFBbUJZLFFBQUFBLElBQUksRUFBRVgsTUFBTSxDQUFDSztBQUFoQzs7QUFDSixTQUFLSCxLQUFLLENBQUNVLFNBQVg7QUFDSSwrQkFBWWIsS0FBWjtBQUFtQmMsUUFBQUEsS0FBSyxFQUFFYixNQUFNLENBQUNLO0FBQWpDOztBQUNKLFNBQUtILEtBQUssQ0FBQ1ksaUJBQVg7QUFDSSwrQkFBWWYsS0FBWjtBQUFtQmdCLFFBQUFBLFdBQVcsRUFBRWYsTUFBTSxDQUFDSztBQUF2Qzs7QUFDSixTQUFLSCxLQUFLLENBQUNjLGVBQVg7QUFDSSwrQkFBWWpCLEtBQVo7QUFBbUJrQixRQUFBQSxVQUFVLEVBQUVqQixNQUFNLENBQUNLO0FBQXRDOztBQUNKLFNBQUtILEtBQUssQ0FBQ2dCLGdCQUFYO0FBQ0ksK0JBQVluQixLQUFaO0FBQW1Cb0IsUUFBQUEsV0FBVyxFQUFFbkIsTUFBTSxDQUFDSztBQUF2Qzs7QUFDSixTQUFLSCxLQUFLLENBQUNrQixzQkFBWDtBQUNJLCtCQUFZckIsS0FBWjtBQUFtQnNCLFFBQUFBLGdCQUFnQixFQUFFckIsTUFBTSxDQUFDSztBQUE1Qzs7QUFDSixTQUFLSCxLQUFLLENBQUNvQixzQkFBWDtBQUNJLCtCQUFZdkIsS0FBWjtBQUFtQndCLFFBQUFBLGdCQUFnQixFQUFFdkIsTUFBTSxDQUFDSztBQUE1Qzs7QUFDSixTQUFLSCxLQUFLLENBQUNzQixjQUFYO0FBQ0ksK0JBQVl6QixLQUFaO0FBQW1CMEIsUUFBQUEsU0FBUyxFQUFFekIsTUFBTSxDQUFDSztBQUFyQzs7QUFDSjtBQUNJLGFBQU9OLEtBQVA7QUF4QlI7QUEwQkgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUeXBlcyBmcm9tIFwiLi8uLi9hY3Rpb25zL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFpblRhYmxlUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUeXBlcy5TRVRfT1JERVI6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvcmRlcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIFR5cGVzLlNFVF9PUkRFUl9CWTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG9yZGVyQnk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgY2FzZSBUeXBlcy5TRVRfU0VMRUNURUQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzZWxlY3RlZDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIFR5cGVzLlNFVF9QQUdFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGFnZTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIFR5cGVzLlNFVF9ERU5TRTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRlbnNlOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgVHlwZXMuU0VUX1JPV1NfUEVSX1BBR0U6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByb3dzUGVyUGFnZTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIFR5cGVzLlNFVF9TRUFSQ0hfVEVSTTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlYXJjaFRlcm06IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgY2FzZSBUeXBlcy5TRVRfSVNfU0VBUkNISU5HOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNTZWFyY2hpbmc6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgY2FzZSBUeXBlcy5TRVRfSVNfU0VBUkNISU5HX01VTFRJOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNTZWFyY2hpbmdNdWx0aTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIFR5cGVzLlNFVF9NVUxUSV9TRUFSQ0hfVEVSTVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtdWx0aVNlYXJjaFRlcm1zOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgVHlwZXMuU0VUX0lTX0VYQUNUTFk6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0V4YWN0bHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59Il19