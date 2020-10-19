import React from 'react';
import View from './View';
import Calculate from './Calculate';

function App(props) {
	return (
		<div>
			App
			<View />
			<Calculate text={'Hello!'} performCalc={'test!!'} />
		</div>
	);
}

export default App;
