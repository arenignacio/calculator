import React, { useEffect, useRef } from 'react';
import isGreaterThan from './helper_functions/isGreaterThan';
import isOperator from './helper_functions/isOperator';

/* memory buttons disabled */
/* 
TODO: 

// - keydown events for later update. Key identifiers already written in switch case.
// -addToView function moved to global. needs refactoring for renderbtn function to use addToView. 

-keydown event does not stack. button click does.
*/

const Keypad = ({
	showProblem,
	hClick,
	problem,
	solution,
	isProblemHidden,
	init,
	hideProblem,
}) => {
	//NOTE: addToView now has parameter. older version did not use an argument.

	const ref = useRef();

	const addToView = (el) => {
		console.log(`el is ${el}`);
		console.log(`problem is ${problem}`);

		//value props
		const appSolution = solution;
		const appisProblemHidden = isProblemHidden;
		let newProblemArr = Array.from(problem);
		let lastChar = newProblemArr[newProblemArr.length - 1];

		//function props
		const appInit = init;
		const apphideProblem = hideProblem;

		switch (el) {
			case 'CE':
				return appInit(newProblemArr.join(''));

			case 'c':
			case 'C':
				apphideProblem();
				return appInit();

			case '=':
			case 'Enter':
				return appInit(0, appSolution);

			case 'mc':
			case 'mr':
			case 'm+':
			case 'm-':
			case 'ms':
				return;
			case '+/-':
				if (newProblemArr[0] === '-') {
					newProblemArr.shift();
					newProblemArr.unshift('+');
				} else if (newProblemArr[0] === '+') {
					newProblemArr.shift();
					newProblemArr.unshift('-');
				}

				if (!isNaN(newProblemArr[0])) {
					newProblemArr.unshift('+');
				}

				break;

			case ')':
				if (lastChar !== '(') {
					newProblemArr.push(')');

					if (newProblemArr.length === 1 || isGreaterThan(')', '(', newProblemArr)) {
						newProblemArr.pop();
					}
				}
				break;

			case 'Backspace':
			case 'Delete':
			case 'DEL':
				newProblemArr.pop();

				if (
					newProblemArr.length === 1 &&
					(isOperator(newProblemArr[0]) ||
						['(', ')'].includes(newProblemArr[0]))
				) {
					newProblemArr.pop();
				}

				if (newProblemArr.length === 0) {
					apphideProblem();
					return appInit();
				}

				break;

			case '.':
				if (isOperator(lastChar) || lastChar === '.') {
					newProblemArr.pop();
				}

				//prevent two decimals in one number
				const stack = newProblemArr.filter(
					(el) => isOperator(el) || ['(', ')', '.'].includes(el)
				);
				stack.push(el);
				const stackStr = stack.join('');

				if (!stackStr.includes('..')) {
					appisProblemHidden
						? (newProblemArr = [appSolution, el])
						: newProblemArr.push(el);
				}

				break;

			case 'X':
			case 'x':
				if (isOperator(lastChar)) {
					newProblemArr.pop();
				}

				newProblemArr.push('*');
				if (appisProblemHidden && appSolution !== '0') {
					newProblemArr = [appSolution, '*'];
				}

				break;

			default:
				if (isOperator(el)) {
					if (isOperator(lastChar)) {
						newProblemArr.pop();
					}

					if (appisProblemHidden) {
						newProblemArr = [appSolution];
					}
				}
				newProblemArr.push(el);

				break;
		}

		console.log('newProblemArr: ' + newProblemArr.join(''));
		showProblem();
		hClick(newProblemArr.join(''));
	};

	const pressEffect = (key) => {
		switch (key) {
			case 'Backspace':
			case 'Delete':
				key = 'DEL';
				break;
			case 'Enter':
				key = '=';
				break;
			case '*':
				key = 'x';
				break;
			case 'c':
				key = 'C';
				break;
			default:
				break;
		}

		try {
			const selectedNode = document.getElementById(key);
			selectedNode.focus();
	
			setTimeout(() => {
				selectedNode.blur();
			}, 150);
		} catch (e) {
			return;
		}

	
	};

	useEffect(() => {
		const handleKeydown = (event) => {
			const keypadChars = [
				'Backspace',
				'Delete',
				'c',
				'C',
				'.',
				'=',
				'Enter',
				'(',
				')',
			];

			let { key } = event;

			if (keypadChars.includes(key) || isOperator(key) || !isNaN(key)) {
				console.log('key pressed ' + key);

				pressEffect(key);
				addToView(key);
			}
		};

		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	const defaultStyle =
		'font-weight-bold btn-keypad border-grey rounded p-2 m-2 text-center btn unselectable';

	const renderBtn = (arr, style, size = '2', callBack) => {
		return arr.map((el) => {
			const callAddToView = () => {
				//unfocus on button after 300ms
				setTimeout(() => {
					document.getElementById(el).blur();
				}, 300);

				//calculate then add to view
				addToView(el);
			};

			return (
				<input key={el} id={el} type="button" className={`${defaultStyle} col-${size} ${style}`} value={el} onClick={callBack || callAddToView}/>
			);
		});
	};

	return (
		<div ref={ref} className="container m-2 mb-4">
			<div className="row justify-content-center">
				{renderBtn(['mc', 'mr', 'm+', 'm-', 'ms'], 'btn-outline-secondary disabled', '1')}
			</div>
			<div className="row  justify-content-center">
				{renderBtn(['%'], 'btn-outline-secondary')}
				{renderBtn(['CE'], 'btn-outline-primary font-weight-bold')}
				{renderBtn(['C'], 'btn-outline-primary font-weight-bold')}
				{renderBtn(['DEL'], 'btn-outline-danger font-weight-bold')}
			</div>
			<div className="row  justify-content-center">
				{renderBtn(['^', '(', ')', '/'], 'btn-outline-secondary')}
			</div>
			<div className="row  justify-content-center">
				{renderBtn(['7', '8', '9'], 'btn-light')}
				{renderBtn(['x'], 'btn-outline-secondary')}
			</div>

			<div className="row  justify-content-center">
				{renderBtn(['4', '5', '6'], 'btn-light')}
				{renderBtn(['-'], 'btn-outline-secondary')}
			</div>
			<div className="row  justify-content-center">
				{renderBtn(['1', '2', '3'], 'btn-light')}
				{renderBtn(['+'], 'btn-outline-secondary')}
			</div>
			<div className="row  justify-content-center">
				{renderBtn(['+/-'], 'btn-outline-secondary')} {/* needs logic */}
				{renderBtn(['0'], 'btn-light')}
				{renderBtn(['.', '='], 'btn-outline-secondary')}
			</div>
		</div>
	);
};

export default Keypad;
