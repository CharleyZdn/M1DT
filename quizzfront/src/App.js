import React, { Component } from 'react';
import axios from "axios";

import Routes from './components/Routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
  
          <h1 className="App-title">QUIZ</h1>
        </header>
        
        <Routes/>
        
      </div>
    );
  }
}

export default App;
