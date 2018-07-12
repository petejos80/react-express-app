import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 125, clear: "both", paddingTop: 50, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;