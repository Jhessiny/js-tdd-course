module.exports = {
env: {
		browser: true,
		es2021: true,
	},
	extends: ["airbnb-base"],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
	},
	rules: {
		quotes: ["error", "double", { allowTemplateLiterals: true }],
		indent: ["error", "tab", 2],
		// "no-unused-vars": "off",
	},
};
