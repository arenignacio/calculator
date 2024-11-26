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
	const solve = (problem) => {
		setProblem(problem);
		setProblemDisplay(problem.replace(/\*/g, 'x'));

		const CURRENT_CHAR = problem[problem.length - 1];
		
		let problemArr = Array.from(problem);
		let solution;

		//if last character is operator, pop because it's incomplete.
		if (isOperator(CURRENT_CHAR)) {
			problemArr.pop();			
		}

		// close parentheses if open.
		if (!isClosed(problemArr)) {
			problemArr = closeLooseBracket(problemArr);
		}

		const stringifiedProblem = problemArr.join('');
		const validPostFixProblem = infixToPostfix(stringifiedProblem);

		if (validPostFixProblem) {
			solution = calculate(validPostFixProblem);
			setSolution(solution);
		}		
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
