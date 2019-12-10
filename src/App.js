import React, { Children } from "react";
import logo from "../src/shared/images/logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import { element } from "prop-types";

function App({ children }) {
  return (
    <div className="App">
      <Header title="Routing" />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: element
};

export default App;
