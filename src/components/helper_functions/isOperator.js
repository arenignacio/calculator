//checks if character is a mathematical operator
const isOperator = function (char) {
	const OPERATORS = ['+', '-', '/', '*', '^', '~', '%'];
	
	return OPERATORS.includes(char);
};

export default isOperator;
