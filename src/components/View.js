import React, { useState } from 'react';

function View(props) {
	//useState just entered as part of learning process for hooks
	const [equation] = useState(0);

	return (
		<div className="d-flex flex-column justify-content-end pr-3 py-1 ml-3 mr-3 viewport rounded">
			<span
				className="d-flex flex-row justify-content-end fs-xl"
				id="solution"
			>
				<strong>{props.solution || 0}</strong>
			</span>
			<div
				className="equation d-flex flex-row justify-content-end text-black-50 font-weight-bold ls-1"
				id="problem"
			>
				{props.problem || 0}
			</div>
		</div>
	);
}

export default View;
