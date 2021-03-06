import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, TableBody, TableCell, TableRow } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { MainTableContext } from "./store/store";

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

function JpTableBody({
  columnsData,
  tableSetting,
  usersData,
  searchSwitch,
  handleClick,
  onEditClick,
  onRemoveClick
}) {
  const classes = useStyles();

  //context API START
  const { state } = React.useContext(MainTableContext);
  const { order, orderBy, selected, page, rowsPerPage, searchTerm, multiSearchTerms } = state;
  //context API END

  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, usersData.length - page * rowsPerPage);

  return (
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
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={index}
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
                      onEditClick(row)
                    }}
                  />
                </TableCell>
              ) : null}

              {tableSetting.hasDeleting ? (
                <TableCell className={classes.tableCell}>
                  <DeleteSharpIcon
                    onClick={() => {
                      onRemoveClick(row)
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
  );
}

JpTableBody.prototypes = {
  columnsData: PropTypes.array.isRequired,
  tableSetting: PropTypes.object.isRequired,
  usersData: PropTypes.array.isRequired,
  searchSwitch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

export default JpTableBody;
