import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: "bold",
      color: "blue"
    };
    return (
        <nav>
          <NavLink exact to="/"
            activeStyle={activeStyle}>Home</NavLink>
          <NavLink exact to="/chips"
            activeStyle={activeStyle}>chips</NavLink>
          <NavLink exact to="/sweets"
            activeStyle={activeStyle}>sweets</NavLink>
          <NavLink exact to="/cheeze"
            activeStyle={activeStyle}>cheeze</NavLink>  
        </nav>
    );
  }
}

export default NavBar;
