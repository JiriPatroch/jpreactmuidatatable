"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JpTableExpansionPanelStyles = void 0;

var JpTableExpansionPanelStyles = function JpTableExpansionPanelStyles(theme) {
  return {
    advSearchFiledsBox: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between"
    },
    advSearchField: {
      "& label.Mui-focused": {
        color: theme.palette.secondary.main
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: theme.palette.secondary.main
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgba(0, 0, 0, 0.23)"
        },
        "&:hover fieldset": {
          borderColor: theme.palette.secondary.main
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.secondary.main
        }
      }
    },
    exactSearchCheckBox: {
      marginLeft: "-50px",
      marginTop: "7px"
    }
  };
};

exports.JpTableExpansionPanelStyles = JpTableExpansionPanelStyles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2pwVGFibGUvc3R5bGVzL0pwVGFibGVFeHBhbnNpb25QYW5lbFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJKcFRhYmxlRXhwYW5zaW9uUGFuZWxTdHlsZXMiLCJ0aGVtZSIsImFkdlNlYXJjaEZpbGVkc0JveCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwiYWR2U2VhcmNoRmllbGQiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJDb2xvciIsImV4YWN0U2VhcmNoQ2hlY2tCb3giLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuREMsSUFBQUEsa0JBQWtCLEVBQUU7QUFDbEJDLE1BQUFBLEtBQUssRUFBRSxNQURXO0FBRWxCQyxNQUFBQSxPQUFPLEVBQUUsTUFGUztBQUdsQkMsTUFBQUEsYUFBYSxFQUFFLEtBSEc7QUFJbEJDLE1BQUFBLFFBQVEsRUFBRSxNQUpRO0FBS2xCQyxNQUFBQSxjQUFjLEVBQUU7QUFMRSxLQUQrQjtBQVFuREMsSUFBQUEsY0FBYyxFQUFFO0FBQ2QsNkJBQXVCO0FBQ3JCQyxRQUFBQSxLQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjQyxTQUFkLENBQXdCQztBQURWLE9BRFQ7QUFJZCxxQ0FBK0I7QUFDN0JDLFFBQUFBLGlCQUFpQixFQUFFWixLQUFLLENBQUNTLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QkM7QUFEZCxPQUpqQjtBQU9kLGtDQUE0QjtBQUMxQixzQkFBYztBQUNaRSxVQUFBQSxXQUFXLEVBQUU7QUFERCxTQURZO0FBSTFCLDRCQUFvQjtBQUNsQkEsVUFBQUEsV0FBVyxFQUFFYixLQUFLLENBQUNTLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QkM7QUFEbkIsU0FKTTtBQU8xQixrQ0FBMEI7QUFDeEJFLFVBQUFBLFdBQVcsRUFBRWIsS0FBSyxDQUFDUyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDO0FBRGI7QUFQQTtBQVBkLEtBUm1DO0FBMkJuREcsSUFBQUEsbUJBQW1CLEVBQUU7QUFDbkJDLE1BQUFBLFVBQVUsRUFBRSxPQURPO0FBRW5CQyxNQUFBQSxTQUFTLEVBQUU7QUFGUTtBQTNCOEIsR0FBTDtBQUFBLENBQXpDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEpwVGFibGVFeHBhbnNpb25QYW5lbFN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgYWR2U2VhcmNoRmlsZWRzQm94OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJcclxuICB9LFxyXG4gIGFkdlNlYXJjaEZpZWxkOiB7XHJcbiAgICBcIiYgbGFiZWwuTXVpLWZvY3VzZWRcIjoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxyXG4gICAgfSxcclxuICAgIFwiJiAuTXVpSW5wdXQtdW5kZXJsaW5lOmFmdGVyXCI6IHtcclxuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cclxuICAgIH0sXHJcbiAgICBcIiYgLk11aU91dGxpbmVkSW5wdXQtcm9vdFwiOiB7XHJcbiAgICAgIFwiJiBmaWVsZHNldFwiOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjIzKVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJjpob3ZlciBmaWVsZHNldFwiOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cclxuICAgICAgfSxcclxuICAgICAgXCImLk11aS1mb2N1c2VkIGZpZWxkc2V0XCI6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBleGFjdFNlYXJjaENoZWNrQm94OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIi01MHB4XCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiN3B4XCJcclxuICB9XHJcbn0pO1xyXG4iXX0=