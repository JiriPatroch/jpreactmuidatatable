const appstyles = theme => ({
  app: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "lightGrey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    position: "relative",
    minHeight: "80vh",
    minWidth: "80vw"
  },
  paper: {
    padding: "24px",
    backgroundColor: theme.palette.background.tablebottom
  }
});

export default appstyles;
