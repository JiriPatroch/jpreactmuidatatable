export const JpTableExpansionPanelStyles = theme => ({
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
});
