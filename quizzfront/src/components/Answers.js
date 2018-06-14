import React from 'react';
import PropTypes from 'prop-types';
 
 
function Answers(props) {
	return (
		<li className="answerOption">
			<input
				type="radio"
				className="radioCustomButton"
				name="radioGroup"
				checked= ""
				id=""
				value=""
				disabled= ""
				
			/>
 
			<label className="radioCustomLabel" htmlFor={props.answerType}>
				{props.answerContent}
			</label>
 
		</li>
	);
}
 

 
export default Answers;