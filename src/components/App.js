//components
import React, { useState } from 'react';
import View from './View';
import Keypad from './Keypad';

//modules
import calculate from './helper_functions/calcPostfix';
import infixToPostfix from './helper_functions/infixToPostfix';
import '../index.scss';
import isOperator from './helper_functions/isOperator';
import isEqualQty from './helper_functions/isEqualQty';

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

	const closeBracket = (open, close, arr) => {
		while (!isEqualQty(open, close, arr)) {
			arr.push(close);
		}
	};

	//state controller function
	const solve = (newProblem, newSolution = solution) => {
		setProblem(newProblem);
		setProblemDisplay(newProblem.replace(/\*/g, 'x'));

		let newProblemArr = Array.from(newProblem);

		if (calculate(infixToPostfix(newProblem)) !== 'invalid entry') {
			//if problem is clear of error, solve
			setSolution(calculate(infixToPostfix(newProblem)));
		} else if (isOperator(newProblem.slice(-1))) {
			//if last character is operator, pop and solve.
			newProblemArr.pop();
			if (isEqualQty('(', ')', newProblemArr)) {
				setSolution(calculate(infixToPostfix(newProblemArr.join(''))));
			} else {
				//close parenthese if left open after popping operator
				closeBracket('(', ')', newProblemArr);
				setSolution(calculate(infixToPostfix(newProblemArr.join(''))));
			}
		} else if (
			!isEqualQty('(', ')', newProblemArr) &&
			!isNaN(newProblem.slice(-1))
		) {
			// close parentheses if open.
			closeBracket('(', ')', newProblemArr);
			setSolution(calculate(infixToPostfix(newProblemArr.join(''))));
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
