import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import JpTableHeadCell from "./JpTableHeadCell";

import { JpTableHeadStyles } from "./styles/JpTableHeadStyles";
const useStyles = makeStyles(JpTableHeadStyles);

function JpTableHead(props) {
  const {
    columns,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    moveCard,
    tableSetting
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {columns.map((headCell, index) => (
          <JpTableHeadCell
            index={index}
            id={headCell.id}
            moveCard={moveCard}
            key={index}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.isSortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={order}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            ) : (
                <Typography
                  color="secondary"
                  variant="subtitle2"
                  className={classes.root}
                >
                  {headCell.label}
                </Typography>
              )}
          </JpTableHeadCell>
        ))}
        {tableSetting.hasEditing ? (
          <TableCell>
            <CreateIcon />
          </TableCell>
        ) : null}
        {tableSetting.hasDeleting ? (
          <TableCell>
            <DeleteSharpIcon />
          </TableCell>
        ) : null}
      </TableRow>
    </TableHead>
  );
}

JpTableHead.propTypes = {
  // columns: PropTypes.array.isRequired,
  // onSelectAllClick: PropTypes.func.isRequired,
  // order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  // orderBy: PropTypes.string.isRequired,
  // numSelected: PropTypes.number.isRequired,
  // rowCount: PropTypes.number.isRequired,
  // onRequestSort: PropTypes.func.isRequired,
  // moveCard: PropTypes.func.isRequired,
  // tebleSetting: PropTypes.object
};

export default JpTableHead;
