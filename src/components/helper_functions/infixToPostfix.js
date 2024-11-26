import getPrecedence from './getPrecedence';
import isClosed from './isClosed';
import isOperator from './isOperator';

//.converts string of infix to postfix (reverse polish notation).
const STACK = [];

const infixToPostfix = function (input) {
	const inputArr = input.replace(/\s/g, '').split('');
	const INPUT_ARR = input.replace(/\s/g, '').split('');
	const HEAD_CHAR = inputArr[0];
	const IS_VALID_FIRST_HEAD = !['+', '-', '.', '('].includes(HEAD_CHAR) && isNaN(HEAD_CHAR);

	let result = '';

	//validation
	if (IS_VALID_FIRST_HEAD || !isClosed(inputArr) || input.includes('..')) {
		return;
	}

	for (let index = 0; index < INPUT_ARR.length - 1; index++) {
		const CURRENT_CHAR = INPUT_ARR[index];
		const NEXT_CHAR = INPUT_ARR[index + 1];
		const PREV_CHAR = INPUT_ARR[index - 1];
		const HAS_MISSING_OPERAND = (isOperator(CURRENT_CHAR) && isOperator(NEXT_CHAR)) || (_isSpecialChar(CURRENT_CHAR) && isOperator(PREV_CHAR) && isOperator(NEXT_CHAR)) || (CURRENT_CHAR === '%' && isNaN(PREV_CHAR));
		
		//protect against missing operand
		if (HAS_MISSING_OPERAND) {
			return;
		}

		//protect against two consecutive decimals in one number
		if (isOperator(CURRENT_CHAR) || ['(', ')', '.'].includes(CURRENT_CHAR)) {
			STACK.push(CURRENT_CHAR);
			
			let STACKStr = STACK.join('');
			
			if (STACKStr.includes('..')) {
				return;
			}

			while (STACK.length > 0) {
				STACK.pop();
			}
			

		}

	}

	//#grouper
	//groups numeric values together
	for (let i = 0; i <= inputArr.length - 1; ) {
		if (HEAD_CHAR === '.' && !isNaN(inputArr[1])) {
			inputArr.splice(i, 2, `0${inputArr[i] + inputArr[i + 1]}`);
		} else if ((isOperator(inputArr[i]) || ['(', ')'].includes(inputArr[i])) && inputArr[i + 1] === '.') {
			inputArr.splice(i + 1, 1, `0.`);
		} else if (inputArr[i + 1] === '.' && !inputArr[i].includes('.')) {
			inputArr.splice(i, 2, inputArr[i] + inputArr[i + 1]);
		} else if (['+', '-'].includes(inputArr[i]) && ['('].includes(inputArr[i - 1]) && !isNaN(inputArr[i + 1])) {
			inputArr.splice(i, 2, inputArr[i] + inputArr[i + 1]);
		} else if (['+', '-'].includes(HEAD_CHAR) && !isNaN(inputArr[1])) {
			inputArr.splice(i, 2, HEAD_CHAR + inputArr[1]);
		} else if (!isNaN(inputArr[i]) && !isNaN(inputArr[i + 1])) {
			inputArr.splice(i, 2, inputArr[i] + inputArr[i + 1]);
		} else if (inputArr[i] === '(' && inputArr[i + 1] === ')') {
			inputArr.length === 2
				? inputArr.splice(i, 2, '0')
				: inputArr.splice(i, 2); //! empty bracket logic
		} else {
			i++;
		}
	}

	//checks if parentheses is preceded by a number of operator. 
	//if it's alphanumeric, it inserts a '*' at beginning of the problem inside the parentheses so the solution inside the parentheses gets multiplied to the number outside before solving the rest of the problem
	if (input.includes('(')) {
		for (const [index, value] of inputArr.entries()) {
			//add * before open bracket
			if (value === '(' && (/\w/.test(inputArr[index - 1]) || inputArr[index - 1] === ')') && inputArr[index - 1] !== undefined) {
				inputArr.splice(index, 0, '*');
			}

			//add * after closing bracket
			if (value === ')' && /\w/.test(inputArr[index + 1]) && inputArr[index + 1] !== undefined) {
				inputArr.splice(index + 1, 0, '*');
			}
		}
	}

	//evaluate inputArr and convert to postfix
	for (let idx = 0; idx <= inputArr.length - 1; ) {
		let element = inputArr[idx];

		if (!isNaN(element) && inputArr[idx + 1] === '%') {
			!isNaN(inputArr[idx + 2]) ? inputArr.splice(idx, 3, `${(Number(inputArr[idx]) / 100) * Number(inputArr[idx + 2])}`) : inputArr.splice(idx, 2, `${Number(inputArr[idx]) / 100} `);
			result += inputArr[idx];
		} else if (/\w/.test(element)) {
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
			STACK.push(element);
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


function _isSpecialChar (char) {
	return ['.', '%'].includes(char);
};

//get top of STACK or (last element of STACK array)
function STACK_HEAD () {
	return STACK[STACK.length - 1];
};

export default infixToPostfix;
