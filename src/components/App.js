//components
import React from 'react';
import View from './View';
import Keypad from './Keypad';

//modules
import calculate from './calcPostfix';
import infixToPostfix from './infixToPostfix';
import '../index.scss';
import isOperator from './isOperator';
import isEqualQty from './isEqualQty';

/* 
TODO:
//-Find a way to register keys from keypad and display them in view. something about binding function to "this" i.e. this.handleclick.bind(this) where handleclick is a function. it might be binding to parent component. see https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance
//-remove Btn component and restructure Keypad component.
//=needs functionality for Equal sign where solution is shown and problem display is cleared but pressing an operator will add on to solution.
- 
 */

class App extends React.Component {
	state = {
		problem: '',
		problemDisplay: '',
		isProblemHidden: true,
		sizeModifier: 'xxl',
		solution: '0',
	};

	hideProblem = () => {
		this.setState({ isProblemHidden: true });
		this.setState({ sizeModifier: 'xxl' });
	};

	showProblem = () => {
		this.setState({ isProblemHidden: false });
		this.setState({ sizeModifier: 'xl' });
	};

	closeBracket = (open, close, arr) => {
		while (!isEqualQty(open, close, arr)) {
			arr.push(close);
		}
	};

	//state controller function
	solve = (newProblem, newSolution = this.state.solution) => {
		this.setState({ problem: newProblem });
		this.setState({ problemDisplay: newProblem.replace(/\*/g, 'x') });

		let newProblemArr = Array.from(newProblem);

		if (calculate(infixToPostfix(newProblem)) !== 'invalid entry') {
			//if problem is clear of error, solve
			this.setState({ solution: calculate(infixToPostfix(newProblem)) });
		} else if (isOperator(newProblem.slice(-1))) {
			//if last character is operator, pop and solve.
			newProblemArr.pop();
			if (isEqualQty('(', ')', newProblemArr)) {
				this.setState({
					solution: calculate(infixToPostfix(newProblemArr.join(''))),
				});
			} else {
				//close parenthese if left open after popping operator
				this.closeBracket('(', ')', newProblemArr);
				this.setState({
					solution: calculate(infixToPostfix(newProblemArr.join(''))),
				});
			}
		} else if (
			!isEqualQty('(', ')', newProblemArr) &&
			!isNaN(newProblem.slice(-1))
		) {
			// close parentheses if open.
			this.closeBracket('(', ')', newProblemArr);
			this.setState({
				solution: calculate(infixToPostfix(newProblemArr.join(''))),
			});
		}
	};

	init = (problem, solution = 0) => {
		this.setState({ problem: problem || '' });
		this.setState({
			problemDisplay: problem ? problem.replace(/\*/g, 'x') : '',
		});
		this.setState({ solution: solution });

		if (!problem) {
			this.hideProblem();
		} else {
			this.showProblem();
		}

		console.log(problem);
		console.log(this.state.problem);
	};

	render() {
		return (
			<div className="container border border-dark mt-2">
				<h5 className="pt-2">Calculator - Aren I.</h5>
				<View
					problem={this.state.problemDisplay}
					solution={this.state.solution}
					isProblemHidden={this.state.problemHidden}
					sizeModifier={this.state.sizeModifier}
				/>
				<br />
				<Keypad
					problem={this.state.problem}
					hClick={this.solve}
					deleteLastChar={this.deleteChar}
					init={this.init}
					solution={this.state.solution}
					hideProblem={this.hideProblem}
					showProblem={this.showProblem}
					isProblemHidden={this.state.isProblemHidden}
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
