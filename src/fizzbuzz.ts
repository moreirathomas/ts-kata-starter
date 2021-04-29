import { makeArrayOfIndexes } from "./util/arrays"
import { isMultipleOf } from "./util/numbers"

// Assuming n is a natural integer,
// If n is a multiple of 3, return "Fizz"
// If n is a multiple of 5, return "Buzz"
// If n is a multiple of 3 and 5, return "FizzBuzz"
// Else return n

export function getCorrespondingString(n: number): string {
  const fizzString = isMultipleOf(3)(n) ? "Fizz" : ""

  const buzzString = isMultipleOf(5)(n) ? "Buzz" : ""

  return fizzString + buzzString || `${n}`
}

function fizzbuzz(len: number): string[] {
  if (len < 0) {
    throw new Error("Cannot do fizzbuzz for a negative number")
  }

  return makeArrayOfIndexes(len).map((_, i) => getCorrespondingString(i + 1))
}

export function printFizzbuzz() {
  for (const line of fizzbuzz(30)) {
    console.log(line)
  }
}
