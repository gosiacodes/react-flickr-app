import React, { Component } from "react";
import Header from "./Header";
import SearchField from "./SearchField";
import "./App.css";

class App extends Component {
  addTextToSearch = (textToSearch) => {
    console.log("text to search: ", textToSearch);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchField addTextToSearch={this.addTextToSearch} />
        <p>Winter is coming... ;)</p>
      </div>
    );
  }
}

export default App;
