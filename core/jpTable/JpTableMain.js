"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _JpTableHead = _interopRequireDefault(require("./JpTableHead"));

var _JpTableToolbar = _interopRequireDefault(require("./JpTableToolbar"));

var _JpTableBody = _interopRequireDefault(require("./JpTableBody"));

var _JpTableExpansionPanel = _interopRequireDefault(require("./JpTableExpansionPanel"));

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _store = require("./store/store");

var _mainTableActions = _interopRequireDefault(require("./store/actions/mainTableActions"));

var _JpTableStyles = require("./styles/JpTableStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(_JpTableStyles.JpTableStyles);
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

function JpTableMain(_ref) {
  var columns = _ref.columns,
      usersData = _ref.usersData,
      _ref$tableSetting = _ref.tableSetting,
      tableSetting = _ref$tableSetting === void 0 ? _objectSpread({}, defaultTableSetting) : _ref$tableSetting,
      onEditClick = _ref.onEditClick,
      onRemoveClick = _ref.onRemoveClick;
  var classes = useStyles();

  var _React$useState = _react.default.useState(columns),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      columnsData = _React$useState2[0],
      setColumnsData = _React$useState2[1]; //context API START


  var _React$useContext = _react.default.useContext(_store.MainTableContext),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var order = state.order,
      orderBy = state.orderBy,
      selected = state.selected,
      page = state.page,
      dense = state.dense,
      rowsPerPage = state.rowsPerPage,
      searchTerm = state.searchTerm,
      isSearching = state.isSearching,
      isSearchingMulti = state.isSearchingMulti,
      multiSearchTerms = state.multiSearchTerms,
      isExactly = state.isExactly;

  var _useMainTableActions = (0, _mainTableActions.default)(dispatch),
      setOrder = _useMainTableActions.setOrder,
      setOrderBy = _useMainTableActions.setOrderBy,
      setSelected = _useMainTableActions.setSelected,
      setPage = _useMainTableActions.setPage,
      setDense = _useMainTableActions.setDense,
      setRowsPerPage = _useMainTableActions.setRowsPerPage,
      setSearchTerm = _useMainTableActions.setSearchTerm,
      setIsSearching = _useMainTableActions.setIsSearching,
      setIsSearchingMulti = _useMainTableActions.setIsSearchingMulti,
      setMultiSearchTerms = _useMainTableActions.setMultiSearchTerms,
      setIsExactly = _useMainTableActions.setIsExactly; //context API END


  function handleRequestSort(event, property) {
    var isDesc = orderBy === property && order === "desc";
    setOrder(isDesc);
    setOrderBy(property);
  }

  function handleClick(event, name) {
    var selectedIndex = selected.indexOf(name);
    var newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = usersData.map(function (n) {
        return n.id;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleChangeDense(event) {
    setDense(event.target.checked);
  }

  function handleHideShowColumn(columnObj) {
    var isItemInArray;
    columnsData.forEach(function (element) {
      if (element.id === columnObj.id) {
        isItemInArray = true;
      } else {
        return;
      }
    });

    if (isItemInArray) {
      setColumnsData(columnsData.filter(function (item) {
        return item.id !== columnObj.id;
      }));
    } else {
      setColumnsData([].concat(_toConsumableArray(columnsData), [columnObj]));
    }
  }

  function handleSearch(e) {
    setIsSearchingMulti(false);

    if (e.target.value !== null && e.target.value !== "") {
      setSearchTerm(e.target.value);
      setPage(0);
      setIsSearching(true);
    } else {
      setSearchTerm("");
      setIsSearching(false);
    }
  }

  function handleMultiSearch(e, colId) {
    setIsSearching(false);

    if (e.target.value !== null) {
      setMultiSearchTerms(_objectSpread({}, multiSearchTerms, _defineProperty({}, colId, e.target.value)));
      setPage(0);
      setIsSearchingMulti(true);
    } else {
      setMultiSearchTerms({});
      setIsSearchingMulti(false);
    }
  }

  function searchSwitch(term, data, dataArray) {
    if (isSearching) {
      return searchTermFullText(term, dataArray);
    } else if (isSearchingMulti) {
      return searchMultiTerms(data, dataArray);
    } else {
      return dataArray;
    }
  }

  function searchTermFullText(term, dataArray) {
    var filteredData = [];

    if (term !== null && term !== "") {
      dataArray.forEach(function (user) {
        columnsData.forEach(function (col) {
          if (user[col.id].toString().toLowerCase().includes(term.toString().toLowerCase())) {
            if (filteredData.findIndex(function (i) {
              return i.id === user.id;
            }) > -1) {
              return dataArray;
            } else {
              filteredData.push(user);
            }
          } else {
            return dataArray;
          }
        });
      });
      return filteredData;
    } else {
      return dataArray;
    }
  }

  function searchMultiTerms(data, dataArray) {
    var filtered = dataArray;
    columnsData.forEach(function (col) {
      if (data[col.id] !== null && data[col.id] !== "" && data[col.id] !== undefined) {
        filtered = filtered.filter(function (user) {
          return isExactly[col.id] ? user[col.id].toString().toLowerCase() === data[col.id].toString().toLowerCase() : user[col.id].toString().toLowerCase().includes(data[col.id].toString().toLowerCase());
        });
      }
    });
    return filtered;
  }

  function handleExactSearch(e, colId) {
    setIsExactly(e);
  }

  var moveCard = function moveCard(dragIndex, hoverIndex) {
    var dragCard = columnsData[dragIndex];
    setColumnsData((0, _immutabilityHelper.default)(columnsData, {
      $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
    }));
  };

  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_core.Paper, {
    className: classes.paper
  }, _react.default.createElement(_JpTableToolbar.default, {
    columns: columnsData,
    tableSetting: tableSetting,
    numSelected: selected.length,
    handleHideShowColumn: handleHideShowColumn,
    handleSearch: handleSearch
  }), _react.default.createElement(_JpTableExpansionPanel.default, {
    columnsData: columnsData,
    tableSetting: tableSetting,
    handleMultiSearch: handleMultiSearch,
    handleExactSearch: handleExactSearch
  }), _react.default.createElement("div", {
    className: classes.tableWrapper
  }, _react.default.createElement(_core.Table, {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    size: dense ? "small" : "medium"
  }, _react.default.createElement(_JpTableHead.default, {
    columns: columnsData,
    moveCard: moveCard,
    numSelected: selected.length,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    rowCount: usersData.length,
    tableSetting: tableSetting
  }), _react.default.createElement(_JpTableBody.default, {
    columnsData: columnsData,
    tableSetting: tableSetting,
    usersData: usersData,
    searchSwitch: searchSwitch,
    handleClick: handleClick,
    onEditClick: onEditClick,
    onRemoveClick: onRemoveClick
  }))), _react.default.createElement(_core.TablePagination, {
    rowsPerPageOptions: [5, 10, 25],
    component: "div",
    count: isSearching ? searchTermFullText(searchTerm, usersData).length : isSearchingMulti ? searchMultiTerms(multiSearchTerms, usersData).length : usersData.length,
    rowsPerPage: rowsPerPage,
    page: page,
    backIconButtonProps: {
      "aria-label": "previous page"
    },
    nextIconButtonProps: {
      "aria-label": "next page"
    },
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  })), tableSetting.denseRowsSwitch ? _react.default.createElement(_core.FormControlLabel, {
    control: _react.default.createElement(_core.Switch, {
      checked: dense,
      onChange: handleChangeDense
    }),
    label: "Dense padding"
  }) : null);
}

JpTableMain.prototypes = {
  columns: _propTypes.default.array.isRequired,
  usersData: _propTypes.default.array.isRequired,
  tableSetting: _propTypes.default.object,
  onEditClick: _propTypes.default.func,
  onRemoveClick: _propTypes.default.func
};
var _default = JpTableMain;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2pwVGFibGUvSnBUYWJsZU1haW4uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiSnBUYWJsZVN0eWxlcyIsImRlZmF1bHRUYWJsZVNldHRpbmciLCJ0YWJsZU5hbWUiLCJnbG9iYWxTZWFyY2giLCJjb2x1bW5zSGlkZVNob3dTd2l0Y2giLCJ0YWJsZU1lbnUiLCJtdWx0aVNlYXJjaCIsImhhc0VkaXRpbmciLCJoYXNEZWxldGluZyIsImRlbnNlUm93c1N3aXRjaCIsIkpwVGFibGVNYWluIiwiY29sdW1ucyIsInVzZXJzRGF0YSIsInRhYmxlU2V0dGluZyIsIm9uRWRpdENsaWNrIiwib25SZW1vdmVDbGljayIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY29sdW1uc0RhdGEiLCJzZXRDb2x1bW5zRGF0YSIsInVzZUNvbnRleHQiLCJNYWluVGFibGVDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsIm9yZGVyIiwib3JkZXJCeSIsInNlbGVjdGVkIiwicGFnZSIsImRlbnNlIiwicm93c1BlclBhZ2UiLCJzZWFyY2hUZXJtIiwiaXNTZWFyY2hpbmciLCJpc1NlYXJjaGluZ011bHRpIiwibXVsdGlTZWFyY2hUZXJtcyIsImlzRXhhY3RseSIsInNldE9yZGVyIiwic2V0T3JkZXJCeSIsInNldFNlbGVjdGVkIiwic2V0UGFnZSIsInNldERlbnNlIiwic2V0Um93c1BlclBhZ2UiLCJzZXRTZWFyY2hUZXJtIiwic2V0SXNTZWFyY2hpbmciLCJzZXRJc1NlYXJjaGluZ011bHRpIiwic2V0TXVsdGlTZWFyY2hUZXJtcyIsInNldElzRXhhY3RseSIsImhhbmRsZVJlcXVlc3RTb3J0IiwiZXZlbnQiLCJwcm9wZXJ0eSIsImlzRGVzYyIsImhhbmRsZUNsaWNrIiwibmFtZSIsInNlbGVjdGVkSW5kZXgiLCJpbmRleE9mIiwibmV3U2VsZWN0ZWQiLCJjb25jYXQiLCJzbGljZSIsImxlbmd0aCIsImhhbmRsZVNlbGVjdEFsbENsaWNrIiwidGFyZ2V0IiwiY2hlY2tlZCIsIm5ld1NlbGVjdGVkcyIsIm1hcCIsIm4iLCJpZCIsImhhbmRsZUNoYW5nZVBhZ2UiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZURlbnNlIiwiaGFuZGxlSGlkZVNob3dDb2x1bW4iLCJjb2x1bW5PYmoiLCJpc0l0ZW1JbkFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJmaWx0ZXIiLCJpdGVtIiwiaGFuZGxlU2VhcmNoIiwiZSIsImhhbmRsZU11bHRpU2VhcmNoIiwiY29sSWQiLCJzZWFyY2hTd2l0Y2giLCJ0ZXJtIiwiZGF0YSIsImRhdGFBcnJheSIsInNlYXJjaFRlcm1GdWxsVGV4dCIsInNlYXJjaE11bHRpVGVybXMiLCJmaWx0ZXJlZERhdGEiLCJ1c2VyIiwiY29sIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmluZEluZGV4IiwiaSIsInB1c2giLCJmaWx0ZXJlZCIsInVuZGVmaW5lZCIsImhhbmRsZUV4YWN0U2VhcmNoIiwibW92ZUNhcmQiLCJkcmFnSW5kZXgiLCJob3ZlckluZGV4IiwiZHJhZ0NhcmQiLCIkc3BsaWNlIiwicm9vdCIsInBhcGVyIiwidGFibGVXcmFwcGVyIiwidGFibGUiLCJwcm90b3R5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU9BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFNBQVMsR0FBRyx3QkFBV0MsNEJBQVgsQ0FBbEI7QUFHQTs7Ozs7O0FBS0EsSUFBTUMsbUJBQW1CLEdBQUc7QUFDeEJDLEVBQUFBLFNBQVMsRUFBRSxTQURhO0FBRXhCQyxFQUFBQSxZQUFZLEVBQUUsS0FGVTtBQUd4QkMsRUFBQUEscUJBQXFCLEVBQUUsS0FIQztBQUl4QkMsRUFBQUEsU0FBUyxFQUFFLEtBSmE7QUFLeEJDLEVBQUFBLFdBQVcsRUFBRSxLQUxXO0FBTXhCQyxFQUFBQSxVQUFVLEVBQUUsS0FOWTtBQU94QkMsRUFBQUEsV0FBVyxFQUFFLEtBUFc7QUFReEJDLEVBQUFBLGVBQWUsRUFBRTtBQVJPLENBQTVCO0FBVUE7Ozs7OztBQU1BLFNBQVNDLFdBQVQsT0FNRztBQUFBLE1BTENDLE9BS0QsUUFMQ0EsT0FLRDtBQUFBLE1BSkNDLFNBSUQsUUFKQ0EsU0FJRDtBQUFBLCtCQUhDQyxZQUdEO0FBQUEsTUFIQ0EsWUFHRCxvREFIcUJaLG1CQUdyQjtBQUFBLE1BRkNhLFdBRUQsUUFGQ0EsV0FFRDtBQUFBLE1BRENDLGFBQ0QsUUFEQ0EsYUFDRDtBQUNDLE1BQU1DLE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7O0FBREQsd0JBRXVDa0IsZUFBTUMsUUFBTixDQUFlUCxPQUFmLENBRnZDO0FBQUE7QUFBQSxNQUVRUSxXQUZSO0FBQUEsTUFFcUJDLGNBRnJCLHdCQUlDOzs7QUFKRCwwQkFLNkJILGVBQU1JLFVBQU4sQ0FBaUJDLHVCQUFqQixDQUw3QjtBQUFBLE1BS1NDLEtBTFQscUJBS1NBLEtBTFQ7QUFBQSxNQUtnQkMsUUFMaEIscUJBS2dCQSxRQUxoQjs7QUFBQSxNQU1TQyxLQU5ULEdBT3VERixLQVB2RCxDQU1TRSxLQU5UO0FBQUEsTUFNZ0JDLE9BTmhCLEdBT3VESCxLQVB2RCxDQU1nQkcsT0FOaEI7QUFBQSxNQU15QkMsUUFOekIsR0FPdURKLEtBUHZELENBTXlCSSxRQU56QjtBQUFBLE1BTW1DQyxJQU5uQyxHQU91REwsS0FQdkQsQ0FNbUNLLElBTm5DO0FBQUEsTUFNeUNDLEtBTnpDLEdBT3VETixLQVB2RCxDQU15Q00sS0FOekM7QUFBQSxNQU1nREMsV0FOaEQsR0FPdURQLEtBUHZELENBTWdETyxXQU5oRDtBQUFBLE1BTTZEQyxVQU43RCxHQU91RFIsS0FQdkQsQ0FNNkRRLFVBTjdEO0FBQUEsTUFNeUVDLFdBTnpFLEdBT3VEVCxLQVB2RCxDQU15RVMsV0FOekU7QUFBQSxNQU9LQyxnQkFQTCxHQU91RFYsS0FQdkQsQ0FPS1UsZ0JBUEw7QUFBQSxNQU91QkMsZ0JBUHZCLEdBT3VEWCxLQVB2RCxDQU91QlcsZ0JBUHZCO0FBQUEsTUFPeUNDLFNBUHpDLEdBT3VEWixLQVB2RCxDQU95Q1ksU0FQekM7O0FBQUEsNkJBU2dGLCtCQUFvQlgsUUFBcEIsQ0FUaEY7QUFBQSxNQVFTWSxRQVJULHdCQVFTQSxRQVJUO0FBQUEsTUFRbUJDLFVBUm5CLHdCQVFtQkEsVUFSbkI7QUFBQSxNQVErQkMsV0FSL0Isd0JBUStCQSxXQVIvQjtBQUFBLE1BUTRDQyxPQVI1Qyx3QkFRNENBLE9BUjVDO0FBQUEsTUFRcURDLFFBUnJELHdCQVFxREEsUUFSckQ7QUFBQSxNQVErREMsY0FSL0Qsd0JBUStEQSxjQVIvRDtBQUFBLE1BUStFQyxhQVIvRSx3QkFRK0VBLGFBUi9FO0FBQUEsTUFTS0MsY0FUTCx3QkFTS0EsY0FUTDtBQUFBLE1BU3FCQyxtQkFUckIsd0JBU3FCQSxtQkFUckI7QUFBQSxNQVMwQ0MsbUJBVDFDLHdCQVMwQ0EsbUJBVDFDO0FBQUEsTUFTK0RDLFlBVC9ELHdCQVMrREEsWUFUL0QsRUFVQzs7O0FBRUEsV0FBU0MsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDQyxRQUFsQyxFQUE0QztBQUN4QyxRQUFNQyxNQUFNLEdBQUd4QixPQUFPLEtBQUt1QixRQUFaLElBQXdCeEIsS0FBSyxLQUFLLE1BQWpEO0FBQ0FXLElBQUFBLFFBQVEsQ0FBQ2MsTUFBRCxDQUFSO0FBQ0FiLElBQUFBLFVBQVUsQ0FBQ1ksUUFBRCxDQUFWO0FBQ0g7O0FBRUQsV0FBU0UsV0FBVCxDQUFxQkgsS0FBckIsRUFBNEJJLElBQTVCLEVBQWtDO0FBQzlCLFFBQU1DLGFBQWEsR0FBRzFCLFFBQVEsQ0FBQzJCLE9BQVQsQ0FBaUJGLElBQWpCLENBQXRCO0FBQ0EsUUFBSUcsV0FBVyxHQUFHLEVBQWxCOztBQUVBLFFBQUlGLGFBQWEsS0FBSyxDQUFDLENBQXZCLEVBQTBCO0FBQ3RCRSxNQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ0MsTUFBWixDQUFtQjdCLFFBQW5CLEVBQTZCeUIsSUFBN0IsQ0FBZDtBQUNILEtBRkQsTUFFTyxJQUFJQyxhQUFhLEtBQUssQ0FBdEIsRUFBeUI7QUFDNUJFLE1BQUFBLFdBQVcsR0FBR0EsV0FBVyxDQUFDQyxNQUFaLENBQW1CN0IsUUFBUSxDQUFDOEIsS0FBVCxDQUFlLENBQWYsQ0FBbkIsQ0FBZDtBQUNILEtBRk0sTUFFQSxJQUFJSixhQUFhLEtBQUsxQixRQUFRLENBQUMrQixNQUFULEdBQWtCLENBQXhDLEVBQTJDO0FBQzlDSCxNQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ0MsTUFBWixDQUFtQjdCLFFBQVEsQ0FBQzhCLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLENBQUMsQ0FBbkIsQ0FBbkIsQ0FBZDtBQUNILEtBRk0sTUFFQSxJQUFJSixhQUFhLEdBQUcsQ0FBcEIsRUFBdUI7QUFDMUJFLE1BQUFBLFdBQVcsR0FBR0EsV0FBVyxDQUFDQyxNQUFaLENBQ1Y3QixRQUFRLENBQUM4QixLQUFULENBQWUsQ0FBZixFQUFrQkosYUFBbEIsQ0FEVSxFQUVWMUIsUUFBUSxDQUFDOEIsS0FBVCxDQUFlSixhQUFhLEdBQUcsQ0FBL0IsQ0FGVSxDQUFkO0FBSUg7O0FBRURmLElBQUFBLFdBQVcsQ0FBQ2lCLFdBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVNJLG9CQUFULENBQThCWCxLQUE5QixFQUFxQztBQUNqQyxRQUFJQSxLQUFLLENBQUNZLE1BQU4sQ0FBYUMsT0FBakIsRUFBMEI7QUFDdEIsVUFBTUMsWUFBWSxHQUFHbEQsU0FBUyxDQUFDbUQsR0FBVixDQUFjLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLEVBQU47QUFBQSxPQUFmLENBQXJCO0FBQ0EzQixNQUFBQSxXQUFXLENBQUN3QixZQUFELENBQVg7QUFDQTtBQUNIOztBQUNEeEIsSUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVM0QixnQkFBVCxDQUEwQmxCLEtBQTFCLEVBQWlDbUIsT0FBakMsRUFBMEM7QUFDdEM1QixJQUFBQSxPQUFPLENBQUM0QixPQUFELENBQVA7QUFDSDs7QUFFRCxXQUFTQyx1QkFBVCxDQUFpQ3BCLEtBQWpDLEVBQXdDO0FBQ3BDUCxJQUFBQSxjQUFjLENBQUMsQ0FBQ08sS0FBSyxDQUFDWSxNQUFOLENBQWFTLEtBQWYsQ0FBZDtBQUNBOUIsSUFBQUEsT0FBTyxDQUFDLENBQUQsQ0FBUDtBQUNIOztBQUVELFdBQVMrQixpQkFBVCxDQUEyQnRCLEtBQTNCLEVBQWtDO0FBQzlCUixJQUFBQSxRQUFRLENBQUNRLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxPQUFkLENBQVI7QUFDSDs7QUFFRCxXQUFTVSxvQkFBVCxDQUE4QkMsU0FBOUIsRUFBeUM7QUFDckMsUUFBSUMsYUFBSjtBQUVBdEQsSUFBQUEsV0FBVyxDQUFDdUQsT0FBWixDQUFvQixVQUFBQyxPQUFPLEVBQUk7QUFDM0IsVUFBSUEsT0FBTyxDQUFDVixFQUFSLEtBQWVPLFNBQVMsQ0FBQ1AsRUFBN0IsRUFBaUM7QUFDN0JRLFFBQUFBLGFBQWEsR0FBRyxJQUFoQjtBQUNILE9BRkQsTUFFTztBQUNIO0FBQ0g7QUFDSixLQU5EOztBQVFBLFFBQUlBLGFBQUosRUFBbUI7QUFDZnJELE1BQUFBLGNBQWMsQ0FBQ0QsV0FBVyxDQUFDeUQsTUFBWixDQUFtQixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDWixFQUFMLEtBQVlPLFNBQVMsQ0FBQ1AsRUFBMUI7QUFBQSxPQUF2QixDQUFELENBQWQ7QUFDSCxLQUZELE1BRU87QUFDSDdDLE1BQUFBLGNBQWMsOEJBQUtELFdBQUwsSUFBa0JxRCxTQUFsQixHQUFkO0FBQ0g7QUFDSjs7QUFFRCxXQUFTTSxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUNyQm5DLElBQUFBLG1CQUFtQixDQUFDLEtBQUQsQ0FBbkI7O0FBQ0EsUUFBSW1DLENBQUMsQ0FBQ25CLE1BQUYsQ0FBU1MsS0FBVCxLQUFtQixJQUFuQixJQUEyQlUsQ0FBQyxDQUFDbkIsTUFBRixDQUFTUyxLQUFULEtBQW1CLEVBQWxELEVBQXNEO0FBQ2xEM0IsTUFBQUEsYUFBYSxDQUFDcUMsQ0FBQyxDQUFDbkIsTUFBRixDQUFTUyxLQUFWLENBQWI7QUFDQTlCLE1BQUFBLE9BQU8sQ0FBQyxDQUFELENBQVA7QUFDQUksTUFBQUEsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEtBSkQsTUFJTztBQUNIRCxNQUFBQSxhQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0FDLE1BQUFBLGNBQWMsQ0FBQyxLQUFELENBQWQ7QUFDSDtBQUNKOztBQUVELFdBQVNxQyxpQkFBVCxDQUEyQkQsQ0FBM0IsRUFBOEJFLEtBQTlCLEVBQXFDO0FBQ2pDdEMsSUFBQUEsY0FBYyxDQUFDLEtBQUQsQ0FBZDs7QUFDQSxRQUFJb0MsQ0FBQyxDQUFDbkIsTUFBRixDQUFTUyxLQUFULEtBQW1CLElBQXZCLEVBQTZCO0FBQ3pCeEIsTUFBQUEsbUJBQW1CLG1CQUNaWCxnQkFEWSxzQkFFZCtDLEtBRmMsRUFFTkYsQ0FBQyxDQUFDbkIsTUFBRixDQUFTUyxLQUZILEdBQW5CO0FBSUE5QixNQUFBQSxPQUFPLENBQUMsQ0FBRCxDQUFQO0FBQ0FLLE1BQUFBLG1CQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDSCxLQVBELE1BT087QUFDSEMsTUFBQUEsbUJBQW1CLENBQUMsRUFBRCxDQUFuQjtBQUNBRCxNQUFBQSxtQkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0g7QUFDSjs7QUFFRCxXQUFTc0MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLElBQTVCLEVBQWtDQyxTQUFsQyxFQUE2QztBQUN6QyxRQUFJckQsV0FBSixFQUFpQjtBQUNiLGFBQU9zRCxrQkFBa0IsQ0FBQ0gsSUFBRCxFQUFPRSxTQUFQLENBQXpCO0FBQ0gsS0FGRCxNQUVPLElBQUlwRCxnQkFBSixFQUFzQjtBQUN6QixhQUFPc0QsZ0JBQWdCLENBQUNILElBQUQsRUFBT0MsU0FBUCxDQUF2QjtBQUNILEtBRk0sTUFFQTtBQUNILGFBQU9BLFNBQVA7QUFDSDtBQUNKOztBQUVELFdBQVNDLGtCQUFULENBQTRCSCxJQUE1QixFQUFrQ0UsU0FBbEMsRUFBNkM7QUFDekMsUUFBSUcsWUFBWSxHQUFHLEVBQW5COztBQUVBLFFBQUlMLElBQUksS0FBSyxJQUFULElBQWlCQSxJQUFJLEtBQUssRUFBOUIsRUFBa0M7QUFDOUJFLE1BQUFBLFNBQVMsQ0FBQ1gsT0FBVixDQUFrQixVQUFBZSxJQUFJLEVBQUk7QUFDdEJ0RSxRQUFBQSxXQUFXLENBQUN1RCxPQUFaLENBQW9CLFVBQUFnQixHQUFHLEVBQUk7QUFDdkIsY0FDSUQsSUFBSSxDQUFDQyxHQUFHLENBQUN6QixFQUFMLENBQUosQ0FDSzBCLFFBREwsR0FFS0MsV0FGTCxHQUdLQyxRQUhMLENBR2NWLElBQUksQ0FBQ1EsUUFBTCxHQUFnQkMsV0FBaEIsRUFIZCxDQURKLEVBS0U7QUFDRSxnQkFBSUosWUFBWSxDQUFDTSxTQUFiLENBQXVCLFVBQUFDLENBQUM7QUFBQSxxQkFBSUEsQ0FBQyxDQUFDOUIsRUFBRixLQUFTd0IsSUFBSSxDQUFDeEIsRUFBbEI7QUFBQSxhQUF4QixJQUFnRCxDQUFDLENBQXJELEVBQXdEO0FBQ3BELHFCQUFPb0IsU0FBUDtBQUNILGFBRkQsTUFFTztBQUNIRyxjQUFBQSxZQUFZLENBQUNRLElBQWIsQ0FBa0JQLElBQWxCO0FBQ0g7QUFDSixXQVhELE1BV087QUFDSCxtQkFBT0osU0FBUDtBQUNIO0FBQ0osU0FmRDtBQWdCSCxPQWpCRDtBQWtCQSxhQUFPRyxZQUFQO0FBQ0gsS0FwQkQsTUFvQk87QUFDSCxhQUFPSCxTQUFQO0FBQ0g7QUFDSjs7QUFFRCxXQUFTRSxnQkFBVCxDQUEwQkgsSUFBMUIsRUFBZ0NDLFNBQWhDLEVBQTJDO0FBQ3ZDLFFBQUlZLFFBQVEsR0FBR1osU0FBZjtBQUVBbEUsSUFBQUEsV0FBVyxDQUFDdUQsT0FBWixDQUFvQixVQUFBZ0IsR0FBRyxFQUFJO0FBQ3ZCLFVBQ0lOLElBQUksQ0FBQ00sR0FBRyxDQUFDekIsRUFBTCxDQUFKLEtBQWlCLElBQWpCLElBQ0FtQixJQUFJLENBQUNNLEdBQUcsQ0FBQ3pCLEVBQUwsQ0FBSixLQUFpQixFQURqQixJQUVBbUIsSUFBSSxDQUFDTSxHQUFHLENBQUN6QixFQUFMLENBQUosS0FBaUJpQyxTQUhyQixFQUlFO0FBQ0VELFFBQUFBLFFBQVEsR0FBR0EsUUFBUSxDQUFDckIsTUFBVCxDQUFnQixVQUFBYSxJQUFJO0FBQUEsaUJBQzNCdEQsU0FBUyxDQUFDdUQsR0FBRyxDQUFDekIsRUFBTCxDQUFULEdBQ013QixJQUFJLENBQUNDLEdBQUcsQ0FBQ3pCLEVBQUwsQ0FBSixDQUFhMEIsUUFBYixHQUF3QkMsV0FBeEIsT0FDRlIsSUFBSSxDQUFDTSxHQUFHLENBQUN6QixFQUFMLENBQUosQ0FBYTBCLFFBQWIsR0FBd0JDLFdBQXhCLEVBRkosR0FHTUgsSUFBSSxDQUFDQyxHQUFHLENBQUN6QixFQUFMLENBQUosQ0FDRzBCLFFBREgsR0FFR0MsV0FGSCxHQUdHQyxRQUhILENBR1lULElBQUksQ0FBQ00sR0FBRyxDQUFDekIsRUFBTCxDQUFKLENBQWEwQixRQUFiLEdBQXdCQyxXQUF4QixFQUhaLENBSnFCO0FBQUEsU0FBcEIsQ0FBWDtBQVNIO0FBQ0osS0FoQkQ7QUFrQkEsV0FBT0ssUUFBUDtBQUNIOztBQUVELFdBQVNFLGlCQUFULENBQTJCcEIsQ0FBM0IsRUFBOEJFLEtBQTlCLEVBQXFDO0FBQ2pDbkMsSUFBQUEsWUFBWSxDQUFDaUMsQ0FBRCxDQUFaO0FBQ0g7O0FBRUQsTUFBTXFCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFNBQUQsRUFBWUMsVUFBWixFQUEyQjtBQUN4QyxRQUFJQyxRQUFRLEdBQUdwRixXQUFXLENBQUNrRixTQUFELENBQTFCO0FBQ0FqRixJQUFBQSxjQUFjLENBQ1YsaUNBQU9ELFdBQVAsRUFBb0I7QUFDaEJxRixNQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFDSCxTQUFELEVBQVksQ0FBWixDQUFELEVBQWlCLENBQUNDLFVBQUQsRUFBYSxDQUFiLEVBQWdCQyxRQUFoQixDQUFqQjtBQURPLEtBQXBCLENBRFUsQ0FBZDtBQUtILEdBUEQ7O0FBU0EsU0FDSTtBQUFLLElBQUEsU0FBUyxFQUFFdkYsT0FBTyxDQUFDeUY7QUFBeEIsS0FDSSw2QkFBQyxXQUFEO0FBQU8sSUFBQSxTQUFTLEVBQUV6RixPQUFPLENBQUMwRjtBQUExQixLQUNJLDZCQUFDLHVCQUFEO0FBQ0ksSUFBQSxPQUFPLEVBQUV2RixXQURiO0FBRUksSUFBQSxZQUFZLEVBQUVOLFlBRmxCO0FBR0ksSUFBQSxXQUFXLEVBQUVjLFFBQVEsQ0FBQytCLE1BSDFCO0FBSUksSUFBQSxvQkFBb0IsRUFBRWEsb0JBSjFCO0FBS0ksSUFBQSxZQUFZLEVBQUVPO0FBTGxCLElBREosRUFTSSw2QkFBQyw4QkFBRDtBQUNJLElBQUEsV0FBVyxFQUFFM0QsV0FEakI7QUFFSSxJQUFBLFlBQVksRUFBRU4sWUFGbEI7QUFHSSxJQUFBLGlCQUFpQixFQUFFbUUsaUJBSHZCO0FBSUksSUFBQSxpQkFBaUIsRUFBRW1CO0FBSnZCLElBVEosRUFnQkk7QUFBSyxJQUFBLFNBQVMsRUFBRW5GLE9BQU8sQ0FBQzJGO0FBQXhCLEtBQ0ksNkJBQUMsV0FBRDtBQUNJLElBQUEsU0FBUyxFQUFFM0YsT0FBTyxDQUFDNEYsS0FEdkI7QUFFSSx1QkFBZ0IsWUFGcEI7QUFHSSxJQUFBLElBQUksRUFBRS9FLEtBQUssR0FBRyxPQUFILEdBQWE7QUFINUIsS0FLSSw2QkFBQyxvQkFBRDtBQUNJLElBQUEsT0FBTyxFQUFFVixXQURiO0FBRUksSUFBQSxRQUFRLEVBQUVpRixRQUZkO0FBR0ksSUFBQSxXQUFXLEVBQUV6RSxRQUFRLENBQUMrQixNQUgxQjtBQUlJLElBQUEsZ0JBQWdCLEVBQUVDLG9CQUp0QjtBQUtJLElBQUEsYUFBYSxFQUFFWixpQkFMbkI7QUFNSSxJQUFBLFFBQVEsRUFBRW5DLFNBQVMsQ0FBQzhDLE1BTnhCO0FBT0ksSUFBQSxZQUFZLEVBQUU3QztBQVBsQixJQUxKLEVBY0ksNkJBQUMsb0JBQUQ7QUFDSSxJQUFBLFdBQVcsRUFBRU0sV0FEakI7QUFFSSxJQUFBLFlBQVksRUFBRU4sWUFGbEI7QUFHSSxJQUFBLFNBQVMsRUFBRUQsU0FIZjtBQUlJLElBQUEsWUFBWSxFQUFFc0UsWUFKbEI7QUFLSSxJQUFBLFdBQVcsRUFBRS9CLFdBTGpCO0FBTUksSUFBQSxXQUFXLEVBQUVyQyxXQU5qQjtBQU9JLElBQUEsYUFBYSxFQUFFQztBQVBuQixJQWRKLENBREosQ0FoQkosRUEwQ0ksNkJBQUMscUJBQUQ7QUFDSSxJQUFBLGtCQUFrQixFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBRHhCO0FBRUksSUFBQSxTQUFTLEVBQUMsS0FGZDtBQUdJLElBQUEsS0FBSyxFQUNEaUIsV0FBVyxHQUNMc0Qsa0JBQWtCLENBQUN2RCxVQUFELEVBQWFuQixTQUFiLENBQWxCLENBQTBDOEMsTUFEckMsR0FFTHpCLGdCQUFnQixHQUNac0QsZ0JBQWdCLENBQUNyRCxnQkFBRCxFQUFtQnRCLFNBQW5CLENBQWhCLENBQThDOEMsTUFEbEMsR0FFWjlDLFNBQVMsQ0FBQzhDLE1BUjVCO0FBVUksSUFBQSxXQUFXLEVBQUU1QixXQVZqQjtBQVdJLElBQUEsSUFBSSxFQUFFRixJQVhWO0FBWUksSUFBQSxtQkFBbUIsRUFBRTtBQUNqQixvQkFBYztBQURHLEtBWnpCO0FBZUksSUFBQSxtQkFBbUIsRUFBRTtBQUNqQixvQkFBYztBQURHLEtBZnpCO0FBa0JJLElBQUEsWUFBWSxFQUFFc0MsZ0JBbEJsQjtBQW1CSSxJQUFBLG1CQUFtQixFQUFFRTtBQW5CekIsSUExQ0osQ0FESixFQWlFS3ZELFlBQVksQ0FBQ0osZUFBYixHQUNHLDZCQUFDLHNCQUFEO0FBQ0ksSUFBQSxPQUFPLEVBQUUsNkJBQUMsWUFBRDtBQUFRLE1BQUEsT0FBTyxFQUFFb0IsS0FBakI7QUFBd0IsTUFBQSxRQUFRLEVBQUV5QztBQUFsQyxNQURiO0FBRUksSUFBQSxLQUFLLEVBQUM7QUFGVixJQURILEdBS0csSUF0RVIsQ0FESjtBQTBFSDs7QUFFRDVELFdBQVcsQ0FBQ21HLFVBQVosR0FBeUI7QUFDckJsRyxFQUFBQSxPQUFPLEVBQUVtRyxtQkFBVUMsS0FBVixDQUFnQkMsVUFESjtBQUVyQnBHLEVBQUFBLFNBQVMsRUFBRWtHLG1CQUFVQyxLQUFWLENBQWdCQyxVQUZOO0FBR3JCbkcsRUFBQUEsWUFBWSxFQUFFaUcsbUJBQVVHLE1BSEg7QUFJckJuRyxFQUFBQSxXQUFXLEVBQUVnRyxtQkFBVUksSUFKRjtBQUtyQm5HLEVBQUFBLGFBQWEsRUFBRStGLG1CQUFVSTtBQUxKLENBQXpCO2VBUWV4RyxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBGb3JtQ29udHJvbExhYmVsLFxyXG4gICAgUGFwZXIsXHJcbiAgICBTd2l0Y2gsXHJcbiAgICBUYWJsZSxcclxuICAgIFRhYmxlUGFnaW5hdGlvblxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSnBUYWJsZUhlYWQgZnJvbSBcIi4vSnBUYWJsZUhlYWRcIjtcclxuaW1wb3J0IEpwVGFibGVUb29sYmFyIGZyb20gXCIuL0pwVGFibGVUb29sYmFyXCI7XHJcbmltcG9ydCBKcFRhYmxlQm9keSBmcm9tIFwiLi9KcFRhYmxlQm9keVwiO1xyXG5pbXBvcnQgSnBUYWJsZUV4cGFuc2lvblBhbmVsIGZyb20gXCIuL0pwVGFibGVFeHBhbnNpb25QYW5lbFwiO1xyXG5pbXBvcnQgdXBkYXRlIGZyb20gXCJpbW11dGFiaWxpdHktaGVscGVyXCI7XHJcbmltcG9ydCB7IE1haW5UYWJsZUNvbnRleHQgfSBmcm9tIFwiLi9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgdXNlTWFpblRhYmxlQWN0aW9ucyBmcm9tIFwiLi9zdG9yZS9hY3Rpb25zL21haW5UYWJsZUFjdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IEpwVGFibGVTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXMvSnBUYWJsZVN0eWxlc1wiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKEpwVGFibGVTdHlsZXMpO1xyXG5cclxuXHJcbi8qKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBEZWZhdWx0IFRhYmxlIHNldHRpbmcgU1RBUlRcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbmNvbnN0IGRlZmF1bHRUYWJsZVNldHRpbmcgPSB7XHJcbiAgICB0YWJsZU5hbWU6IFwiSnBUYWJsZVwiLFxyXG4gICAgZ2xvYmFsU2VhcmNoOiBmYWxzZSxcclxuICAgIGNvbHVtbnNIaWRlU2hvd1N3aXRjaDogZmFsc2UsXHJcbiAgICB0YWJsZU1lbnU6IGZhbHNlLFxyXG4gICAgbXVsdGlTZWFyY2g6IGZhbHNlLFxyXG4gICAgaGFzRWRpdGluZzogZmFsc2UsXHJcbiAgICBoYXNEZWxldGluZzogZmFsc2UsXHJcbiAgICBkZW5zZVJvd3NTd2l0Y2g6IGZhbHNlXHJcbn07XHJcbi8qKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBEZWZhdWx0IFRhYmxlIHNldHRpbmcgRU5EXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gSnBUYWJsZU1haW4oe1xyXG4gICAgY29sdW1ucyxcclxuICAgIHVzZXJzRGF0YSxcclxuICAgIHRhYmxlU2V0dGluZyA9IHsgLi4uZGVmYXVsdFRhYmxlU2V0dGluZyB9LFxyXG4gICAgb25FZGl0Q2xpY2ssXHJcbiAgICBvblJlbW92ZUNsaWNrXHJcbn0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtjb2x1bW5zRGF0YSwgc2V0Q29sdW1uc0RhdGFdID0gUmVhY3QudXNlU3RhdGUoY29sdW1ucyk7XHJcblxyXG4gICAgLy9jb250ZXh0IEFQSSBTVEFSVFxyXG4gICAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IFJlYWN0LnVzZUNvbnRleHQoTWFpblRhYmxlQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IG9yZGVyLCBvcmRlckJ5LCBzZWxlY3RlZCwgcGFnZSwgZGVuc2UsIHJvd3NQZXJQYWdlLCBzZWFyY2hUZXJtLCBpc1NlYXJjaGluZyxcclxuICAgICAgICBpc1NlYXJjaGluZ011bHRpLCBtdWx0aVNlYXJjaFRlcm1zLCBpc0V4YWN0bHkgfSA9IHN0YXRlO1xyXG4gICAgY29uc3QgeyBzZXRPcmRlciwgc2V0T3JkZXJCeSwgc2V0U2VsZWN0ZWQsIHNldFBhZ2UsIHNldERlbnNlLCBzZXRSb3dzUGVyUGFnZSwgc2V0U2VhcmNoVGVybSxcclxuICAgICAgICBzZXRJc1NlYXJjaGluZywgc2V0SXNTZWFyY2hpbmdNdWx0aSwgc2V0TXVsdGlTZWFyY2hUZXJtcywgc2V0SXNFeGFjdGx5IH0gPSB1c2VNYWluVGFibGVBY3Rpb25zKGRpc3BhdGNoKTtcclxuICAgIC8vY29udGV4dCBBUEkgRU5EXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdFNvcnQoZXZlbnQsIHByb3BlcnR5KSB7XHJcbiAgICAgICAgY29uc3QgaXNEZXNjID0gb3JkZXJCeSA9PT0gcHJvcGVydHkgJiYgb3JkZXIgPT09IFwiZGVzY1wiO1xyXG4gICAgICAgIHNldE9yZGVyKGlzRGVzYyk7XHJcbiAgICAgICAgc2V0T3JkZXJCeShwcm9wZXJ0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWQuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkID0gbmV3U2VsZWN0ZWQuY29uY2F0KHNlbGVjdGVkLCBuYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQgPSBuZXdTZWxlY3RlZC5jb25jYXQoc2VsZWN0ZWQuc2xpY2UoMSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gc2VsZWN0ZWQubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZCA9IG5ld1NlbGVjdGVkLmNvbmNhdChzZWxlY3RlZC5zbGljZSgwLCAtMSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQgPSBuZXdTZWxlY3RlZC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zbGljZSgwLCBzZWxlY3RlZEluZGV4KSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNsaWNlKHNlbGVjdGVkSW5kZXggKyAxKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdEFsbENsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkcyA9IHVzZXJzRGF0YS5tYXAobiA9PiBuLmlkKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWRzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlUGFnZShldmVudCwgbmV3UGFnZSkge1xyXG4gICAgICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UoZXZlbnQpIHtcclxuICAgICAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRQYWdlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZURlbnNlKGV2ZW50KSB7XHJcbiAgICAgICAgc2V0RGVuc2UoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUhpZGVTaG93Q29sdW1uKGNvbHVtbk9iaikge1xyXG4gICAgICAgIGxldCBpc0l0ZW1JbkFycmF5O1xyXG5cclxuICAgICAgICBjb2x1bW5zRGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gY29sdW1uT2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpc0l0ZW1JbkFycmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaXNJdGVtSW5BcnJheSkge1xyXG4gICAgICAgICAgICBzZXRDb2x1bW5zRGF0YShjb2x1bW5zRGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBjb2x1bW5PYmouaWQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDb2x1bW5zRGF0YShbLi4uY29sdW1uc0RhdGEsIGNvbHVtbk9ial0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSkge1xyXG4gICAgICAgIHNldElzU2VhcmNoaW5nTXVsdGkoZmFsc2UpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gbnVsbCAmJiBlLnRhcmdldC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgc2V0UGFnZSgwKTtcclxuICAgICAgICAgICAgc2V0SXNTZWFyY2hpbmcodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2VhcmNoVGVybShcIlwiKTtcclxuICAgICAgICAgICAgc2V0SXNTZWFyY2hpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNdWx0aVNlYXJjaChlLCBjb2xJZCkge1xyXG4gICAgICAgIHNldElzU2VhcmNoaW5nKGZhbHNlKTtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0TXVsdGlTZWFyY2hUZXJtcyh7XHJcbiAgICAgICAgICAgICAgICAuLi5tdWx0aVNlYXJjaFRlcm1zLFxyXG4gICAgICAgICAgICAgICAgW2NvbElkXTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFBhZ2UoMCk7XHJcbiAgICAgICAgICAgIHNldElzU2VhcmNoaW5nTXVsdGkodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0TXVsdGlTZWFyY2hUZXJtcyh7fSk7XHJcbiAgICAgICAgICAgIHNldElzU2VhcmNoaW5nTXVsdGkoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWFyY2hTd2l0Y2godGVybSwgZGF0YSwgZGF0YUFycmF5KSB7XHJcbiAgICAgICAgaWYgKGlzU2VhcmNoaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hUZXJtRnVsbFRleHQodGVybSwgZGF0YUFycmF5KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzU2VhcmNoaW5nTXVsdGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaE11bHRpVGVybXMoZGF0YSwgZGF0YUFycmF5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YUFycmF5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWFyY2hUZXJtRnVsbFRleHQodGVybSwgZGF0YUFycmF5KSB7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkRGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCAmJiB0ZXJtICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRhdGFBcnJheS5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uc0RhdGEuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcltjb2wuaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyh0ZXJtLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkRGF0YS5maW5kSW5kZXgoaSA9PiBpLmlkID09PSB1c2VyLmlkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUFycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhLnB1c2godXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUFycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YUFycmF5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWFyY2hNdWx0aVRlcm1zKGRhdGEsIGRhdGFBcnJheSkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZCA9IGRhdGFBcnJheTtcclxuXHJcbiAgICAgICAgY29sdW1uc0RhdGEuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBkYXRhW2NvbC5pZF0gIT09IG51bGwgJiZcclxuICAgICAgICAgICAgICAgIGRhdGFbY29sLmlkXSAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgICAgICAgZGF0YVtjb2wuaWRdICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZCA9IGZpbHRlcmVkLmZpbHRlcih1c2VyID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaXNFeGFjdGx5W2NvbC5pZF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB1c2VyW2NvbC5pZF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2NvbC5pZF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdXNlcltjb2wuaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhkYXRhW2NvbC5pZF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRXhhY3RTZWFyY2goZSwgY29sSWQpIHtcclxuICAgICAgICBzZXRJc0V4YWN0bHkoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZUNhcmQgPSAoZHJhZ0luZGV4LCBob3ZlckluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IGRyYWdDYXJkID0gY29sdW1uc0RhdGFbZHJhZ0luZGV4XTtcclxuICAgICAgICBzZXRDb2x1bW5zRGF0YShcclxuICAgICAgICAgICAgdXBkYXRlKGNvbHVtbnNEYXRhLCB7XHJcbiAgICAgICAgICAgICAgICAkc3BsaWNlOiBbW2RyYWdJbmRleCwgMV0sIFtob3ZlckluZGV4LCAwLCBkcmFnQ2FyZF1dXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8SnBUYWJsZVRvb2xiYXJcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZVNldHRpbmc9e3RhYmxlU2V0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICBudW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUhpZGVTaG93Q29sdW1uPXtoYW5kbGVIaWRlU2hvd0NvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEpwVGFibGVFeHBhbnNpb25QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnNEYXRhPXtjb2x1bW5zRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZVNldHRpbmc9e3RhYmxlU2V0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNdWx0aVNlYXJjaD17aGFuZGxlTXVsdGlTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXhhY3RTZWFyY2g9e2hhbmRsZUV4YWN0U2VhcmNofVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRhYmxlVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtkZW5zZSA/IFwic21hbGxcIiA6IFwibWVkaXVtXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SnBUYWJsZUhlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnNEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUNhcmQ9e21vdmVDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2xpY2s9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0U29ydD17aGFuZGxlUmVxdWVzdFNvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDb3VudD17dXNlcnNEYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlU2V0dGluZz17dGFibGVTZXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SnBUYWJsZUJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnNEYXRhPXtjb2x1bW5zRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlU2V0dGluZz17dGFibGVTZXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNEYXRhPXt1c2Vyc0RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hTd2l0Y2g9e3NlYXJjaFN3aXRjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdENsaWNrPXtvbkVkaXRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlQ2xpY2s9e29uUmVtb3ZlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzUsIDEwLCAyNV19XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICBjb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlYXJjaFRlcm1GdWxsVGV4dChzZWFyY2hUZXJtLCB1c2Vyc0RhdGEpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpc1NlYXJjaGluZ011bHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWFyY2hNdWx0aVRlcm1zKG11bHRpU2VhcmNoVGVybXMsIHVzZXJzRGF0YSkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1c2Vyc0RhdGEubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tJY29uQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwicHJldmlvdXMgcGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBuZXh0SWNvbkJ1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIm5leHQgcGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICB7dGFibGVTZXR0aW5nLmRlbnNlUm93c1N3aXRjaCA/IChcclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17PFN3aXRjaCBjaGVja2VkPXtkZW5zZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlbnNlfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbnNlIHBhZGRpbmdcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5KcFRhYmxlTWFpbi5wcm90b3R5cGVzID0ge1xyXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICB1c2Vyc0RhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgdGFibGVTZXR0aW5nOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25FZGl0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25SZW1vdmVDbGljazogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpwVGFibGVNYWluO1xyXG4iXX0=