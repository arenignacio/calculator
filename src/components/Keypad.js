import React from 'react';
import infixToPostfix from './infixToPostfix';
import isEqualQty from './isEqualQty';
import isOperator from './isOperator';

/* memory buttons disabled */

class Keypad extends React.Component {
	constructor(props) {
		super(props);

		state: {
		}
	}

	defaultStyle =
		'btn-keypad border border-black rounded p-2 m-2 text-center btn unselectable';

	renderBtn = (arr, style, size = '2', callBack) => {
		return arr.map((el) => {
			const addToView = () => {
				//value props
				let problem = this.props.problem;
				const solution = this.props.solution;
				const isProblemHidden = this.props.isProblemHidden;

				//function props
				const hClick = this.props.hClick;
				const init = this.props.init;
				const hideProblem = this.props.hideProblem;

				let newProblem = problem + el;
				let newProblemArr = Array.from(problem);

				switch (el) {
					case 'CE':
						return init(problem);

					case 'C':
						hideProblem();
						return init();

					case 'mc':
					case 'mr':
					case 'm+':
					case 'm-':
					case 'ms':
						hideProblem();
						return init(0, solution);
					case '+/-':
						if (newProblemArr[0] === '-') {
							newProblemArr.shift();
							newProblemArr.unshift('+');
							return hClick(newProblemArr.join(''));
						} else if (newProblemArr[0] === '+') {
							newProblemArr.shift();
							newProblemArr.unshift('-');
							return hClick(newProblemArr.join(''));
						} else if (!isNaN(newProblemArr[0])) {
							newProblemArr.unshift('+');
							return hClick(newProblemArr.join(''));
						}
						return;

					case ')':
						if (newProblem.includes('()')) {
							return hClick(problem);
						}
						break;
					case 'DEL':
						//copy this.props.problem to array and pop last element
						newProblemArr.pop();
						//return mutated copy of problem into hClick
						if (newProblemArr.length === 0) {
							hideProblem();
							return init();
						} else {
							return hClick(newProblemArr.join(''));
						}
					case '=': //needs more logic
						return init(0, solution);

					case 'x':
						if (isOperator(newProblemArr.pop())) {
							problem = newProblemArr.join('');
						}
						isProblemHidden
							? (newProblem = solution + '*')
							: (newProblem = problem + '*');
						break;
					default:
						if (isOperator(el)) {
							if (isOperator(newProblemArr.pop())) {
								problem = newProblemArr.join('');
								console.log(newProblemArr);
							}
							isProblemHidden
								? (newProblem = solution + el)
								: (newProblem = problem + el);
						}
				}

				console.log('newProblem: ' + newProblem);
				this.props.showProblem();
				this.props.hClick(newProblem);
			};

			return (
				<input
					key={el}
					type="button"
					className={`${this.defaultStyle} col-${size} ${style}`}
					value={el}
					onClick={callBack || addToView}
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
					{this.renderBtn(['+/-'], 'btn-outline-secondary disabled')}{' '}
					{/* needs logic */}
					{this.renderBtn(['0'], 'btn-light')}
					{this.renderBtn(['.', '='], 'btn-outline-secondary')}
				</div>
			</div>
		);
	}
}

export default Keypad;
