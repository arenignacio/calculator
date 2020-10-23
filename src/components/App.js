import React from 'react';
import View from './View';
import Calculate from './Calculate';

/* 
TODO:
-add keypadd component
 */

function App(props) {
	return (
		<div className="container border border-dark">
			<h5 className="pt-2">Calculator - Aren I.</h5>
			<View />
			<Calculate text={'Hello!'} performCalc={'test!!'} />
		</div>
	);
}

export default App;
