import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper } from "@material-ui/core";
import JpTable from "./jpTable/JpTable";
import appStyles from "./../styles/appStyles";
import axios from "axios";

const useStyles = makeStyles(appStyles);

function App() {
  const classes = useStyles();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      console.log(res.data);
      setUsersData(res.data);
    });
  }, []);

  const columns = ["id", "name", "username", "email"];

  return (
    <div className={classes.app}>
      <Box className={classes.box}>
        <Paper className={classes.paper}>
          <JpTable usersData={usersData} columns={columns}></JpTable>
        </Paper>
      </Box>
    </div>
  );
}

App.propTypes = {};

export default App;
