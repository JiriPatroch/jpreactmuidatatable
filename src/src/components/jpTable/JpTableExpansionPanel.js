import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Checkbox, Tooltip } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";

import { JpTableExpansionPanelStyles } from "./styles/JpTableExpansionPanelStyles";
const useStyles = makeStyles(JpTableExpansionPanelStyles);

function JpTableExpansionPanel({
  columnsData,
  tableSetting,
  handleExactSearch,
  handleMultiSearch
}) {
  const classes = useStyles();
  return (
    <>
      {tableSetting.multiSearch ? (
        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Advanced Search</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box className={classes.advSearchFiledsBox}>
              {columnsData.map((col, index) => {
                return (
                  <div key={index}>
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
                        className={classes.exactSearchCheckBox}
                      />
                    </Tooltip>
                  </div>
                );
              })}
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ) : null}
    </>
  );
}

JpTableExpansionPanel.prototypes = {
  columnsData: PropTypes.array.isRequired,
  tableSetting: PropTypes.object.isRequired,
  handleExactSearch: PropTypes.func.isRequired,
  handleMultiSearch: PropTypes.func.isRequired
};

export default JpTableExpansionPanel;
