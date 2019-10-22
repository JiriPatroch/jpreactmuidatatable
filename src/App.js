import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper } from "@material-ui/core";
//import axios from "axios";
import { usersDataApi } from "./data/usersData";
import JpMuiDatatable from "./components/jpTable/JpMuiDatatable";

import appStyles from "./styles/appStyles";

const useStyles = makeStyles(appStyles);

function App() {
  const classes = useStyles();
  const [usersData] = useState(usersDataApi);

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
  //     setUsersData(res.data);
  //   });
  // }, []);

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
          <JpMuiDatatable
            usersData={usersData}
            columns={columnsSetting}
            onEditClick={onEditClick}
            onRemoveClick={onRemoveClick}
            tableSetting={tableSetting}
          ></JpMuiDatatable>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
