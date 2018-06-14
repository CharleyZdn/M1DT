import React, { Component } from 'react';
import axios from 'axios';
import './Themes.css';


class Themes extends Component {

    constructor(props) {
        super(props);
        this.state = {
         themes : []
        };
    
      }

      componentDidMount() {
          console.log("caca");
        axios({
            method:'get',
            url:'http://localhost:8000/api/openquizzdbs/checkthemes',
            headers: { 'content-type': 'application/json' },
            responseType:'text'
          })
          .then(res => {
            const themes = res.data;
            console.log(themes);
            this.setState({ themes });
          })
      }
      
  render() {
    return (
      <div className = "themes">
        <div className = "theme">
        { this.state.themes.map(theme => <h2>{theme}</h2>)}
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