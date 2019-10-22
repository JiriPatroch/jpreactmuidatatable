import React from "react";
import PropTypes from "prop-types";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";


const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#000"
  //   },
  //   secondary: {
  //     main: "#3b3b3b"
  //   },
  //   background: {
  //     paper: "#fe8641",
  //     tablebottom: '#ffb354',
  //     default: "#ffb354",
  //   },
  //   text: {
  //     primary: "#000",
  //     secondary: "#000",
  //     hint: "#3b3b3b"
  //   },
  //   divider: "#3b3b3b"
  // },
  // overrides: {
  //   MuiIconButton: {
  //     root: {
  //       color: "#3b3b3b"
  //     }
  //   },
  //   MuiTableCell: {
  //     root: {
  //       borderBottom: "1px solid #3b3b3b"
  //     }
  //   },
  //   MuiSwitch: {
  //     switchBase: {
  //       color: "#3b3b3b",
  //     },
  //     track: {
  //       backgroundColor: "#3b3b3b",
  //     },

  //     colorSecondary: {
  //       '&$checked': {
  //         color: "#fe8641",
  //         '& + $bar': {
  //           backgroundColor: "#fe8641",
  //         },
  //         '& + $track': {
  //           backgroundColor: "#3b3b3b",
  //         }
  //       }
  //     },
  //     checked: {
  //       '& + $bar': {
  //         opacity: 1
  //       }
  //     },
  //     bar: {
  //       opacity: 1,
  //       backgroundColor: "#fe8641"
  //     },
  //   },
  // }
});

function Appwrapper({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
}

Appwrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Appwrapper;
