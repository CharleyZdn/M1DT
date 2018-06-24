import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from 'axios';
import './Themes.css';


class Themes extends Component {

    
        state = {
         themesID : []
     
     
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
            var themesTmp = new Array();
            for (var i = 0; i < themesApi.length; i++)
            {
              themesTmp[i] = new Array(2);
            }
           
            console.log(themesApi[0]['themeName']);
            for (let i = 0; i < themesApi.length; i++) {
               themesTmp[i]['0'] = themesApi[i]['themeName'];
               themesTmp[i]['1'] = themesApi[i]['id'];
                // themesTmp.push(themesApi[i]);
                   //themes[i] = themesApi[i][1]
               
                
            }
            console.log(themesTmp);
            this.setState({
                themesID : themesTmp
            });
            console.log(this.state.themesID);
      })
      .catch(err => {
          console.log(err);
      })
    }
      
  render() {
    return (
      <div className = "themes">
      
      {
         
          this.state.themesID.map((theme, index)=>
                  
          <Link to={{
            pathname: '/quizz',
            state: {
              themesID : theme[1],
              name : theme[0]
            }
           
          }}>
          <div className = "theme" key={index}>
        <h2>{theme[0]}</h2>
          </div>
          </Link>
          )
    }
    
    </div>
    
    )
    
  }
}


export default Themes;