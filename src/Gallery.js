import React, { Component } from "react";
import PropTypes from "prop-types";

class Gallery extends Component {
  // State
  constructor() {
    super();
    this.state = {
      indexValue: 0,
    };
  }

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

  // Render with gallery components
  render() {
    return (
      <div>
        <div>{this.props.pictures[this.state.indexValue]}</div>
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

Gallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Gallery;
