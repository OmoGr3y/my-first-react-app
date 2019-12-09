import React from "react";
import logo from "../src/shared/images/logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Codejobs" />
      <Content>
        <Home />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
