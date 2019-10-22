"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JpTableToolbarStyles = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JpTableToolbarStyles = function JpTableToolbarStyles(theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === "light" ? {
      color: theme.palette.secondary.main,
      backgroundColor: (0, _styles.lighten)(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: "1 1 100%"
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: "0 0 auto"
    },
    menuItemsBox: {
      padding: "5px",
      display: "flex",
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between"
    },
    search: _defineProperty({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0, _styles.fade)(theme.palette.secondary.main, 0.15),
      "&:hover": {
        backgroundColor: (0, _styles.fade)(theme.palette.secondary.main, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      lineHeight: "50px"
    }, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing(3),
      width: "auto"
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: _defineProperty({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      lineHeight: "100px",
      width: "100%"
    }, theme.breakpoints.up("md"), {
      width: 200
    }),
    sectionDesktop: _defineProperty({
      display: "none"
    }, theme.breakpoints.up("md"), {
      display: "flex"
    }),
    sectionMobile: _defineProperty({
      display: "flex"
    }, theme.breakpoints.up("md"), {
      display: "none"
    })
  };
};

exports.JpTableToolbarStyles = JpTableToolbarStyles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2pwVGFibGUvc3R5bGVzL0pwVGFibGVUb29sYmFyU3R5bGVzLmpzIl0sIm5hbWVzIjpbIkpwVGFibGVUb29sYmFyU3R5bGVzIiwidGhlbWUiLCJyb290IiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwicGFkZGluZ1JpZ2h0IiwiaGlnaGxpZ2h0IiwicGFsZXR0ZSIsInR5cGUiLCJjb2xvciIsInNlY29uZGFyeSIsIm1haW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsInRleHQiLCJwcmltYXJ5IiwiZGFyayIsInNwYWNlciIsImZsZXgiLCJhY3Rpb25zIiwidGl0bGUiLCJtZW51SXRlbXNCb3giLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImxpbmVIZWlnaHQiLCJicmVha3BvaW50cyIsInVwIiwic2VhcmNoSWNvbiIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJhbGlnbkl0ZW1zIiwiaW5wdXRSb290IiwiaW5wdXRJbnB1dCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsInNlY3Rpb25EZXNrdG9wIiwic2VjdGlvbk1vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBR08sSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUM1Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLFdBQVcsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURUO0FBRUpDLE1BQUFBLFlBQVksRUFBRUosS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUZWLEtBRHNDO0FBSzVDRSxJQUFBQSxTQUFTLEVBQ1BMLEtBQUssQ0FBQ00sT0FB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SjtBQUlSRCxNQUFBQSxLQUFLLEVBQUU7QUFKQyxPQUtQL0IsS0FBSyxDQUFDaUMsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FMTyxFQUtzQjtBQUM1QkgsTUFBQUEsS0FBSyxFQUFFO0FBRHFCLEtBTHRCLENBM0RrQztBQW9FNUNhLElBQUFBLGNBQWM7QUFDWnRCLE1BQUFBLE9BQU8sRUFBRTtBQURHLE9BRVh0QixLQUFLLENBQUNpQyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZXLEVBRWtCO0FBQzVCWixNQUFBQSxPQUFPLEVBQUU7QUFEbUIsS0FGbEIsQ0FwRThCO0FBMEU1Q3VCLElBQUFBLGFBQWE7QUFDWHZCLE1BQUFBLE9BQU8sRUFBRTtBQURFLE9BRVZ0QixLQUFLLENBQUNpQyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZVLEVBRW1CO0FBQzVCWixNQUFBQSxPQUFPLEVBQUU7QUFEbUIsS0FGbkI7QUExRStCLEdBQUw7QUFBQSxDQUFsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpZ2h0ZW4gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IGZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSnBUYWJsZVRvb2xiYXJTdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpXHJcbiAgfSxcclxuICBoaWdobGlnaHQ6XHJcbiAgICB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwibGlnaHRcIlxyXG4gICAgICA/IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LCAwLjg1KVxyXG4gICAgICAgIH1cclxuICAgICAgOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmtcclxuICAgICAgICB9LFxyXG4gIHNwYWNlcjoge1xyXG4gICAgZmxleDogXCIxIDEgMTAwJVwiXHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXg6IFwiMCAwIGF1dG9cIlxyXG4gIH0sXHJcbiAgbWVudUl0ZW1zQm94OiB7XHJcbiAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgZmxleDogMSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIlxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiwgMC4xNSksXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiwgMC4yNSlcclxuICAgIH0sXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjUwcHhcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICB3aWR0aDogXCJhdXRvXCJcclxuICAgIH1cclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCA3KSxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIpLFxyXG4gICAgbGluZUhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHdpZHRoOiAyMDBcclxuICAgIH1cclxuICB9LFxyXG4gIHNlY3Rpb25EZXNrdG9wOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VjdGlvbk1vYmlsZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCJcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=