import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Flickr App</h1>
    </header>
  );
}

const headerStyle = {
  background: "LightSeaGreen",
  color: "white",
  textAlign: "center",
  padding: "10px",
  marginLeft: "10px",
  marginRight: "10px",
};

export default Header;
