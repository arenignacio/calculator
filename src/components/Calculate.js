import React from 'react';

//take input

//sort input and group numbers together while separating operators and operands

//order of operations. look for parentheses and nest problems inside problems, solve deepest nested problem first while moving up in level as each problem is solved

//send output to View

/* function Calculate(props) {
	console.log(props);
	return (
		<div className="p-2">{`${props.text} this is a ${props.performCalc}. Nothing goes here, it's just`}</div>
	);
} */

class Calculate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			equation: [],
			expression: '',
		};
	}

	componentDidMount() {}

	render() {
		<div className="p-2">{`${props.text} this is a ${props.performCalc}. Nothing goes here, it's just`}</div>;
	}
}

export default Calculate;
