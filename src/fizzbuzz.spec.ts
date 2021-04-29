import { getCorrespondingString } from "./fizzbuzz"

it('If n is a multiple of 3, return "Fizz"', function () {
  expect(getCorrespondingString(9)).toEqual("Fizz")
})

it('If n is a multiple of 5, return "Buzz"', function () {
  expect(getCorrespondingString(5)).toEqual("Buzz")
})

it('If n is a multiple of 3 and 5, return "FizzBuzz"', function () {
  expect(getCorrespondingString(30)).toEqual("FizzBuzz")
})

it("Else return n", function () {
  expect(getCorrespondingString(4)).toEqual("4")
})
