//.calculates postFix
const calculate = (postFixStr) => {
	//split postfix using spaces in between. space is used to suggest end of a whole a number or a character so we can easily identify numbers/characters with more than one digit
	let postFixArr = postFixStr.split(' ');

	if (postFixStr !== 'invalid entry') {
		for (let i = 0; i <= postFixArr.length - 1; ) {
			const currentCharacter = postFixArr[i];
			const operandA = parseFloat(postFixArr[i - 2]);
			const operandB = parseFloat(postFixArr[i - 1]);
			const hasOperands = !!operandA && !!operandB;

			if (currentCharacter === '+' && hasOperands) {
				postFixArr.splice(i - 2, 3, operandA + operandB);
				i = 0;
			} else if (currentCharacter === '-' && hasOperands) {
				postFixArr.splice(i - 2, 3, operandA - operandB);
				i = 0;
			} else if (currentCharacter === '*' && hasOperands) {
				postFixArr.splice(i - 2, 3, operandA * operandB
				);
				i = 0;
			} else if (currentCharacter === '/' && hasOperands) {
				postFixArr.splice(i - 2, 3, operandA / operandB);
				i = 0;
			} else if (currentCharacter === '^' && hasOperands) {
				postFixArr.splice(i - 2, 3, Math.pow(operandA, operandB));
				i = 0;
			} else if (/\w/.test(currentCharacter)) { //regex check if alphanumeric
				i++;
			} else if (isNaN(currentCharacter) && isNaN(operandA)) {
				return 'invalid entry';
			}
		}
		return postFixArr.join('');
	} else {
		return 'invalid entry';
	}
}; //#end of calculate function

export default calculate;
