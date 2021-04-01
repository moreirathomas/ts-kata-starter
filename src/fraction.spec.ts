import { Fraction, addManyFractions } from "./fraction";

it("Should scale a fraction", function () {
  const f1 = new Fraction(1, 2);

  expect(f1.scale(2)).toEqual({ numerator: 2, denominator: 4 });
});

it("Should reduce a fraction", function () {
  const f1 = new Fraction(50, 100);

  expect(f1.reduce()).toEqual({ numerator: 1, denominator: 2 });
});

it("Should reduce a fraction with floating points precision", function () {
  const f1 = new Fraction(3, 3);

  expect(f1.reduce()).toEqual({ numerator: 1, denominator: 1 });
});

it("Should handle both negative nominator and denominator", function () {
  const f1 = new Fraction(-2, -5);

  expect(f1.reduce()).toEqual({ numerator: 2, denominator: 5 });
});

it("Should add and reduce two fractions", function () {
  const f1 = new Fraction(1, 2);
  const f2 = new Fraction(1, 4);

  expect(f1.add(f2)).toEqual({ numerator: 3, denominator: 4 });
});

it("Should add more than 2 fractions", function () {
  const f1 = new Fraction(1, 5);
  const f2 = new Fraction(1, 5);
  const f3 = new Fraction(1, 5);
  expect(addManyFractions(f1, f2, f3)).toEqual({ numerator: 3, denominator: 5 });
});

it("Should multiply a fraction by a whole positive number and reduce", function () {
  const f1 = new Fraction(1, 2);
  const f2 = new Fraction(4, 1);
  expect(f1.multiply(f2)).toEqual({ numerator: 2, denominator: 1 });
});

it("Should multiply a fraction by a whole negative number and reduce", function () {
  const f1 = new Fraction(1, 2);
  const f2 = new Fraction(-4, 1);
  expect(f1.multiply(f2)).toEqual({ numerator: -2, denominator: 1 });
});

it("Should divide a fraction by a whole positive number and reduce", function () {
  const f1 = new Fraction(1, 2);
  const f2 = new Fraction(1, 4);
  expect(f1.multiply(f2)).toEqual({ numerator: 1, denominator: 8 });
});

it("Should multiply two fractions and reduce", function () {
  const f1 = new Fraction(3, 2);
  const f2 = new Fraction(4, 2);
  expect(f1.multiply(f2)).toEqual({ numerator: 3, denominator: 1 });
});
