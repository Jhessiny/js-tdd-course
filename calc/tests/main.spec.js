import { expect } from "chai";
import calc from "../src/main";

describe("Calc", function () {
	describe("Smoke tests", function () {
		it("should exist the calc lib", function () {
			expect(calc).to.exist;
		});

		it("should exist the method sum", function () {
			expect(calc.sum).to.exist;
			expect(calc.sum).to.be.a("function");
		});

		it("should exist the method sub", function () {
			expect(calc.sub).to.exist;
			expect(calc.sub).to.be.a("function");
		});

		it("should exist the method div", function () {
			expect(calc.div).to.exist;
			expect(calc.div).to.be.a("function");
		});

		it("should exist the method multi", function () {
			expect(calc.multi).to.exist;
			expect(calc.multi).to.be.a("function");
		});
	});

	describe("Sum", function () {
		it("should return 4 when sum(2, 2)", () => {
			expect(calc.sum(2, 2)).to.be.equal(4);
		});
	});

	describe("Sub", function () {
		it("should return 0 when sub(2, 2)", () => {
			expect(calc.sub(2, 2)).to.be.equal(0);
		});
	});

	describe("Div", function () {
		it("should return 1 when div(2, 2)", () => {
			expect(calc.div(2, 2)).to.be.equal(1);
		});
		it('should return "not possible" when divided by 0', () => {
			expect(calc.div(4, 0)).to.be.equal("Not possible");
		});
	});

	describe("Multi", function () {
		it("should return 4 when multi(2, 2)", () => {
			expect(calc.multi(2, 2)).to.be.equal(4);
		});
	});
});
