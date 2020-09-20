import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchField extends Component {
  // State
  constructor() {
    super();
    this.state = {
      textToSearch: "",
    };
  }

  // Function on change
  onChange = (e) => this.setState({ textToSearch: e.target.value });

  // Function on submit
  onSubmit = (e) => {
    e.preventDefault();
    this.props.reloadImages(this.state.textToSearch);
    this.setState({ textToSearch: "" });
  };

  // Render with input components
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="textToSearch"
          style={{ flex: "10", padding: "5px", marginLeft: "10px" }}
          placeholder="Search flickr for photos..."
          value={this.state.textToSearch}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn"
          style={{ flex: 1, marginRight: "10px" }}
        />
      </form>
    );
  }
}

SearchField.propTypes = {
  reloadImages: PropTypes.func.isRequired,
};

export default SearchField;
