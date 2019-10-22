import React from "react";
import JpTable from "./components/jpTable/JpTable";


const usersData = [
  {
    "id": 1,
    "name": "Leanne Graham",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
  },
]

function App() {

  const columnsSetting = [
    {
      id: "id",
      isSortable: true,
      label: "User Id"
    },
    {
      id: "name",
      isSortable: true,
      label: "Post Id"
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
    <>
      <JpTable
        usersData={usersData}
        columns={columnsSetting}
        onEditClick={onEditClick}
        onRemoveClick={onRemoveClick}
        tableSetting={tableSetting}
      ></JpTable>
    </>
  );
}

export default App;
