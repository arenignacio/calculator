import React from 'react';
import Btn from './Btn';
import './Text.scss';

class Keypad extends React.Component {
	constructor(props) {
		super(props);

		state: {
		}
	}

	render() {
		return (
			<div className="container m-2 mb-4">
				<div className="row  justify-content-center">
					{' '}
					<Btn name="mc" size="1" />
					<Btn name="mr" size="1" />
					<Btn name="m+" size="1" />
					<Btn name="m-" size="1" />
					<Btn name="ms" size="1" />
					<Btn name="m^" size="1" />
				</div>
				<div className="row  justify-content-center">
					{' '}
					<Btn name="1/x" />
					<Btn name="x^2" />
					<Btn name="sqrt" />
					<Btn name="/" />
				</div>
				<div className="row  justify-content-center">
					{' '}
					<Btn name="7" />
					<Btn name="8" />
					<Btn name="9" />
					<Btn name="x" />
				</div>

				<div className="row  justify-content-center">
					{' '}
					<Btn name="4" />
					<Btn name="5" />
					<Btn name="6" />
					<Btn name="-" />
				</div>
				<div className="row  justify-content-center">
					{' '}
					<Btn name="1" />
					<Btn name="2" />
					<Btn name="3" />
					<Btn name="+" />
				</div>
				<div className="row  justify-content-center">
					{' '}
					<Btn name="plus/minus" />
					<Btn name="0" />
					<Btn name="." />
					<Btn name="=" />
				</div>
			</div>
		);
	}
}

export default Keypad;
