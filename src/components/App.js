import React from 'react';
import View from './View';
import Keypad from './Keypad';
import toPostfix from './infixToPostfix';
import calculate from './calcPostfix';

import '../index.scss';
import infixToPostfix from './infixToPostfix';

/* 
TODO:
-////Find a way to register keys from keypad and display them in view. something about binding function to "this" i.e. this.handleclick.bind(this) where handleclick is a function. it might be binding to parent component. see https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance
-////remove Btn component and restructure Keypad component.
# Add functionality to append key value to problem. currently, problem stays the same and appendage changes but does not add on top of one another.
 */

class App extends React.Component {
	state = {
		problem: '',
		problemDisplay: '',
		solution: '',
	};

	//state controller function
	solve = (newProblem, newSolution = this.state.solution) => {
		this.setState({ problem: newProblem });
		this.setState({ problemDisplay: newProblem.replace(/\*/g, 'x') });

		if (calculate(infixToPostfix(newProblem)) !== 'incorrect formula') {
			this.setState({ solution: calculate(infixToPostfix(newProblem)) });
		}
	};

	init = () => {
		this.setState({ problem: `` });
		this.setState({ problemDisplay: 0 });
		this.setState({ solution: 0 });
	};

	render() {
		return (
			<div className="container border border-dark mt-2">
				<h5 className="pt-2">Calculator - Aren I.</h5>
				<View
					problem={this.state.problemDisplay}
					solution={this.state.solution}
				/>
				<br />
				<Keypad
					problem={this.state.problem}
					hClick={this.solve}
					init={this.init}
					solution={this.state.solution}
				/>
			</div>
		);
	}
}

/* function App(props) {
	return (
		<div className="container border border-dark mt-2">
			<h5 className="pt-2">Calculator - Aren I.</h5>
			<View />
			<br />
			<Keypad />
		</div>
	);
} */

export default App;
