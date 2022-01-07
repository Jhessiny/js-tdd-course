import { expect } from "chai";
import { sub, sum, div, multi } from "../src/main";

describe("Calc", function () {
	describe("Smoke tests", function () {
		it("should exist the method sum", function () {
			expect(sum).to.exist;
			expect(sum).to.be.a("function");
		});

		it("should exist the method sub", function () {
			expect(sub).to.exist;
			expect(sub).to.be.a("function");
		});

		it("should exist the method div", function () {
			expect(div).to.exist;
			expect(div).to.be.a("function");
		});

		it("should exist the method multi", function () {
			expect(multi).to.exist;
			expect(multi).to.be.a("function");
		});
	});

	describe("Sum", function () {
		it("should return 4 when sum(2, 2)", () => {
			expect(sum(2, 2)).to.be.equal(4);
		});
	});

	describe("Sub", function () {
		it("should return 0 when sub(2, 2)", () => {
			expect(sub(2, 2)).to.be.equal(0);
		});
	});

	describe("Div", function () {
		it("should return 1 when div(2, 2)", () => {
			expect(div(2, 2)).to.be.equal(1);
		});
		it('should return "not possible" when divided by 0', () => {
			expect(div(4, 0)).to.be.equal("Not possible");
		});
	});

	describe("Multi", function () {
		it("should return 4 when multi(2, 2)", () => {
			expect(multi(2, 2)).to.be.equal(4);
		});
	});
});
