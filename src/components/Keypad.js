import React from 'react';
import isGreaterThan from './isGreaterThan';
import isOperator from './isOperator';

/* memory buttons disabled */
/* 
TODO: keydown events for later update. Key identifiers already written in switch case.
*/

class Keypad extends React.Component {
	defaultStyle =
		'font-weight-bold btn-keypad border-grey rounded p-2 m-2 text-center btn unselectable';

	renderBtn = (arr, style, size = '2', callBack) => {
		return arr.map((el) => {
			const addToView = (event) => {
				//value props
				let problem = this.props.problem;
				const solution = this.props.solution;
				const isProblemHidden = this.props.isProblemHidden;
				let newProblemArr = Array.from(problem);
				let lastChar = newProblemArr[newProblemArr.length - 1];

				//function props
				const init = this.props.init;
				const hideProblem = this.props.hideProblem;
				const keypadChars = ['Backspace', 'Delete', 'c', 'C', '.'];

				if (
					event.key &&
					(keypadChars.includes(event.key) ||
						isOperator(event.key) ||
						!isNaN(event.key))
				) {
					el = event.key;
					console.log('key pressed ' + event.key);
				}

				switch (el) {
					case 'CE':
						return init(newProblemArr.join(''));

					case 'c':
					case 'C':
						hideProblem();
						return init();

					case '=':
						return init(0, solution);

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

							if (
								newProblemArr.length === 1 ||
								isGreaterThan(')', '(', newProblemArr)
							) {
								newProblemArr.pop();
							}
						}
						break;

					case 'Backspace':
					case 'Delete':
					case 'DEL':
						newProblemArr.pop();

						if (
							(newProblemArr.length === 1 &&
								isOperator(newProblemArr[0])) ||
							['(', ')'].includes(newProblemArr[0])
						) {
							newProblemArr.pop();
						}

						if (newProblemArr.length === 0) {
							hideProblem();
							return init();
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
							isProblemHidden
								? (newProblemArr = [solution, el])
								: newProblemArr.push(el);
						}

						break;

					case 'X':
					case 'x':
						if (isOperator(lastChar)) {
							newProblemArr.pop();
						}

						newProblemArr.push('*');
						if (isProblemHidden && solution !== '0') {
							newProblemArr = [solution, '*'];
						}

						break;

					default:
						if (isOperator(el)) {
							if (isOperator(lastChar)) {
								newProblemArr.pop();
							}

							if (isProblemHidden) {
								newProblemArr = [solution];
							}
						}
						newProblemArr.push(el);

						break;
				}

				console.log('newProblemArr: ' + newProblemArr.join(''));
				this.props.showProblem();
				this.props.hClick(newProblemArr.join(''));
			};

			document.addEventListener('keydown', addToView);

			return (
				<input
					key={el}
					type="button"
					className={`${this.defaultStyle} col-${size} ${style}`}
					value={el}
					onClick={callBack || addToView}
					onKeyDown={addToView}
				/>
			);
		});
	};

	render() {
		return (
			<div className="container m-2 mb-4">
				<div className="row justify-content-center">
					{this.renderBtn(
						['mc', 'mr', 'm+', 'm-', 'ms'],
						'btn-outline-secondary disabled',
						'1'
					)}
				</div>
				<div className="row  justify-content-center">
					{this.renderBtn(['%'], 'btn-outline-secondary')}
					{this.renderBtn(['CE'], 'btn-outline-primary font-weight-bold')}
					{this.renderBtn(['C'], 'btn-outline-primary font-weight-bold')}
					{this.renderBtn(['DEL'], 'btn-outline-danger font-weight-bold')}
				</div>
				<div className="row  justify-content-center">
					{this.renderBtn(['^', '(', ')', '/'], 'btn-outline-secondary')}
				</div>
				<div className="row  justify-content-center">
					{this.renderBtn(['7', '8', '9'], 'btn-light')}
					{this.renderBtn(['x'], 'btn-outline-secondary')}
				</div>

				<div className="row  justify-content-center">
					{this.renderBtn(['4', '5', '6'], 'btn-light')}
					{this.renderBtn(['-'], 'btn-outline-secondary')}
				</div>
				<div className="row  justify-content-center">
					{this.renderBtn(['1', '2', '3'], 'btn-light')}
					{this.renderBtn(['+'], 'btn-outline-secondary')}
				</div>
				<div className="row  justify-content-center">
					{this.renderBtn(['+/-'], 'btn-outline-secondary')}{' '}
					{/* needs logic */}
					{this.renderBtn(['0'], 'btn-light')}
					{this.renderBtn(['.', '='], 'btn-outline-secondary')}
				</div>
			</div>
		);
	}
}

export default Keypad;
