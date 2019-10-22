"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Create = _interopRequireDefault(require("@material-ui/icons/Create"));

var _DeleteSharp = _interopRequireDefault(require("@material-ui/icons/DeleteSharp"));

var _JpTableHeadCell = _interopRequireDefault(require("./JpTableHeadCell"));

var _store = require("./store/store");

var _JpTableHeadStyles = require("./styles/JpTableHeadStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(_JpTableHeadStyles.JpTableHeadStyles);

function JpTableHead(props) {
  var classes = useStyles();
  var columns = props.columns,
      onSelectAllClick = props.onSelectAllClick,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort,
      moveCard = props.moveCard,
      tableSetting = props.tableSetting;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  }; //context API START


  var _React$useContext = _react.default.useContext(_store.MainTableContext),
      state = _React$useContext.state;

  var order = state.order,
      orderBy = state.orderBy; //context API END

  return _react.default.createElement(_core.TableHead, null, _react.default.createElement(_core.TableRow, null, _react.default.createElement(_core.TableCell, {
    padding: "checkbox"
  }, _react.default.createElement(_core.Checkbox, {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: numSelected === rowCount,
    onChange: onSelectAllClick
  })), columns.map(function (headCell, index) {
    return _react.default.createElement(_JpTableHeadCell.default, {
      index: index,
      id: headCell.id,
      moveCard: moveCard,
      key: index,
      align: headCell.numeric ? "right" : "left",
      padding: headCell.disablePadding ? "none" : "default",
      sortDirection: orderBy === headCell.id ? order : false
    }, headCell.isSortable ? _react.default.createElement(_core.TableSortLabel, {
      active: orderBy === headCell.id,
      direction: order,
      onClick: createSortHandler(headCell.id)
    }, headCell.label, orderBy === headCell.id ? _react.default.createElement("span", {
      className: classes.visuallyHidden
    }, order === "desc" ? "sorted descending" : "sorted ascending") : null) : _react.default.createElement(_core.Typography, {
      color: "secondary",
      variant: "subtitle2",
      className: classes.root
    }, headCell.label));
  }), tableSetting.hasEditing ? _react.default.createElement(_core.TableCell, null, _react.default.createElement(_Create.default, null)) : null, tableSetting.hasDeleting ? _react.default.createElement(_core.TableCell, null, _react.default.createElement(_DeleteSharp.default, null)) : null));
}

JpTableHead.propTypes = {
  columns: _propTypes.default.array.isRequired,
  onSelectAllClick: _propTypes.default.func.isRequired,
  numSelected: _propTypes.default.number.isRequired,
  rowCount: _propTypes.default.number.isRequired,
  onRequestSort: _propTypes.default.func.isRequired,
  moveCard: _propTypes.default.func.isRequired,
  tebleSetting: _propTypes.default.object
};
var _default = JpTableHead;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2pwVGFibGUvSnBUYWJsZUhlYWQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiSnBUYWJsZUhlYWRTdHlsZXMiLCJKcFRhYmxlSGVhZCIsInByb3BzIiwiY2xhc3NlcyIsImNvbHVtbnMiLCJvblNlbGVjdEFsbENsaWNrIiwibnVtU2VsZWN0ZWQiLCJyb3dDb3VudCIsIm9uUmVxdWVzdFNvcnQiLCJtb3ZlQ2FyZCIsInRhYmxlU2V0dGluZyIsImNyZWF0ZVNvcnRIYW5kbGVyIiwicHJvcGVydHkiLCJldmVudCIsIlJlYWN0IiwidXNlQ29udGV4dCIsIk1haW5UYWJsZUNvbnRleHQiLCJzdGF0ZSIsIm9yZGVyIiwib3JkZXJCeSIsIm1hcCIsImhlYWRDZWxsIiwiaW5kZXgiLCJpZCIsIm51bWVyaWMiLCJkaXNhYmxlUGFkZGluZyIsImlzU29ydGFibGUiLCJsYWJlbCIsInZpc3VhbGx5SGlkZGVuIiwicm9vdCIsImhhc0VkaXRpbmciLCJoYXNEZWxldGluZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJudW1iZXIiLCJ0ZWJsZVNldHRpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBLElBQU1BLFNBQVMsR0FBRyx3QkFBV0Msb0NBQVgsQ0FBbEI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUIsTUFBTUMsT0FBTyxHQUFHSixTQUFTLEVBQXpCO0FBRDBCLE1BR3hCSyxPQUh3QixHQVV0QkYsS0FWc0IsQ0FHeEJFLE9BSHdCO0FBQUEsTUFJeEJDLGdCQUp3QixHQVV0QkgsS0FWc0IsQ0FJeEJHLGdCQUp3QjtBQUFBLE1BS3hCQyxXQUx3QixHQVV0QkosS0FWc0IsQ0FLeEJJLFdBTHdCO0FBQUEsTUFNeEJDLFFBTndCLEdBVXRCTCxLQVZzQixDQU14QkssUUFOd0I7QUFBQSxNQU94QkMsYUFQd0IsR0FVdEJOLEtBVnNCLENBT3hCTSxhQVB3QjtBQUFBLE1BUXhCQyxRQVJ3QixHQVV0QlAsS0FWc0IsQ0FReEJPLFFBUndCO0FBQUEsTUFTeEJDLFlBVHdCLEdBVXRCUixLQVZzQixDQVN4QlEsWUFUd0I7O0FBWTFCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsUUFBUTtBQUFBLFdBQUksVUFBQUMsS0FBSyxFQUFJO0FBQzdDTCxNQUFBQSxhQUFhLENBQUNLLEtBQUQsRUFBUUQsUUFBUixDQUFiO0FBQ0QsS0FGaUM7QUFBQSxHQUFsQyxDQVowQixDQWdCMUI7OztBQWhCMEIsMEJBaUJSRSxlQUFNQyxVQUFOLENBQWlCQyx1QkFBakIsQ0FqQlE7QUFBQSxNQWlCbEJDLEtBakJrQixxQkFpQmxCQSxLQWpCa0I7O0FBQUEsTUFrQmxCQyxLQWxCa0IsR0FrQkNELEtBbEJELENBa0JsQkMsS0FsQmtCO0FBQUEsTUFrQlhDLE9BbEJXLEdBa0JDRixLQWxCRCxDQWtCWEUsT0FsQlcsRUFtQjFCOztBQUVBLFNBQ0UsNkJBQUMsZUFBRCxRQUNFLDZCQUFDLGNBQUQsUUFDRSw2QkFBQyxlQUFEO0FBQVcsSUFBQSxPQUFPLEVBQUM7QUFBbkIsS0FDRSw2QkFBQyxjQUFEO0FBQ0UsSUFBQSxhQUFhLEVBQUViLFdBQVcsR0FBRyxDQUFkLElBQW1CQSxXQUFXLEdBQUdDLFFBRGxEO0FBRUUsSUFBQSxPQUFPLEVBQUVELFdBQVcsS0FBS0MsUUFGM0I7QUFHRSxJQUFBLFFBQVEsRUFBRUY7QUFIWixJQURGLENBREYsRUFRR0QsT0FBTyxDQUFDZ0IsR0FBUixDQUFZLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLFdBQ1gsNkJBQUMsd0JBQUQ7QUFDRSxNQUFBLEtBQUssRUFBRUEsS0FEVDtBQUVFLE1BQUEsRUFBRSxFQUFFRCxRQUFRLENBQUNFLEVBRmY7QUFHRSxNQUFBLFFBQVEsRUFBRWQsUUFIWjtBQUlFLE1BQUEsR0FBRyxFQUFFYSxLQUpQO0FBS0UsTUFBQSxLQUFLLEVBQUVELFFBQVEsQ0FBQ0csT0FBVCxHQUFtQixPQUFuQixHQUE2QixNQUx0QztBQU1FLE1BQUEsT0FBTyxFQUFFSCxRQUFRLENBQUNJLGNBQVQsR0FBMEIsTUFBMUIsR0FBbUMsU0FOOUM7QUFPRSxNQUFBLGFBQWEsRUFBRU4sT0FBTyxLQUFLRSxRQUFRLENBQUNFLEVBQXJCLEdBQTBCTCxLQUExQixHQUFrQztBQVBuRCxPQVNHRyxRQUFRLENBQUNLLFVBQVQsR0FDQyw2QkFBQyxvQkFBRDtBQUNFLE1BQUEsTUFBTSxFQUFFUCxPQUFPLEtBQUtFLFFBQVEsQ0FBQ0UsRUFEL0I7QUFFRSxNQUFBLFNBQVMsRUFBRUwsS0FGYjtBQUdFLE1BQUEsT0FBTyxFQUFFUCxpQkFBaUIsQ0FBQ1UsUUFBUSxDQUFDRSxFQUFWO0FBSDVCLE9BS0dGLFFBQVEsQ0FBQ00sS0FMWixFQU1HUixPQUFPLEtBQUtFLFFBQVEsQ0FBQ0UsRUFBckIsR0FDQztBQUFNLE1BQUEsU0FBUyxFQUFFcEIsT0FBTyxDQUFDeUI7QUFBekIsT0FDR1YsS0FBSyxLQUFLLE1BQVYsR0FDRyxtQkFESCxHQUVHLGtCQUhOLENBREQsR0FNRyxJQVpOLENBREQsR0FnQkcsNkJBQUMsZ0JBQUQ7QUFDRSxNQUFBLEtBQUssRUFBQyxXQURSO0FBRUUsTUFBQSxPQUFPLEVBQUMsV0FGVjtBQUdFLE1BQUEsU0FBUyxFQUFFZixPQUFPLENBQUMwQjtBQUhyQixPQUtHUixRQUFRLENBQUNNLEtBTFosQ0F6Qk4sQ0FEVztBQUFBLEdBQVosQ0FSSCxFQTRDR2pCLFlBQVksQ0FBQ29CLFVBQWIsR0FDQyw2QkFBQyxlQUFELFFBQ0UsNkJBQUMsZUFBRCxPQURGLENBREQsR0FJRyxJQWhETixFQWlER3BCLFlBQVksQ0FBQ3FCLFdBQWIsR0FDQyw2QkFBQyxlQUFELFFBQ0UsNkJBQUMsb0JBQUQsT0FERixDQURELEdBSUcsSUFyRE4sQ0FERixDQURGO0FBMkREOztBQUVEOUIsV0FBVyxDQUFDK0IsU0FBWixHQUF3QjtBQUN0QjVCLEVBQUFBLE9BQU8sRUFBRTZCLG1CQUFVQyxLQUFWLENBQWdCQyxVQURIO0FBRXRCOUIsRUFBQUEsZ0JBQWdCLEVBQUU0QixtQkFBVUcsSUFBVixDQUFlRCxVQUZYO0FBR3RCN0IsRUFBQUEsV0FBVyxFQUFFMkIsbUJBQVVJLE1BQVYsQ0FBaUJGLFVBSFI7QUFJdEI1QixFQUFBQSxRQUFRLEVBQUUwQixtQkFBVUksTUFBVixDQUFpQkYsVUFKTDtBQUt0QjNCLEVBQUFBLGFBQWEsRUFBRXlCLG1CQUFVRyxJQUFWLENBQWVELFVBTFI7QUFNdEIxQixFQUFBQSxRQUFRLEVBQUV3QixtQkFBVUcsSUFBVixDQUFlRCxVQU5IO0FBT3RCRyxFQUFBQSxZQUFZLEVBQUVMLG1CQUFVTTtBQVBGLENBQXhCO2VBVWV0QyxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hlY2tib3gsXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlSGVhZCxcclxuICBUYWJsZVJvdyxcclxuICBUYWJsZVNvcnRMYWJlbCxcclxuICBUeXBvZ3JhcGh5XHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCI7XHJcbmltcG9ydCBEZWxldGVTaGFycEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVTaGFycFwiO1xyXG5pbXBvcnQgSnBUYWJsZUhlYWRDZWxsIGZyb20gXCIuL0pwVGFibGVIZWFkQ2VsbFwiO1xyXG5pbXBvcnQgeyBNYWluVGFibGVDb250ZXh0IH0gZnJvbSBcIi4vc3RvcmUvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEpwVGFibGVIZWFkU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzL0pwVGFibGVIZWFkU3R5bGVzXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoSnBUYWJsZUhlYWRTdHlsZXMpO1xyXG5cclxuZnVuY3Rpb24gSnBUYWJsZUhlYWQocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgY29sdW1ucyxcclxuICAgIG9uU2VsZWN0QWxsQ2xpY2ssXHJcbiAgICBudW1TZWxlY3RlZCxcclxuICAgIHJvd0NvdW50LFxyXG4gICAgb25SZXF1ZXN0U29ydCxcclxuICAgIG1vdmVDYXJkLFxyXG4gICAgdGFibGVTZXR0aW5nXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjcmVhdGVTb3J0SGFuZGxlciA9IHByb3BlcnR5ID0+IGV2ZW50ID0+IHtcclxuICAgIG9uUmVxdWVzdFNvcnQoZXZlbnQsIHByb3BlcnR5KTtcclxuICB9O1xyXG5cclxuICAvL2NvbnRleHQgQVBJIFNUQVJUXHJcbiAgY29uc3QgeyBzdGF0ZSB9ID0gUmVhY3QudXNlQ29udGV4dChNYWluVGFibGVDb250ZXh0KTtcclxuICBjb25zdCB7IG9yZGVyLCBvcmRlckJ5IH0gPSBzdGF0ZTtcclxuICAvL2NvbnRleHQgQVBJIEVORFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlSGVhZD5cclxuICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17bnVtU2VsZWN0ZWQgPiAwICYmIG51bVNlbGVjdGVkIDwgcm93Q291bnR9XHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e251bVNlbGVjdGVkID09PSByb3dDb3VudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0QWxsQ2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIHtjb2x1bW5zLm1hcCgoaGVhZENlbGwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8SnBUYWJsZUhlYWRDZWxsXHJcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgaWQ9e2hlYWRDZWxsLmlkfVxyXG4gICAgICAgICAgICBtb3ZlQ2FyZD17bW92ZUNhcmR9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGFsaWduPXtoZWFkQ2VsbC5udW1lcmljID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XHJcbiAgICAgICAgICAgIHBhZGRpbmc9e2hlYWRDZWxsLmRpc2FibGVQYWRkaW5nID8gXCJub25lXCIgOiBcImRlZmF1bHRcIn1cclxuICAgICAgICAgICAgc29ydERpcmVjdGlvbj17b3JkZXJCeSA9PT0gaGVhZENlbGwuaWQgPyBvcmRlciA6IGZhbHNlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aGVhZENlbGwuaXNTb3J0YWJsZSA/IChcclxuICAgICAgICAgICAgICA8VGFibGVTb3J0TGFiZWxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17b3JkZXJCeSA9PT0gaGVhZENlbGwuaWR9XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e29yZGVyfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlU29ydEhhbmRsZXIoaGVhZENlbGwuaWQpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtoZWFkQ2VsbC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHtvcmRlckJ5ID09PSBoZWFkQ2VsbC5pZCA/IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnZpc3VhbGx5SGlkZGVufT5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXIgPT09IFwiZGVzY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwic29ydGVkIGRlc2NlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInNvcnRlZCBhc2NlbmRpbmdcIn1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVNvcnRMYWJlbD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aGVhZENlbGwubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvSnBUYWJsZUhlYWRDZWxsPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHt0YWJsZVNldHRpbmcuaGFzRWRpdGluZyA/IChcclxuICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxDcmVhdGVJY29uIC8+XHJcbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICB7dGFibGVTZXR0aW5nLmhhc0RlbGV0aW5nID8gKFxyXG4gICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPERlbGV0ZVNoYXJwSWNvbiAvPlxyXG4gICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvVGFibGVSb3c+XHJcbiAgICA8L1RhYmxlSGVhZD5cclxuICApO1xyXG59XHJcblxyXG5KcFRhYmxlSGVhZC5wcm9wVHlwZXMgPSB7XHJcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgb25TZWxlY3RBbGxDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBudW1TZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHJvd0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgb25SZXF1ZXN0U29ydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBtb3ZlQ2FyZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB0ZWJsZVNldHRpbmc6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpwVGFibGVIZWFkO1xyXG4iXX0=