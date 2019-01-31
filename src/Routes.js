import React from "react";
import { Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { createBrowserHistory } from "history";

export default function Routes() {
  return (
    <Router history={createBrowserHistory({})}>
      <Route component={Layout} path="/" exact />
    </Router>
  );
}
