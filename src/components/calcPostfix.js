//.calculates postFix
const calculate = (postFixStr) => {
	//split postfix using spaces in between.
	let postFixArr = postFixStr.split(' ');

	if (postFixStr !== 'invalid entry') {
		for (let i = 0; i <= postFixArr.length - 1; ) {
			if (postFixArr[i] === '+' && !isNaN(postFixArr[i - 2])) {
				postFixArr.splice(
					i - 2,
					3,
					Number(postFixArr[i - 2]) + Number(postFixArr[i - 1])
				);
				i = 0;
			} else if (postFixArr[i] === '-' && !isNaN(postFixArr[i - 2])) {
				postFixArr.splice(
					i - 2,
					3,
					Number(postFixArr[i - 2]) - Number(postFixArr[i - 1])
				);
				i = 0;
			} else if (postFixArr[i] === '*' && !isNaN(postFixArr[i - 2])) {
				postFixArr.splice(
					i - 2,
					3,
					Number(postFixArr[i - 2]) * Number(postFixArr[i - 1])
				);
				i = 0;
			} else if (postFixArr[i] === '/' && !isNaN(postFixArr[i - 2])) {
				postFixArr.splice(
					i - 2,
					3,
					Number(postFixArr[i - 2]) / Number(postFixArr[i - 1])
				);
				i = 0;
			} else if (postFixArr[i] === '^' && !isNaN(postFixArr[i - 2])) {
				postFixArr.splice(
					i - 2,
					3,
					Math.pow(Number(postFixArr[i - 2]), Number(postFixArr[i - 1]))
				);
				i = 0;
			} else if (/\w/.test(postFixArr[i])) {
				i++;
			} else if (isNaN(postFixArr[i]) && isNaN(postFixArr[i - 2])) {
				return 'incorrect formula';
			}
		}
		console.log('end of calculation');
		return postFixArr.join('');
	} else {
		return 'incorrect formula';
	}
}; //#end of calculate function

export default calculate;
