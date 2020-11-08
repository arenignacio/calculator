import React from 'react';
import Btn from './Btn';

/* memory buttons disabled */

class Keypad extends React.Component {
	constructor(props) {
		super(props);

		state: {
		}
	}

	defaultStyle =
		'btn-keypad border border-black rounded p-2 m-2 text-center btn unselectable';

	renderBtn = (arr, style, size = '2') => {
		return arr.map((el) => {
			const newProblem = `${this.props.problem + el}`;

			const addToView = () => {
				this.props.hClick(newProblem);
			};

			return (
				<input
					type="button"
					className={`${this.defaultStyle} col-${size} ${style}`}
					value={el}
					onClick={addToView}
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
					{this.renderBtn(
						['CE', 'C'],
						'btn-outline-primary font-weight-bold'
					)}
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
