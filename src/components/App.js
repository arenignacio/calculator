//components
import React, { useState } from 'react';
import View from './View';
import Keypad from './Keypad';

//dependencies
import calculate from './helper_functions/calcPostfix';
import infixToPostfix from './helper_functions/infixToPostfix';
import '../index.scss';
import isOperator from './helper_functions/isOperator';
import isClosed from './helper_functions/isClosed';
import _isSpecialChar from './helper_functions/isSpecialChar';
import _ from 'lodash';

function App() {
	const [problem, setProblem] = useState('');
	const [problemDisplay, setProblemDisplay] = useState('');
	const [isProblemHidden, setIsProblemHidden] = useState(true);
	const [sizeModifier, setSizeModifier] = useState('xxl');
	const [solution, setSolution] = useState('');

	const hideProblem = () => {
		setIsProblemHidden(true);
		setSizeModifier('xxl');
	};

	const showProblem = () => {
		setIsProblemHidden(false);
		setSizeModifier('xl');
	};

	//state controller function
	const solve = (problem) => {
		setProblem(problem);
		setProblemDisplay(problem.replace(/\*/g, 'x'));

		const PROBLEM_ARR = _cleanUpToArr(problem);
		const IS_VALID = _isValid(PROBLEM_ARR);

		let solution;

		if (IS_VALID) {
			const PROBLEM_STR = PROBLEM_ARR.join('');
			const POST_FIX_PROBLEM = infixToPostfix(PROBLEM_STR);

			solution = calculate(POST_FIX_PROBLEM);
		} else {
			solution = 'Error';
		}

		setSolution(solution);
	};

	//initialize states
	const init = (problem, solution = '') => {
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

function _isValid (INPUT_ARR) {
	for (let index = 0; index < INPUT_ARR.length; index++) {
		const CURRENT_CHAR = INPUT_ARR[index];
		const NEXT_CHAR = INPUT_ARR[index + 1];
		const PREV_CHAR = INPUT_ARR[index - 1];
		const HAS_MISSING_OPERAND = (isOperator(CURRENT_CHAR) && isOperator(NEXT_CHAR)) 
			|| (_isSpecialChar(CURRENT_CHAR) && isOperator(PREV_CHAR) && isOperator(NEXT_CHAR)) 
			|| (CURRENT_CHAR === '%' && isNaN(PREV_CHAR))
			|| INPUT_ARR.length === 0;

		//validate against missing operand
		if (HAS_MISSING_OPERAND) {
			return false;
		}
	}

	return true;
}

function _cleanUpToArr (problem) {
	const CURRENT_CHAR = problem[problem.length - 1];
	let result = Array.from(problem);

	
	//if first character is a negative, add 0 so we can deduct the numbers
	if (isOperator(result[0])) {
		result.unshift('0');
	}

	//if last character is operator, pop because it's incomplete.
	if (isOperator(CURRENT_CHAR)) {
		result.pop();
	}

	// close parentheses if open.
	if (!isClosed(result)) {
		result = _closeLooseBracket(result);
	}

	return result;
}


function _closeLooseBracket (arr) {
	let newArr = _.cloneDeep(arr);
	while (!isClosed(newArr)) {
		newArr.push(')');
	}

	return newArr;
};




export default App;
