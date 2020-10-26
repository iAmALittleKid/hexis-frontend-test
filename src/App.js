import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Repos from "./components/Repos/Repos";
import Orgs from "./components/Orgs/Orgs";
import User from "./components/User/User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="display-box">
          <Search />
          <User />
        </div>
        <div className="display-box">
          <Repos />
        </div>
        <div className="display-box">
          <Orgs />
        </div>
      </div>
    );
  }
}

export default App;
