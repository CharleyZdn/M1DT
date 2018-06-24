import React from 'react';
 
 
function Answers(props) {
	return (
		<li className="answerOption">
			<input
				type="radio"
				className="radioCustomButton"
				name="radioGroup"
				checked= {props.rep === props.soluce}
				id=""
				value={props.rep}
				disabled={props.soluce}
				onChange={props.onAnswerSelected}
				
			/>
 
			<label className="radioCustomLabel" >
				{props.rep}
			</label>
 
		</li>
	);
}
 

 
export default Answers;