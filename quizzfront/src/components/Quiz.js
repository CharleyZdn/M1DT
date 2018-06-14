import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';



class Quiz extends Component {

    
        state = {
        
        };
    
      componentDidMount() {
        
    }
      
  render() {
    return (
    <div className = "quiz">
        <div className = "question">
            <Question/>
        </div>
        <ul>
            <Answer/>
            <Answer/>
            <Answer/>
            <Answer/>
        </ul>
    </div>
    )
  }
}


export default Quiz;