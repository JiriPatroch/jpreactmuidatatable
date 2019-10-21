import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Checkbox,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from '@material-ui/icons/Menu';
import SettingsApplicationsSharpIcon from "@material-ui/icons/SettingsApplicationsSharp";
import SearchIcon from "@material-ui/icons/Search";

import { JpTableToolbarStyles } from "./styles/JpTableToolbarStyles";

const useStyles = makeStyles(JpTableToolbarStyles);

const JpTableToolbar = ({
  numSelected,
  columns,
  handleHideShowColumn,
  handleSearch,
  tableSetting
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [columnsNames] = React.useState(columns);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
            <Typography variant="h6" id="tableTitle">
              {tableSetting.tableName}
            </Typography>
          )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
            <>
              <Box display="flex" flexDirection="row">
                {tableSetting.globalSearch ? (
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      inputProps={{ "aria-label": "search" }}
                      onChange={e => handleSearch(e)}
                    />
                  </div>
                ) : null}

                {tableSetting.columnsHideShowSwitch ? (
                  <>
                    <Tooltip title="Settings">
                      <IconButton
                        aria-label="Settings"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <SettingsApplicationsSharpIcon />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          padding: 20
                        }
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        align="center"
                        color="secondary"
                      >
                        Hide/Show Columns
                    </Typography>
                      {columnsNames.map((headCell, index) => {
                        return (
                          <Box className={classes.menuItemsBox} key={index}>
                            <MenuItem onClick={handleClose}>
                              {headCell.label}
                            </MenuItem>
                            <Checkbox
                              onClick={() => handleHideShowColumn(headCell)}
                            />
                          </Box>
                        );
                      })}
                    </Menu>
                  </>
                ) : null}

                {tableSetting.tableMenu ? (
                  <Tooltip title="Table Menu">
                    <IconButton aria-label="table menu">
                      <MenuIcon />
                    </IconButton>
                  </Tooltip>
                ) : null}
              </Box>
            </>
          )}
      </div>
    </Toolbar>
  );
};

JpTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
  handleHideShowColumn: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  tableSetting: PropTypes.object.isRequired
};

export default JpTableToolbar;
