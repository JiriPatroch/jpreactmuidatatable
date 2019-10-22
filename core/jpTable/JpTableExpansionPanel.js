"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));

var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));

var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _JpTableExpansionPanelStyles = require("./styles/JpTableExpansionPanelStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(_JpTableExpansionPanelStyles.JpTableExpansionPanelStyles);

function JpTableExpansionPanel(_ref) {
  var columnsData = _ref.columnsData,
      tableSetting = _ref.tableSetting,
      handleExactSearch = _ref.handleExactSearch,
      handleMultiSearch = _ref.handleMultiSearch;
  var classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, tableSetting.multiSearch ? _react.default.createElement(_ExpansionPanel.default, {
    defaultExpanded: true
  }, _react.default.createElement(_ExpansionPanelSummary.default, {
    expandIcon: _react.default.createElement(_ExpandMore.default, null)
  }, _react.default.createElement(_Typography.default, null, "Advanced Search")), _react.default.createElement(_ExpansionPanelDetails.default, null, _react.default.createElement(_core.Box, {
    className: classes.advSearchFiledsBox
  }, columnsData.map(function (col, index) {
    return _react.default.createElement("div", {
      key: index
    }, _react.default.createElement(_TextField.default, {
      id: col.id,
      autoComplete: "off",
      className: classes.advSearchField,
      label: col.label,
      margin: "dense",
      variant: "outlined",
      onChange: function onChange(e) {
        handleMultiSearch(e, col.id);
      }
    }), _react.default.createElement(_core.Tooltip, {
      disableFocusListener: true,
      disableTouchListener: true,
      title: "is Exactly?"
    }, _react.default.createElement(_core.Checkbox, {
      name: col.id,
      onChange: function onChange(e) {
        return handleExactSearch(e, col.id);
      },
      inputProps: {
        "aria-label": "primary checkbox"
      },
      className: classes.exactSearchCheckBox
    })));
  })))) : null);
}

JpTableExpansionPanel.prototypes = {
  columnsData: _propTypes.default.array.isRequired,
  tableSetting: _propTypes.default.object.isRequired,
  handleExactSearch: _propTypes.default.func.isRequired,
  handleMultiSearch: _propTypes.default.func.isRequired
};
var _default = JpTableExpansionPanel;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2pwVGFibGUvSnBUYWJsZUV4cGFuc2lvblBhbmVsLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIkpwVGFibGVFeHBhbnNpb25QYW5lbFN0eWxlcyIsIkpwVGFibGVFeHBhbnNpb25QYW5lbCIsImNvbHVtbnNEYXRhIiwidGFibGVTZXR0aW5nIiwiaGFuZGxlRXhhY3RTZWFyY2giLCJoYW5kbGVNdWx0aVNlYXJjaCIsImNsYXNzZXMiLCJtdWx0aVNlYXJjaCIsImFkdlNlYXJjaEZpbGVkc0JveCIsIm1hcCIsImNvbCIsImluZGV4IiwiaWQiLCJhZHZTZWFyY2hGaWVsZCIsImxhYmVsIiwiZSIsImV4YWN0U2VhcmNoQ2hlY2tCb3giLCJwcm90b3R5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLHdCQUFXQyx3REFBWCxDQUFsQjs7QUFFQSxTQUFTQyxxQkFBVCxPQUtHO0FBQUEsTUFKREMsV0FJQyxRQUpEQSxXQUlDO0FBQUEsTUFIREMsWUFHQyxRQUhEQSxZQUdDO0FBQUEsTUFGREMsaUJBRUMsUUFGREEsaUJBRUM7QUFBQSxNQUREQyxpQkFDQyxRQUREQSxpQkFDQztBQUNELE1BQU1DLE9BQU8sR0FBR1AsU0FBUyxFQUF6QjtBQUNBLFNBQ0UsNERBQ0dJLFlBQVksQ0FBQ0ksV0FBYixHQUNDLDZCQUFDLHVCQUFEO0FBQWdCLElBQUEsZUFBZSxFQUFFO0FBQWpDLEtBQ0UsNkJBQUMsOEJBQUQ7QUFBdUIsSUFBQSxVQUFVLEVBQUUsNkJBQUMsbUJBQUQ7QUFBbkMsS0FDRSw2QkFBQyxtQkFBRCwwQkFERixDQURGLEVBSUUsNkJBQUMsOEJBQUQsUUFDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxTQUFTLEVBQUVELE9BQU8sQ0FBQ0U7QUFBeEIsS0FDR04sV0FBVyxDQUFDTyxHQUFaLENBQWdCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMvQixXQUNFO0FBQUssTUFBQSxHQUFHLEVBQUVBO0FBQVYsT0FDRSw2QkFBQyxrQkFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFRCxHQUFHLENBQUNFLEVBRFY7QUFFRSxNQUFBLFlBQVksRUFBQyxLQUZmO0FBR0UsTUFBQSxTQUFTLEVBQUVOLE9BQU8sQ0FBQ08sY0FIckI7QUFJRSxNQUFBLEtBQUssRUFBRUgsR0FBRyxDQUFDSSxLQUpiO0FBS0UsTUFBQSxNQUFNLEVBQUMsT0FMVDtBQU1FLE1BQUEsT0FBTyxFQUFDLFVBTlY7QUFPRSxNQUFBLFFBQVEsRUFBRSxrQkFBQUMsQ0FBQyxFQUFJO0FBQ2JWLFFBQUFBLGlCQUFpQixDQUFDVSxDQUFELEVBQUlMLEdBQUcsQ0FBQ0UsRUFBUixDQUFqQjtBQUNEO0FBVEgsTUFERixFQVlFLDZCQUFDLGFBQUQ7QUFDRSxNQUFBLG9CQUFvQixNQUR0QjtBQUVFLE1BQUEsb0JBQW9CLE1BRnRCO0FBR0UsTUFBQSxLQUFLLEVBQUM7QUFIUixPQUtFLDZCQUFDLGNBQUQ7QUFDRSxNQUFBLElBQUksRUFBRUYsR0FBRyxDQUFDRSxFQURaO0FBRUUsTUFBQSxRQUFRLEVBQUUsa0JBQUFHLENBQUM7QUFBQSxlQUFJWCxpQkFBaUIsQ0FBQ1csQ0FBRCxFQUFJTCxHQUFHLENBQUNFLEVBQVIsQ0FBckI7QUFBQSxPQUZiO0FBR0UsTUFBQSxVQUFVLEVBQUU7QUFDVixzQkFBYztBQURKLE9BSGQ7QUFNRSxNQUFBLFNBQVMsRUFBRU4sT0FBTyxDQUFDVTtBQU5yQixNQUxGLENBWkYsQ0FERjtBQTZCRCxHQTlCQSxDQURILENBREYsQ0FKRixDQURELEdBeUNHLElBMUNOLENBREY7QUE4Q0Q7O0FBRURmLHFCQUFxQixDQUFDZ0IsVUFBdEIsR0FBbUM7QUFDakNmLEVBQUFBLFdBQVcsRUFBRWdCLG1CQUFVQyxLQUFWLENBQWdCQyxVQURJO0FBRWpDakIsRUFBQUEsWUFBWSxFQUFFZSxtQkFBVUcsTUFBVixDQUFpQkQsVUFGRTtBQUdqQ2hCLEVBQUFBLGlCQUFpQixFQUFFYyxtQkFBVUksSUFBVixDQUFlRixVQUhEO0FBSWpDZixFQUFBQSxpQkFBaUIsRUFBRWEsbUJBQVVJLElBQVYsQ0FBZUY7QUFKRCxDQUFuQztlQU9lbkIscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQm94LCBDaGVja2JveCwgVG9vbHRpcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgRXhwYW5zaW9uUGFuZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsXCI7XHJcbmltcG9ydCBFeHBhbnNpb25QYW5lbERldGFpbHMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsRGV0YWlsc1wiO1xyXG5pbXBvcnQgRXhwYW5zaW9uUGFuZWxTdW1tYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbFN1bW1hcnlcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmltcG9ydCB7IEpwVGFibGVFeHBhbnNpb25QYW5lbFN0eWxlcyB9IGZyb20gXCIuL3N0eWxlcy9KcFRhYmxlRXhwYW5zaW9uUGFuZWxTdHlsZXNcIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhKcFRhYmxlRXhwYW5zaW9uUGFuZWxTdHlsZXMpO1xyXG5cclxuZnVuY3Rpb24gSnBUYWJsZUV4cGFuc2lvblBhbmVsKHtcclxuICBjb2x1bW5zRGF0YSxcclxuICB0YWJsZVNldHRpbmcsXHJcbiAgaGFuZGxlRXhhY3RTZWFyY2gsXHJcbiAgaGFuZGxlTXVsdGlTZWFyY2hcclxufSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3RhYmxlU2V0dGluZy5tdWx0aVNlYXJjaCA/IChcclxuICAgICAgICA8RXhwYW5zaW9uUGFuZWwgZGVmYXVsdEV4cGFuZGVkPXt0cnVlfT5cclxuICAgICAgICAgIDxFeHBhbnNpb25QYW5lbFN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+QWR2YW5jZWQgU2VhcmNoPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9FeHBhbnNpb25QYW5lbFN1bW1hcnk+XHJcbiAgICAgICAgICA8RXhwYW5zaW9uUGFuZWxEZXRhaWxzPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZHZTZWFyY2hGaWxlZHNCb3h9PlxyXG4gICAgICAgICAgICAgIHtjb2x1bW5zRGF0YS5tYXAoKGNvbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2NvbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWR2U2VhcmNoRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y29sLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTXVsdGlTZWFyY2goZSwgY29sLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUZvY3VzTGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUb3VjaExpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImlzIEV4YWN0bHk/XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y29sLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVFeGFjdFNlYXJjaChlLCBjb2wuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwicHJpbWFyeSBjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5leGFjdFNlYXJjaENoZWNrQm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsRGV0YWlscz5cclxuICAgICAgICA8L0V4cGFuc2lvblBhbmVsPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbkpwVGFibGVFeHBhbnNpb25QYW5lbC5wcm90b3R5cGVzID0ge1xyXG4gIGNvbHVtbnNEYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICB0YWJsZVNldHRpbmc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBoYW5kbGVFeGFjdFNlYXJjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBoYW5kbGVNdWx0aVNlYXJjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSnBUYWJsZUV4cGFuc2lvblBhbmVsO1xyXG4iXX0=