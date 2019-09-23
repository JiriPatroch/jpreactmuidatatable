import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import appStyles from "./../styles/appStyles";

const useStyles = makeStyles(appStyles);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Paper> Test </Paper>
    </div>
  );
}

export default App;
