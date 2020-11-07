import React from 'react';
import Btn from './Btn';

/* memory buttons disabled */

class Keypad extends React.Component {
	constructor(props) {
		super(props);

		state: {
		}
	}

	render() {
		return (
			<div className="container m-2 mb-4">
				<div
					className="row  justify-content-center 
				keygrp-mem"
				>
					{' '}
					<input
						type="button"
						className={`btn-keypad border border-black rounded p-2 m-2 col-1 text-center btn btn-outline-dark unselectable disabled`}
						value="mc"
						id="mc"
						onClick=""
					/>
					<input
						type="button"
						className={`btn-keypad border border-black rounded p-2 m-2 col-1 text-center btn btn-outline-dark unselectable disabled`}
						value="mr"
						id="mr"
						onClick=""
					/>
					<input
						type="button"
						className={`btn-keypad border border-black rounded p-2 m-2 col-1 text-center btn btn-outline-dark unselectable disabled`}
						value="m+"
						id="m+"
						onClick=""
					/>
					<Btn
						name="m-"
						size="1"
						type="dark"
						addstyle="disabled"
						event={this.props.onClick}
					/>
					<Btn
						name="ms"
						size="1"
						type="dark"
						addstyle="disabled"
						event={this.props.onClick}
					/>
					<Btn
						name="m^"
						size="1"
						type="dark"
						addstyle="disabled"
						event={this.props.onClick}
					/>
				</div>
				<div className="row  justify-content-center">
					{' '}
					<Btn name="%" type="secondary" />
					<Btn name="CE" type="primary" addstyle="font-weight-bold" />
					<Btn name="C" type="primary" addstyle="font-weight-bold" />
					<Btn
						name="DEL"
						type="danger"
						addstyle="font-weight-bold"
						id="del"
						event={this.props.onClick}
					/>
				</div>
				<div className="row  justify-content-center">
					{' '}
					<Btn name="^" type="secondary" />
					<Btn name="(" type="secondary" />
					<Btn name=")" type="secondary" />
					<Btn name="/" type="secondary" />
				</div>
				<div className="row  justify-content-center">
					{' '}
					<Btn name="7" addstyle="btn-light" />
					<Btn name="8" addstyle="btn-light" />
					<Btn name="9" addstyle="btn-light" />
					<Btn name="x" type="secondary" />
				</div>

				<div className="row  justify-content-center">
					{' '}
					<Btn name="4" addstyle="btn-light" />
					<Btn name="5" addstyle="btn-light" />
					<Btn name="6" addstyle="btn-light" />
					<Btn name="-" type="secondary" />
				</div>
				<div className="row  justify-content-center">
					{' '}
					<Btn name="1" addstyle="btn-light" />
					<Btn name="2" addstyle="btn-light" />
					<Btn name="3" addstyle="btn-light" />
					<Btn name="+" type="secondary" />
				</div>
				<div className="row  justify-content-center">
					{' '}
					<Btn name="+/-" type="secondary" />
					<Btn name="0" addstyle="btn-light" />
					<Btn name="." type="secondary" />
					<Btn name="=" type="secondary" />
				</div>
			</div>
		);
	}
}

export default Keypad;
