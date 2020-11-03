import React from 'react';
import View from './View';
import Keypad from './Keypad';
import toPostfix from './infixToPostfix';
import calculate from './calcPostfix';

import '../index.scss';

/* 
TODO:
-add keypadd component
-create calcuation functionality
 */

function App(props) {
	return (
		<div className="container border border-dark mt-2">
			<h5 className="pt-2">Calculator - Aren I.</h5>
			<View />
			<br />
			<Keypad />
		</div>
	);
}

export default App;
