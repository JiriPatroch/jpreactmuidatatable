import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Tooltip
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import JpTableHead from "./JpTableHead";
import JpTableToolbar from "./JpTableToolbar";
import update from "immutability-helper";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";

import { JpTableStyles } from "./styles/JpTableStyles";
const useStyles = makeStyles(JpTableStyles);

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const defaultTableSetting = {
  tableName: "JpTable",
  globalSearch: true,
  hideColumns: true,
  tableMenu: true,
  multiSearch: true,
  editing: true,
  deleting: true,
  denseRowsSwitch: true
};

function JpTable({
  columns,
  usersData,
  tableSetting = { ...defaultTableSetting }
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

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = usersData.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
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
      console.log("erorr");
      // setMultiSearchTerms({
      //   id: "",
      //   name: "",
      //   postId: "",
      //   email: ""
      // });
      //setIsSearchingMulti(false);
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

    console.log(dataArray);

    console.log(data.id);
    console.log(data.name);
    console.log(data.postId);
    console.log(data.email);

    if (data.id !== null && data.id !== "" && data.id !== undefined) {
      filtered = filtered.filter(user =>
        isExactly.id
          ? user.id.toString().toLowerCase() ===
            data.id.toString().toLowerCase()
          : user.id
              .toString()
              .toLowerCase()
              .includes(data.id.toString().toLowerCase())
      );
    }

    if (data.name !== null && data.name !== "" && data.name !== undefined) {
      filtered = filtered.filter(user =>
        isExactly.name
          ? user.name.toString().toLowerCase() ===
            data.name.toString().toLowerCase()
          : user.name
              .toString()
              .toLowerCase()
              .includes(data.name.toString().toLowerCase())
      );
    }

    if (
      data.postId !== null &&
      data.postId !== "" &&
      data.postId !== undefined
    ) {
      filtered = filtered.filter(user =>
        isExactly.postId
          ? user.postId.toString().toLowerCase() ===
            data.postId.toString().toLowerCase()
          : user.postId
              .toString()
              .toLowerCase()
              .includes(data.postId.toString().toLowerCase())
      );
    }

    if (data.email !== null && data.email !== "" && data.email !== undefined) {
      filtered = filtered.filter(user =>
        isExactly.email
          ? user.email.toString().toLowerCase() ===
            data.email.toString().toLowerCase()
          : user.email
              .toString()
              .toLowerCase()
              .includes(data.email.toString().toLowerCase())
      );
    }

    if (filtered.length === dataArray.length) {
      setIsSearchingMulti(false);
    }

    console.log(filtered);
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
  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, usersData.length - page * rowsPerPage);

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

        {tableSetting.multiSearch ? (
          <ExpansionPanel defaultExpanded={true}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Advanced Search</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Box className={classes.advSearchFiledsBox}>
                {columnsData.map(col => {
                  return (
                    <div key={col.id}>
                      <TextField
                        id={col.id}
                        autoComplete="off"
                        className={classes.advSearchField}
                        label={col.label}
                        margin="dense"
                        variant="outlined"
                        onChange={e => {
                          handleMultiSearch(e, col.id);
                        }}
                      />
                      <Tooltip
                        disableFocusListener
                        disableTouchListener
                        title="is Exactly?"
                      >
                        <Checkbox
                          name={col.id}
                          onChange={e => handleExactSearch(e, col.id)}
                          inputProps={{
                            "aria-label": "primary checkbox"
                          }}
                          style={{ marginLeft: "-50px", marginTop: "7px" }}
                        />
                      </Tooltip>
                    </div>
                  );
                })}
              </Box>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ) : null}
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <JpTableHead
              classes={classes}
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
            <TableBody>
              {stableSort(
                searchSwitch(searchTerm, multiSearchTerms, usersData),
                getSorting(order, orderBy)
              )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      //onClick={event => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                          onClick={event => handleClick(event, row.id)}
                        />
                      </TableCell>
                      {columnsData.map((data, index) => {
                        return (
                          <TableCell component="th" key={index}>
                            {row[columnsData[index].id]}
                          </TableCell>
                        );
                      })}

                      {tableSetting.hasEditing ? (
                        <TableCell className={classes.tableCell}>
                          <CreateIcon
                            onClick={() => {
                              console.log(row);
                            }}
                          />
                        </TableCell>
                      ) : null}

                      {tableSetting.hasEditing ? (
                        <TableCell className={classes.tableCell}>
                          <DeleteSharpIcon
                            onClick={() => {
                              console.log(row);
                            }}
                          />
                        </TableCell>
                      ) : null}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
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
  usersData: PropTypes.array.isRequired
};

export default JpTable;
