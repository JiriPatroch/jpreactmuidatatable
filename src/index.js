import React from "react";
import ReactDOM from "react-dom";
import "./src/styles/index.scss";
import App from "./src/components/App";
import Appwrapper from "./src/components/Appwrapper";

ReactDOM.render(
  <Appwrapper>
    <App />
  </Appwrapper>,
  document.getElementById("root")
);
