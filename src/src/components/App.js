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

  const columnsSetting = [
    {
      id: "id",
      isSortable: true,
      label: "User Id"
    },
    {
      id: "postId",
      isSortable: true,
      label: "Post Id"
    },
    {
      id: "name",
      isSortable: true,
      label: "Name"
    },
    {
      id: "email",
      isSortable: true,
      label: "E-mail"
    },
  ];

  const onEditClick = (data) => {
    console.log("Edit clicked");
    console.log(data);
  }

  const onRemoveClick = (data) => {
    console.log("Remove clicked");
    console.log(data);
  }

  const tableSetting = {
    tableName: "JpTable",
    globalSearch: true,
    columnsHideShowSwitch: true,
    tableMenu: true,
    multiSearch: true,
    hasEditing: true,
    hasDeleting: true,
    denseRowsSwitch: true
  };

  return (
    <div className={classes.app}>
      <Box className={classes.box}>
        <Paper className={classes.paper}>
          <JpTable
            usersData={usersData}
            columns={columnsSetting}
            onEditClick={onEditClick}
            onRemoveClick={onRemoveClick}
            tableSetting={tableSetting}
          ></JpTable>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
