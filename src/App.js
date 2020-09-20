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
      textToSearch: "hamster",
    };
  }

  // Running function after component did mount
  componentDidMount() {
    this.reloadImages(this.state.textToSearch);
  }

  // Function to reload images with flickr API
  reloadImages = (textToSearch) => {
    console.log("text to search: ", textToSearch);
    if (textToSearch === "") {
      alert("Write text to search!");
    } else {
      fetch(
        "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=988636d1daac910174041e02948fd47d&tags=" +
          textToSearch +
          "&per_page=20&page=1&format=json&nojsoncallback=1"
      )
        .then(function (response) {
          return response.json();
        })
        .then(
          function (j) {
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
                <img alt="pic" className="picture-style" src={srcPath}></img>
              );
            });
            this.setState({ pictures: picArray });
          }.bind(this)
        );
    }
  };

  // Handler to next-button
  nextHandler = () => {
    let currentIndex = this.state.indexValue;
    if (currentIndex === 19) {
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
      currentIndex = 19;
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
        <SearchField reloadImages={this.reloadImages} />
        <div>{this.state.pictures[this.state.indexValue]}</div>
        <div>
          <button className="btn" onClick={this.prevHandler}>
            Prev
          </button>
          &nbsp;
          <button className="btn" onClick={this.nextHandler}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
