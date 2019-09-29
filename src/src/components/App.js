import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper } from "@material-ui/core";
import axios from "axios";
import JpTable from "./jpTable/JpTable";

import appStyles from "./../styles/appStyles";

const useStyles = makeStyles(appStyles);

function App() {
  const classes = useStyles();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
      setUsersData(res.data);
    });
  }, []);

  const columns = [
    {
      id: "id",
      numeric: false,
      isSortable: true,
      disablePadding: false,
      label: "User Id"
    },
    { id: "name", numeric: false, disablePadding: false, label: "Name" },
    {
      id: "postId",
      numeric: false,
      isSortable: true,
      disablePadding: false,
      label: "Post Id"
    },
    { id: "email", numeric: false, disablePadding: false, label: "Email" }
  ];

  const tableSetting = {
    tableName: "JpTable",
    globalSearch: false,
    columnsHideShowSwitch: false,
    tableMenu: false,
    multiSearch: false,
    hasEditing: false,
    hasDeleting: false,
    denseRowsSwitch: false
  };

  return (
    <div className={classes.app}>
      <Box className={classes.box}>
        <Paper className={classes.paper}>
          <JpTable
            usersData={usersData}
            columns={columns}
            //tableSetting={tableSetting}
          ></JpTable>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
