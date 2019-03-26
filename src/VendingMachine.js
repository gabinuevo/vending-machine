import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
            <h1>HI I AM A VENDING MACHINE BELOW IS EVERYTHING I HAVE</h1>
            <p>Go to <Link to="/chips">chips</Link> page</p>
            <p>Go to <Link to="/sweets">sweets</Link> page</p>
            <p>Go to <Link to="/cheeze">cheeze</Link> page</p>
      </div>
    );
  }
}

export default VendingMachine;
