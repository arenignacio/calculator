import React from 'react';
import View from './View';
import Calculate from './Calculate';

/* 
TODO:
-add keypadd component
-create calcuation functionality
 */

function App(props) {
	return (
		<div className="container border border-dark">
			<h5 className="pt-2">Calculator - Aren I.</h5>
			<View />
			<Calculate />
		</div>
	);
}

export default App;
