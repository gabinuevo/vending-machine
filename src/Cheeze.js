import React, { Component } from 'react';
import { Link } from "react-router-dom";

const CHEESE_IMG = 'https://www.naturalfoodseries.com/wp-content/uploads/2018/02/Cheese-800x416.jpg'

class Cheeze extends Component {
  render() {
    return (
      <div className="Cheeze">
         <img src={CHEESE_IMG} alt='A very cheese snack'></img> 
         <p>Go to <Link to="/">home</Link> page</p>
      </div>
    );
  }
}

export default Cheeze;



