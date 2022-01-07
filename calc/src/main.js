function sum(num1, num2) {
	return num1 + num2;
}
function sub(num1, num2) {
	return num1 - num2;
}
function div(num1, num2) {
	return num2 === 0 ? "Not possible" : num1 / num2;
}
function multi(num1, num2) {
	return num1 * num2;
}

function foo() {
	return "oi";
}

function foo2() {
	return "oi";
}

function foo3() {
	return "oi";
}

function foo4() {
	return "oi";
}

export { sum, sub, div, multi, foo, foo2, foo3 };
