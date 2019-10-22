import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import JpTableMain from "./JpTableMain";
import StoreProvider from "./store/store"
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";


/**
|--------------------------------------------------
| Default Table setting START
|--------------------------------------------------
*/
const defaultTableSetting = {
  tableName: "JpTable",
  globalSearch: false,
  columnsHideShowSwitch: false,
  tableMenu: false,
  multiSearch: false,
  hasEditing: false,
  hasDeleting: false,
  denseRowsSwitch: false
};
/**
|--------------------------------------------------
| Default Table setting END
|--------------------------------------------------
*/

function JpMuiDatatable({
  columns = [],
  usersData = [],
  tableSetting = { ...defaultTableSetting },
  onEditClick = () => { },
  onRemoveClick = () => { }
}) {

  return (
    <StoreProvider>
      <DndProvider backend={HTML5Backend}>
        <CssBaseline />
        <JpTableMain
          usersData={usersData}
          columns={columns}
          onEditClick={onEditClick}
          onRemoveClick={onRemoveClick}
          tableSetting={tableSetting} />
      </DndProvider>
    </StoreProvider>
  );
}

JpMuiDatatable.prototypes = {
  columns: PropTypes.array.isRequired,
  usersData: PropTypes.array.isRequired,
  tableSetting: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func
};

export default JpMuiDatatable;
