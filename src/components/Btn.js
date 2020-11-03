import React from 'react';

class Btn extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<input
				type="button"
				className={`border border-black rounded p-2 m-2 col-${
					this.props.size || 2
				} text-center btn btn-outline-${this.props.type} unselectable ${
					this.props.addstyle
				}`}
				value={this.props.name}
			/>
		);
	}
}

export default Btn;
