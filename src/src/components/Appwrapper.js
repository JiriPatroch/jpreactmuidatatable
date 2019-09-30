import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const theme = createMuiTheme();

function Appwrapper({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <CssBaseline />
          {children}
        </DndProvider>
      </ThemeProvider>
    </>
  );
}

Appwrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Appwrapper;
