import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

//const theme = createMuiTheme(Theme);

function Appwrapper({ children }) {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
}

Appwrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Appwrapper;
