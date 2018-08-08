import React from "react";
import { Container } from "../Grid";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Container>
    <a className="navbar-brand" href="/">
      New York Times Search
    </a>
    <a className="navbar-brand" href="/saved">
      Saved Articles
    </a>
    </ Container>
  </nav>
);

export default Nav;
