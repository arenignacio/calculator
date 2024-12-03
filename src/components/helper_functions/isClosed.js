const isClosed = function (iterative) {
	let looseOpenBrackets = 0;

	for (const cur of iterative) {
		if (cur === '(') {
			looseOpenBrackets++;
		} else if (cur === ')') {
			looseOpenBrackets--;
		}
	}

	return !looseOpenBrackets;
};

export default isClosed;
