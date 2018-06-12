import React, { Component } from 'react';
import './Themes.css';


class Themes extends Component {
  render() {
    return (
      <div className = "themes">
        <div className = "theme">
            <h2>Thème 1</h2>
            <span>Label 1</span>
        </div>
        <div className = "theme">
            <h2>Thème 2</h2>
            <span>Label 2</span>
        </div>
        <div className = "theme">
            <h2>Thème 3</h2>
            <span>Label 3</span>
        </div>
        <div className = "theme">
            <h2>Thème 4</h2>
            <span>Label 4</span>
        </div>
        <div className = "theme">
            <h2>Thème 5</h2>
            <span>Label 5</span>
        </div>
        <div className = "theme">
            <h2>Thème 6</h2>
            <span>Label 6</span>
        </div>
      </div>
    )
  }
}


export default Themes;