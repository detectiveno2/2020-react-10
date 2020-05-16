import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table.js";

class App extends Component {
  render() {
    let users = [
      {first: "Mark", last:"Otto", handle:"@mdo"},
      {first: "Mark", last:"Otto", handle:"@mdo"},
      {first: "Mark", last:"Otto", handle:"@mdo"},
      {first: "Mark", last:"Otto", handle:"@mdo"}
    ]
    return (
      <div className="App">
        <Table users={users} />
      </div>
    );
  }
}

export default App;
