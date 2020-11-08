import * as ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";


const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;