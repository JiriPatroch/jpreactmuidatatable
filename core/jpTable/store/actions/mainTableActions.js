"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Types = _interopRequireWildcard(require("./../actions/types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useMainTableActions = function useMainTableActions(dispatch) {
  var setOrder = function setOrder(isDesc) {
    if (isDesc) {
      dispatch({
        type: Types.SET_ORDER,
        payload: "asc"
      });
    } else {
      dispatch({
        type: Types.SET_ORDER,
        payload: "desc"
      });
    }
  };

  var setOrderBy = function setOrderBy(property) {
    dispatch({
      type: Types.SET_ORDER_BY,
      payload: property
    });
  };

  var setSelected = function setSelected(data) {
    dispatch({
      type: Types.SET_SELECTED,
      payload: data
    });
  };

  var setPage = function setPage(pageNumber) {
    dispatch({
      type: Types.SET_PAGE,
      payload: pageNumber
    });
  };

  var setDense = function setDense(dense) {
    dispatch({
      type: Types.SET_DENSE,
      payload: dense
    });
  };

  var setRowsPerPage = function setRowsPerPage(RowsPerPage) {
    dispatch({
      type: Types.SET_ROWS_PER_PAGE,
      payload: RowsPerPage
    });
  };

  var setSearchTerm = function setSearchTerm(searchTerm) {
    dispatch({
      type: Types.SET_SEARCH_TERM,
      payload: searchTerm
    });
  };

  var setIsSearching = function setIsSearching(isSearching) {
    dispatch({
      type: Types.SET_IS_SEARCHING,
      payload: isSearching
    });
  };

  var setIsSearchingMulti = function setIsSearchingMulti(isSearchingMulti) {
    dispatch({
      type: Types.SET_IS_SEARCHING_MULTI,
      payload: isSearchingMulti
    });
  };

  var setMultiSearchTerms = function setMultiSearchTerms(searchTerms) {
    dispatch({
      type: Types.SET_MULTI_SEARCH_TERMS,
      payload: searchTerms
    });
  };

  var setIsExactly = function setIsExactly(e) {
    if (e.target.checked === true) {
      dispatch({
        type: Types.SET_IS_EXACTLY,
        payload: _defineProperty({}, e.target.name, true)
      });
    } else {
      dispatch({
        type: Types.SET_IS_EXACTLY,
        payload: _defineProperty({}, e.target.name, false)
      });
    }
  };

  return {
    setOrder: setOrder,
    setOrderBy: setOrderBy,
    setSelected: setSelected,
    setPage: setPage,
    setDense: setDense,
    setRowsPerPage: setRowsPerPage,
    setSearchTerm: setSearchTerm,
    setIsSearching: setIsSearching,
    setIsSearchingMulti: setIsSearchingMulti,
    setMultiSearchTerms: setMultiSearchTerms,
    setIsExactly: setIsExactly
  };
};

var _default = useMainTableActions;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2pwVGFibGUvc3RvcmUvYWN0aW9ucy9tYWluVGFibGVBY3Rpb25zLmpzIl0sIm5hbWVzIjpbInVzZU1haW5UYWJsZUFjdGlvbnMiLCJkaXNwYXRjaCIsInNldE9yZGVyIiwiaXNEZXNjIiwidHlwZSIsIlR5cGVzIiwiU0VUX09SREVSIiwicGF5bG9hZCIsInNldE9yZGVyQnkiLCJwcm9wZXJ0eSIsIlNFVF9PUkRFUl9CWSIsInNldFNlbGVjdGVkIiwiZGF0YSIsIlNFVF9TRUxFQ1RFRCIsInNldFBhZ2UiLCJwYWdlTnVtYmVyIiwiU0VUX1BBR0UiLCJzZXREZW5zZSIsImRlbnNlIiwiU0VUX0RFTlNFIiwic2V0Um93c1BlclBhZ2UiLCJSb3dzUGVyUGFnZSIsIlNFVF9ST1dTX1BFUl9QQUdFIiwic2V0U2VhcmNoVGVybSIsInNlYXJjaFRlcm0iLCJTRVRfU0VBUkNIX1RFUk0iLCJzZXRJc1NlYXJjaGluZyIsImlzU2VhcmNoaW5nIiwiU0VUX0lTX1NFQVJDSElORyIsInNldElzU2VhcmNoaW5nTXVsdGkiLCJpc1NlYXJjaGluZ011bHRpIiwiU0VUX0lTX1NFQVJDSElOR19NVUxUSSIsInNldE11bHRpU2VhcmNoVGVybXMiLCJzZWFyY2hUZXJtcyIsIlNFVF9NVUxUSV9TRUFSQ0hfVEVSTVMiLCJzZXRJc0V4YWN0bHkiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsIlNFVF9JU19FWEFDVExZIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUdBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsUUFBUSxFQUFJO0FBR3BDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLE1BQU0sRUFBSTtBQUN2QixRQUFJQSxNQUFKLEVBQVk7QUFDUkYsTUFBQUEsUUFBUSxDQUFDO0FBQ0xHLFFBQUFBLElBQUksRUFBRUMsS0FBSyxDQUFDQyxTQURQO0FBRUxDLFFBQUFB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aEMsUUFBQUEsT0FBTyxzQkFDRjZCLENBQUMsQ0FBQ0MsTUFBRixDQUFTRyxJQURQLEVBQ2MsSUFEZDtBQUZGLE9BQUQsQ0FBUjtBQU1ILEtBUEQsTUFPTztBQUNIdkMsTUFBQUEsUUFBUSxDQUFDO0FBQ0xHLFFBQUFBLElBQUksRUFBRUMsS0FBSyxDQUFDa0MsY0FEUDtBQUVMaEMsUUFBQUEsT0FBTyxzQkFDRjZCLENBQUMsQ0FBQ0MsTUFBRixDQUFTRyxJQURQLEVBQ2MsS0FEZDtBQUZGLE9BQUQsQ0FBUjtBQU1IO0FBQ0osR0FqQkQ7O0FBbUJBLFNBQU87QUFBRXRDLElBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZTSxJQUFBQSxVQUFVLEVBQVZBLFVBQVo7QUFBd0JHLElBQUFBLFdBQVcsRUFBWEEsV0FBeEI7QUFBcUNHLElBQUFBLE9BQU8sRUFBUEEsT0FBckM7QUFBOENHLElBQUFBLFFBQVEsRUFBUkEsUUFBOUM7QUFBd0RHLElBQUFBLGNBQWMsRUFBZEEsY0FBeEQ7QUFBd0VHLElBQUFBLGFBQWEsRUFBYkEsYUFBeEU7QUFBdUZHLElBQUFBLGNBQWMsRUFBZEEsY0FBdkY7QUFBdUdHLElBQUFBLG1CQUFtQixFQUFuQkEsbUJBQXZHO0FBQTRIRyxJQUFBQSxtQkFBbUIsRUFBbkJBLG1CQUE1SDtBQUFpSkcsSUFBQUEsWUFBWSxFQUFaQTtBQUFqSixHQUFQO0FBQ0gsQ0FyR0Q7O2VBdUdlbkMsbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUeXBlcyBmcm9tIFwiLi8uLi9hY3Rpb25zL3R5cGVzXCI7XHJcblxyXG5cclxuY29uc3QgdXNlTWFpblRhYmxlQWN0aW9ucyA9IGRpc3BhdGNoID0+IHtcclxuXHJcblxyXG4gICAgY29uc3Qgc2V0T3JkZXIgPSBpc0Rlc2MgPT4ge1xyXG4gICAgICAgIGlmIChpc0Rlc2MpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVHlwZXMuU0VUX09SREVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogXCJhc2NcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFR5cGVzLlNFVF9PUkRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IFwiZGVzY1wiXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRPcmRlckJ5ID0gcHJvcGVydHkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVHlwZXMuU0VUX09SREVSX0JZLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBwcm9wZXJ0eVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0U2VsZWN0ZWQgPSBkYXRhID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFR5cGVzLlNFVF9TRUxFQ1RFRCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UGFnZSA9IHBhZ2VOdW1iZXIgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVHlwZXMuU0VUX1BBR0UsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHBhZ2VOdW1iZXJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldERlbnNlID0gZGVuc2UgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVHlwZXMuU0VUX0RFTlNFLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkZW5zZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Um93c1BlclBhZ2UgPSBSb3dzUGVyUGFnZSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBUeXBlcy5TRVRfUk9XU19QRVJfUEFHRSxcclxuICAgICAgICAgICAgcGF5bG9hZDogUm93c1BlclBhZ2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFNlYXJjaFRlcm0gPSBzZWFyY2hUZXJtID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFR5cGVzLlNFVF9TRUFSQ0hfVEVSTSxcclxuICAgICAgICAgICAgcGF5bG9hZDogc2VhcmNoVGVybVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0SXNTZWFyY2hpbmcgPSBpc1NlYXJjaGluZyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBUeXBlcy5TRVRfSVNfU0VBUkNISU5HLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBpc1NlYXJjaGluZ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0SXNTZWFyY2hpbmdNdWx0aSA9IGlzU2VhcmNoaW5nTXVsdGkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVHlwZXMuU0VUX0lTX1NFQVJDSElOR19NVUxUSSxcclxuICAgICAgICAgICAgcGF5bG9hZDogaXNTZWFyY2hpbmdNdWx0aVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0TXVsdGlTZWFyY2hUZXJtcyA9IHNlYXJjaFRlcm1zID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFR5cGVzLlNFVF9NVUxUSV9TRUFSQ0hfVEVSTVMsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHNlYXJjaFRlcm1zXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRJc0V4YWN0bHkgPSBlID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVHlwZXMuU0VUX0lTX0VYQUNUTFksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFR5cGVzLlNFVF9JU19FWEFDVExZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc2V0T3JkZXIsIHNldE9yZGVyQnksIHNldFNlbGVjdGVkLCBzZXRQYWdlLCBzZXREZW5zZSwgc2V0Um93c1BlclBhZ2UsIHNldFNlYXJjaFRlcm0sIHNldElzU2VhcmNoaW5nLCBzZXRJc1NlYXJjaGluZ011bHRpLCBzZXRNdWx0aVNlYXJjaFRlcm1zLCBzZXRJc0V4YWN0bHkgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTWFpblRhYmxlQWN0aW9ucztcclxuXHJcblxyXG5cclxuIl19