import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import Appwrapper from "./Appwrapper";

ReactDOM.render(
  <Appwrapper>
    <App />
  </Appwrapper>,
  document.getElementById("root")
);
