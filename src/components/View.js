import React, { useState, useEffect, useRef } from 'react';

class View extends React.Component {
	//useState just entered as part of learning process for hooks
	state = { sizeModifier: 'xxl' };

	render() {
		return (
			<div className="parent d-flex flex-column justify-content-end pr-3 py-1 ml-3 mr-3 viewport rounded">
				<span
					className={`d-inline-block text-wrap d-flex flex-row justify-content-end fs-${this.props.sizeModifier}`}
					id="solution"
				>
					<strong>{this.props.solution || 0}</strong>
				</span>
				<div
					className="equation d-flex flex-row justify-content-end text-black-50 font-weight-bold ls-1"
					id="problem"
				>
					{this.props.problem || ''}
				</div>
			</div>
		);
	}
}

export default View;
