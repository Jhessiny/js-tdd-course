module.exports = {
	sum(num1, num2) {
		return num1 + num2;
	},
	sub(num1, num2) {
		return num1 - num2;
	},
	div(num1, num2) {
		return num2 === 0 ? "Not possible" : num1 / num2;
	},
	multi(num1, num2) {
		return num1 * num2;
	},
};
