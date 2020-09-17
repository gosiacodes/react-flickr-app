import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchField extends Component {
  state = {
    textToSearch: "",
  };

  onChange = (e) => this.setState({ textToSearch: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTextToSearch(this.state.textToSearch);
    this.setState({ textToSearch: "" });
  };

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
          className="search-btn"
          style={{ flex: 1, marginRight: "10px" }}
        />
      </form>
    );
  }
}

SearchField.propTypes = {
  addTextToSearch: PropTypes.func.isRequired,
};

export default SearchField;
