import React, { useState } from 'react';

function View(props) {
	useState(0);

	return (
		<div className="d-flex flex-column justify-content-end border rounded pr-3 py-1">
			<span className="d-flex flex-row justify-content-end">
				<strong>{'Final answer goes here'}</strong>
			</span>
			<var className="d-flex flex-row justify-content-end">
				{'Solution goes here'}
			</var>
		</div>
	);
}

export default View;
