import React, { Component } from 'react';
import { Link } from "react-router-dom";

const SWEETS_IMG = 'https://www.oyorooms.com/blog/wp-content/uploads/2018/07/shutterstock_725231338.jpg';

class SaraSweets extends Component {
  render() {
    return (
      <div className="SaraSweets">
            <img src={SWEETS_IMG} alt='Yummy sweets that Sara can visualize'></img> 
            <p>Go to <Link to="/">home</Link> page</p>
      </div>
    );
  }
}

export default SaraSweets;
