import React from 'react';

function Answer(props) {
	return (
		<div>
			<button value={props.valueProp} onClick={props.onClick}>{props.answer}</button>
		</div>
	)
}

export default Answer;
