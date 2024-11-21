//components
import React, { useState } from 'react';
import View from './View';
import Keypad from './Keypad';
import _ from 'lodash';

//modules
import calculate from './helper_functions/calcPostfix';
import infixToPostfix from './helper_functions/infixToPostfix';
import '../index.scss';
import isOperator from './helper_functions/isOperator';
import isClosed from './helper_functions/isClosed';

function App() {
	const [problem, setProblem] = useState('');
	const [problemDisplay, setProblemDisplay] = useState('');
	const [isProblemHidden, setIsProblemHidden] = useState(true);
	const [sizeModifier, setSizeModifier] = useState('xxl');
	const [solution, setSolution] = useState('0');

	const hideProblem = () => {
		setIsProblemHidden(true);
		setSizeModifier('xxl');
	};

	const showProblem = () => {
		setIsProblemHidden(false);
		setSizeModifier('xl');
	};

	const closeLooseBracket = ( arr) => {
		let newArr = _.cloneDeep(arr);
		while (!isClosed(newArr)) {
			newArr.push(')');
		}

		return newArr;
	};

	//state controller function
	const solve = (newProblem, newSolution = solution) => {
		setProblem(newProblem);
		setProblemDisplay(newProblem.replace(/\*/g, 'x'));

		let newProblemArr = Array.from(newProblem);
		let solution;

		//if last character is operator, pop because it's incomplete.
		if (isOperator(newProblem.slice(-1))) {
			newProblemArr.pop();			
		} 
		
			// close parentheses if open.
		if (!isClosed(newProblemArr)) {
			newProblemArr = closeLooseBracket(newProblemArr);
		}

		solution = _getSolution(newProblemArr);
		setSolution(solution);
	};

	//initialize states
	const init = (problem, solution = 0) => {
		setProblem(problem || '');
		setProblemDisplay(problem ? problem.replace(/\*/g, 'x') : '');
		setSolution(solution);

		if (!problem) {
			hideProblem();
		} else {
			showProblem();
		}

		console.log(problem);
	};

	function _getSolution (problemArr) {
		const stringifiedProblem = problemArr.join('');
		const postFixProblem = infixToPostfix(stringifiedProblem);

		return calculate(postFixProblem);
	};

	return (
		<div className="">
			<div className="container border border-dark mt-2">
				<h2 className="pt-2 text-center">Scientific Calculator</h2>
				<View
					problem={problemDisplay}
					solution={solution}
					isProblemHidden={isProblemHidden}
					sizeModifier={sizeModifier}
				/>
				<br />
				<Keypad
					problem={problem}
					hClick={solve}
					init={init}
					solution={solution}
					hideProblem={hideProblem}
					showProblem={showProblem}
					isProblemHidden={isProblemHidden}
				/>
			</div>
			<p className="container text-right">&#169;Aren Ignacio</p>
		</div>
	);
}

export default App;
