import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';
import Answers from './Answers';



class Quiz extends Component {

  constructor(props) {
    super(props);
        this.state = {
          theme : props.location.testvalue,
          quizzId:'',
          question:'',
          prop1:'',
          prop2:'',
          prop3:'',
          prop4:'',
          reponse:'',

        
        };
        console.log(props);
      }
    
        componentDidMount() {
          console.log("coucu "+this.state.theme);
          axios({
            method:'get',
            url:'http://localhost:8000/api/openquizzdbs/checkquestion',
            headers: { 'content-type': 'application/json' }
          })
          .then(res => {
           console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
        }
      
  render() {
    return (
    <div className = "quiz">
        <div className = "question">
            <Question/>
        </div>
        <ul>
            <Answers/>
            <Answers/>
            <Answers/>
            <Answers/>
        </ul>
    </div>
    )
  }
}


export default Quiz;