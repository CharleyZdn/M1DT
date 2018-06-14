import React, { Component } from 'react';
import axios from 'axios';
import './Themes.css';


class Themes extends Component {

    
        state = {
         themes : []
        };
    
      componentDidMount() {
          console.log("caca");
        axios({
            method:'get',
            url:'http://localhost:8000/api/openquizzdbs/checkthemes',
            headers: { 'content-type': 'application/json' }
          })
          .then(res => {
            const themesApi = res.data;
            var themesTmp = [];
            console.log(themesApi);
            for (let i = 0; i < themesApi.length; i++) {
               //themesTmp[i] = themesApi[i]['1'];
               
                 themesTmp.push(themesApi[i]['1'])
              
                   //themes[i] = themesApi[i][1]
               
                
            }
            this.setState({
                themes : themesTmp
            });
            console.log(this.state.themes);
      })
      .catch(err => {
          console.log(err);
      })
    }
      
  render() {
    return (
      <div className = "themes">
      {
          this.state.themes.map((theme, index)=>
          <div className = "theme" key={index}>
            <h2>{theme}</h2>
            <span>Label 2</span>
          </div>
          )
    }
    </div>
    )
  }
}


export default Themes;