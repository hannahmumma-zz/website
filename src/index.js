import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./img/favicon.ico";
import App from "./components/App";
import Head from "./components/elements/Head";

ReactDOM.render(
  <BrowserRouter>
    <Head />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);