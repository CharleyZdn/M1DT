import React, { Component } from 'react';
import axios from 'axios';
 
 
class Question extends Component {
	state = {
		question : "",
		quizz_id : ""
	   };
   
	
   render(){
	return (
		<h2 className="question">{this.state.question}</h2>
	
		);
	}
}
 
export default Question;