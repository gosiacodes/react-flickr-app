import React, { Component } from "react";
import Header from "./Header";
import SearchField from "./SearchField";
import "./App.css";

class App extends Component {
  // Constructor with states
  constructor() {
    super();
    this.state = {
      pictures: [],
      indexValue: 0,
      textInput: "hamster",
    };
  }

  // Function to change text input / search word
  addTextToSearch = (textToSearch) => {
    console.log("text to search: ", textToSearch);
    this.setState({ textInput: textToSearch });
    console.log("new textInput: ", this.state.textInput);
    this.reloadImages();
  };

  // Running function
  componentDidMount() {
    this.reloadImages();
  }

  // Function to reload images with flickr API
  reloadImages = () => {
    console.log("check textInput in ReloadImages: ", this.state.textInput);
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=988636d1daac910174041e02948fd47d&tags=" +
        this.state.textInput +
        "&per_page=20&page=1&format=json&nojsoncallback=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(
        function (j) {
          //console.log(JSON.stringify(j));
          let picArray = j.photos.photo.map((pic) => {
            let srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              ".jpg";
            return (
              <img alt="malmo" className="picture-style" src={srcPath}></img>
            );
          });
          this.setState({ pictures: picArray });
        }.bind(this)
      );
  };

  // Handler to next-button
  nextHandler = () => {
    let currentIndex = this.state.indexValue;
    if (currentIndex === 9) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    this.setState({ indexValue: currentIndex });
  };

  // Handler to prev-button
  prevHandler = () => {
    let currentIndex = this.state.indexValue;
    if (currentIndex === 0) {
      currentIndex = 9;
    } else {
      currentIndex--;
    }
    this.setState({ indexValue: currentIndex });
  };

  // Render with components
  render() {
    return (
      <div className="App">
        <Header />
        <SearchField addTextToSearch={this.addTextToSearch} />
        <div>{this.state.pictures[this.state.indexValue]}</div>
        <div>
          <button onClick={this.prevHandler}>Prev</button>&nbsp;
          <button onClick={this.nextHandler}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
