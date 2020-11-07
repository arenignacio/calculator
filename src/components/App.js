import React from 'react';
import View from './View';
import Keypad from './Keypad';
import toPostfix from './infixToPostfix';
import calculate from './calcPostfix';

import '../index.scss';

/* 
TODO:
-Find a way to register keys from keypad and display them in view. something about binding function to "this" i.e. this.handleclick.bind(this) where handleclick is a function. it might be binding to parent component. see https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance

-remove Btn component and restructure Keypad component.
 */

class App extends React.Component {
	state = {
		problem: 'test-problem',
		solution: '',
	};

	handleClick = this.handleClick.bind(this);

	handleClick(key) {
		console.log('good');
		this.setState(function (state, key) {
			return {
				problem: state.problem + key,
			};
		});
	}

	render() {
		return (
			<div className="container border border-dark mt-2">
				<h5 className="pt-2">Calculator - Aren I.</h5>
				<View problem={this.state.problem} />
				<br />
				<Keypad onClick={this.handleClick} />
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
