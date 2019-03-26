import React, { Component } from 'react';
import { Link } from "react-router-dom";

const CHIP_IMG = 'http://images.summitmedia-digital.com/yummyph/images/2013/main/0412_Mediterranean-Gabi-Chips_main.jpg';

class GabiChips extends Component {
  render() {
    return (
      <div className="GabiChips">
         <img src={CHIP_IMG} alt='Yummy chips that Sara can visualize'></img> 
         <p>Go to <Link to="/">home</Link> page</p>
      </div>
    );
  }
}

export default GabiChips;
