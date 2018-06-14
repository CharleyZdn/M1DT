import React, { Component } from 'react';
import axios from "axios";

import Routes from './components/Routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    axios
  .get("http://localhost:8000/api/openquizzdbs")
  .then(function(response) {
  //  console.log(response);
  })
  .catch(function(error) {
    console.log(error);
    console.log("caca");
  });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Routes/>
        
      </div>
    );
  }
}

export default App;
