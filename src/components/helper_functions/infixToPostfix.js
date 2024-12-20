import getPrecedence from './getPrecedence';
import isClosed from './isClosed';
import isOperator from './isOperator';
import _isSpecialChar from './isSpecialChar';

//.converts string of infix to postfix (reverse polish notation).
const STACK = [];

const infixToPostfix = function (input) {
	const INPUT_ARR = input.replace(/\s/g, '').split('');
	const HEAD_CHAR = INPUT_ARR[0];
	const IS_VALID_FIRST_HEAD = !['+', '-', '.', '('].includes(HEAD_CHAR) && isNaN(HEAD_CHAR);

	let result = '';
	let groupedInputArr = [];

	//validation
	if (IS_VALID_FIRST_HEAD || !isClosed(INPUT_ARR) || input.includes('..')) {
		return;
	}

	//TODO - EMI - This looks like it should be put in App.js during validation. String should also be cleaned up. infixToPostfix should have a single responsibility of converting infix to postfix
	for (let index = 0; index < INPUT_ARR.length; index++) {
		const CURRENT_CHAR = INPUT_ARR[index];
		const NEXT_CHAR = INPUT_ARR[index + 1];
		const PREV_CHAR = INPUT_ARR[index - 1];
		const HAS_MISSING_OPERAND = (isOperator(CURRENT_CHAR) && isOperator(NEXT_CHAR)) 
			|| (_isSpecialChar(CURRENT_CHAR) && isOperator(PREV_CHAR) && isOperator(NEXT_CHAR)) 
			|| (CURRENT_CHAR === '%' && isNaN(PREV_CHAR));
	
		//validate against missing operand
		if (HAS_MISSING_OPERAND) {
			return;
		}

		//add * before open bracket
		if (CURRENT_CHAR === '(' && (_isAlphaNumeric(PREV_CHAR) || PREV_CHAR === ')') && PREV_CHAR !== undefined) { //undefined evaluates as alphanumeric in regex
			INPUT_ARR.splice(index, 0, '*');
		}

		//add * after closing bracket
		if (CURRENT_CHAR === ')' && _isAlphaNumeric(NEXT_CHAR) && NEXT_CHAR !== undefined) {
			INPUT_ARR.splice(index + 1, 0, '*');
		}
	}

	//#grouper
	//groups numeric values together
	groupedInputArr = INPUT_ARR.reduce(function (groupedInputArr, character, index) {
		const LAST_INDEX = groupedInputArr.length ? groupedInputArr.length - 1 : 0;
		const LAST_CHAR = groupedInputArr[LAST_INDEX]; //if there's no previous character, that means we only have one element in the array

		if (isNaN(character) && character !== '.') {
			groupedInputArr.push(character);
		} else if (!isNaN(LAST_CHAR)) {
			groupedInputArr[LAST_INDEX] = LAST_CHAR + character; 
		} else {
			groupedInputArr.push(character);
		}

		return groupedInputArr;
	}, []);

	//evaluate groupedInputArr and convert to postfix
	for (let idx = 0; idx <= groupedInputArr.length - 1; ) {
		let element = groupedInputArr[idx];

		if (!isNaN(element) && groupedInputArr[idx + 1] === '%') {
			!isNaN(groupedInputArr[idx + 2]) ? groupedInputArr.splice(idx, 3, `${(Number(groupedInputArr[idx]) / 100) * Number(groupedInputArr[idx + 2])}`) : groupedInputArr.splice(idx, 2, `${Number(groupedInputArr[idx]) / 100} `);
			result += INPUT_ARR[idx];
		} else if (_isAlphaNumeric(element)) {
			result += `${element} `;
		} else if (element === '(') {
			STACK.push(element);
		} else if (element === ')') {
			//if element is closing parentheses, empty STACK until open parantheses has been found
			while (STACK_HEAD() !== '(') {
				result += `${STACK.pop()} `;
			}

			STACK.pop();
		} else {
			//if element is an operator, compare precedence with top of STACK
			if (getPrecedence(element) <= getPrecedence(STACK_HEAD())) {
				result += `${STACK.pop()} `;
			}
			STACK.push(element); //
		}
		idx++;
	}

	//push remaining operators in STACK to result after each element has been evaluated
	while (STACK.length > 0) {
		result += `${STACK.pop()} `;
	}

	//since each operator and number is followed by a space, last number/operator will contain a space, this cleans that and prepares result for calculation which splits the string by space.
	return result.trimEnd();
}; //#end of infixToPostfix function;

function _isAlphaNumeric (char) {
	return /\w/.test(char);
}

//get top of STACK or (last element of STACK array)
function STACK_HEAD () {
	return STACK[STACK.length - 1];
};

export default infixToPostfix;
