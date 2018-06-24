import React, { Component } from 'react';
import axios from 'axios';
import shuffle from 'lodash.shuffle';
import Question from './Question';
import Answers from './Answers';



class Quiz extends Component {

  constructor(props) {
    super(props);
        this.state = {
          theme : this.props.location.state.themesID,
          name:  this.props.location.state.name,
          quizzId:'',
          question:[],
          answrs:[],
          reponse:'',
          reponseUser: ''
        };
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
      }
    
        componentDidMount() {
          const themevalid =  this.state.theme;
          
          
         
          axios({
            method:'get',
            url:'http://localhost:8000/api/openquizzdbs/checkquestion/'+themevalid,
            headers: { 'content-type': 'application/json' }
          })
          .then(res => {
            var testAns = new Array();
            var testtt =  new Array();
            var soluce = '';
            for (var i = 0; i < res.data.length; i++)
            {
              testAns[i] = new Array(4);
              testtt[i]= new Array(3);
            }
           
            for (var k = 0; k < res.data.length; k++) {
              testtt[k]['0'] =  res.data[k]['quizzId'];
              testtt[k]['1'] =  res.data[k]['question'];
              testtt[k]['2'] =  res.data[k]['wiki'];
              testAns[k]['0'] = res.data[k]['prop1'];
              testAns[k]['1'] = res.data[k]['prop2'];
              testAns[k]['2'] = res.data[k]['prop3'];
              testAns[k]['3'] = res.data[k]['prop4'];
              
              testAns[k] = shuffle(testAns[k]);
              console.log(testtt);
            }
            this.setState({
              question : testtt,
              answrs : testAns,
              reponse: soluce
          });
          console.log(this.state.question);
          console.log(this.state.answrs);
        })
        .catch(err => {
          console.log(err);
        })
        }

        handleAnswerSelected(event) {
          this.setUserAnswer(event.currentTarget.value);
       
          // if (this.state.questionId < quizQuestions.length) {
          //     setTimeout(() => this.setNextQuestion(), 300);
          // } else {
          //     setTimeout(() => this.setResults(this.getResults()), 300);
          // }
        }
       
        setUserAnswer(answer) {
          // const updatedAnswersCount = update(this.state.answersCount, {
          //   [answer]: {$apply: (currentValue) => currentValue + 1}
          // });
       
          this.setState({
              // answersCount: updatedAnswersCount,
              reponseUser: answer
          });
        }
      
  render() {
    return (
    <div className = "quiz">
    <h2>Le thème que vous avez choisi est : {this.state.name}</h2>
    {
      
      this.state.question.map((question,indexo)=>
      <div>
        <div className = "question">
            <Question name={question['1']} id={question['0']}/>
         
        </div>
        <ul className='answerOptions'>
        {
          this.state.answrs[indexo].map((answer)=>
          <Answers rep={answer} soluce={question['2']} id={question['0']}/>
        
        )
          
        }
        
            
        </ul>
        </div>
        )
        
    }
    </div>
    )
  }
}


export default Quiz;