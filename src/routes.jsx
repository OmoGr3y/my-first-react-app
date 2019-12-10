import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import Notes from "./components/Notes";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/notes" component={Notes} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/notes/:noteId" component={Notes} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
