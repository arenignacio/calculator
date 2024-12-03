import _ from 'lodash';
import isOperator from './isOperator';
//.calculates postFix

const calculate = (postFixStr) => {
	//split postfix using spaces in between. space is used to suggest end of a whole a number or a character so we can easily identify numbers/characters with more than one digit
	let postFixArr = postFixStr.split(' ');

	for (let i = 0; i <= postFixArr.length - 1; ) {
		const CURRENT_CHAR = postFixArr[i];
		const OPERAND_A = parseFloat(postFixArr[i - 2]);
		const OPERAND_B = parseFloat(postFixArr[i - 1]);
		const hasOperands = _.isFinite(OPERAND_A) && _.isFinite(OPERAND_B)
		const canSolve = isOperator(CURRENT_CHAR) && hasOperands;

		//EMI TODO: can be refactored to a switch case ?
		if (canSolve) {
			
			switch (CURRENT_CHAR) {
				case '+': 
					postFixArr.splice(i - 2, 3, OPERAND_A + OPERAND_B);
					break;
				case '-': 
					postFixArr.splice(i - 2, 3, OPERAND_A - OPERAND_B);
					break;
				case '*':
					postFixArr.splice(i - 2, 3, OPERAND_A * OPERAND_B);
					break;
				case '/':
					postFixArr.splice(i - 2, 3, OPERAND_A / OPERAND_B);
					break;
				case '^':
					postFixArr.splice(i - 2, 3, Math.pow(OPERAND_A, OPERAND_B));
					break;
				default:
					break;
			};
			
			i--;
		
		} else {
			i++;
		}
	}

	return postFixArr[0]; 

};//#end of calculate function

export default calculate;
