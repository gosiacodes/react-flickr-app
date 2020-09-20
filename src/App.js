import React, { Component } from "react";
import Header from "./Header";
import SearchField from "./SearchField";
import Gallery from "./Gallery";
import "./App.css";

class App extends Component {
  // Constructor with states
  constructor() {
    super();
    this.state = {
      pictures: [],
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

  // Render with components
  render() {
    return (
      <div className="App">
        <Header />
        <SearchField reloadImages={this.reloadImages} />
        <Gallery pictures={this.state.pictures} />
      </div>
    );
  }
}

export default App;
