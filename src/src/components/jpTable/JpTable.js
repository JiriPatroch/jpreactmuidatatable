import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TablePagination
} from "@material-ui/core";
import JpTableHead from "./JpTableHead";
import JpTableToolbar from "./JpTableToolbar";
import JpTableBody from "./JpTableBody";
import JpTableExpansionPanel from "./JpTableExpansionPanel";
import update from "immutability-helper";

import { JpTableStyles } from "./styles/JpTableStyles";
const useStyles = makeStyles(JpTableStyles);


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

function JpTable({
  columns,
  usersData,
  tableSetting = { ...defaultTableSetting },
  onEditClick,
  onRemoveClick
}) {
  const classes = useStyles();
  const [columnsData, setColumnsData] = React.useState(columns);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [isSearchingMulti, setIsSearchingMulti] = React.useState(false);
  const [multiSearchTerms, setMultiSearchTerms] = React.useState({});
  const [isExactly, setIsExactly] = React.useState({});

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  }

  function handleClick(event, name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = usersData.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleChangeDense(event) {
    setDense(event.target.checked);
  }

  function handleHideShowColumn(columnObj) {
    let isItemInArray;

    columnsData.forEach(element => {
      if (element.id === columnObj.id) {
        isItemInArray = true;
      } else {
        return;
      }
    });

    if (isItemInArray) {
      setColumnsData(columnsData.filter(item => item.id !== columnObj.id));
    } else {
      setColumnsData([...columnsData, columnObj]);
    }
  }

  function handleSearch(e) {
    setIsSearchingMulti(false);
    if (e.target.value !== null && e.target.value !== "") {
      setSearchTerm(e.target.value);
      setPage(0);
      setIsSearching(true);
    } else {
      setSearchTerm("");
      setIsSearching(false);
    }
  }

  function handleMultiSearch(e, colId) {
    setIsSearching(false);
    if (e.target.value !== null) {
      setMultiSearchTerms({
        ...multiSearchTerms,
        [colId]: e.target.value
      });
      setPage(0);
      setIsSearchingMulti(true);
    } else {
      setMultiSearchTerms({});
      setIsSearchingMulti(false);
    }
  }

  function searchSwitch(term, data, dataArray) {
    if (isSearching) {
      return searchTermFullText(term, dataArray);
    } else if (isSearchingMulti) {
      return searchMultiTerms(data, dataArray);
    } else {
      return dataArray;
    }
  }

  function searchTermFullText(term, dataArray) {
    let filteredData = [];

    if (term !== null && term !== "") {
      dataArray.forEach(user => {
        columnsData.forEach(col => {
          if (
            user[col.id]
              .toString()
              .toLowerCase()
              .includes(term.toString().toLowerCase())
          ) {
            if (filteredData.findIndex(i => i.id === user.id) > -1) {
              return dataArray;
            } else {
              filteredData.push(user);
            }
          } else {
            return dataArray;
          }
        });
      });
      return filteredData;
    } else {
      return dataArray;
    }
  }

  function searchMultiTerms(data, dataArray) {
    let filtered = dataArray;

    columnsData.forEach(col => {
      if (
        data[col.id] !== null &&
        data[col.id] !== "" &&
        data[col.id] !== undefined
      ) {
        filtered = filtered.filter(user =>
          isExactly[col.id]
            ? user[col.id].toString().toLowerCase() ===
            data[col.id].toString().toLowerCase()
            : user[col.id]
              .toString()
              .toLowerCase()
              .includes(data[col.id].toString().toLowerCase())
        );
      }
    });

    return filtered;
  }

  function handleExactSearch(e, colId) {
    if (e.target.checked === true) {
      setIsExactly({
        ...isExactly,
        [e.target.name]: true
      });
    } else {
      setIsExactly({
        ...isExactly,
        [e.target.name]: false
      });
    }
  }

  const moveCard = (dragIndex, hoverIndex) => {
    let dragCard = columnsData[dragIndex];
    setColumnsData(
      update(columnsData, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <JpTableToolbar
          numSelected={selected.length}
          columns={columnsData}
          handleHideShowColumn={handleHideShowColumn}
          handleSearch={handleSearch}
          tableSetting={tableSetting}
        />

        <JpTableExpansionPanel
          columnsData={columnsData}
          tableSetting={tableSetting}
          handleMultiSearch={handleMultiSearch}
          handleExactSearch={handleExactSearch}
        />

        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <JpTableHead
              columns={columnsData}
              moveCard={moveCard}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={usersData.length}
              tableSetting={tableSetting}
            />
            <JpTableBody
              columnsData={columnsData}
              order={order}
              orderBy={orderBy}
              selected={selected}
              page={page}
              rowsPerPage={rowsPerPage}
              tableSetting={tableSetting}
              usersData={usersData}
              searchTerm={searchTerm}
              searchSwitch={searchSwitch}
              handleClick={handleClick}
              multiSearchTerms={multiSearchTerms}
              onEditClick={onEditClick}
              onRemoveClick={onRemoveClick}
            />
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={
            isSearching
              ? searchTermFullText(searchTerm, usersData).length
              : isSearchingMulti
                ? searchMultiTerms(multiSearchTerms, usersData).length
                : usersData.length
          }
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {tableSetting.denseRowsSwitch ? (
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      ) : null}
    </div>
  );
}

JpTable.prototypes = {
  columns: PropTypes.array.isRequired,
  usersData: PropTypes.array.isRequired,
  tableSetting: PropTypes.object
};

export default JpTable;
