import React from 'react';
import './Text.scss';

class Btn extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className={`border border-black rounded p-2 m-2 col-${
					this.props.size || 2
				} text-center`}
			>
				{this.props.name}
			</div>
		);
	}
}

export default Btn;
