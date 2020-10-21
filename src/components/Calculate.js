import React from 'react';

function Calculate(props) {
	console.log(props);
	return (
		<div className="p-2">{`${props.text} this is a ${props.performCalc} `}</div>
	);
}

export default Calculate;
