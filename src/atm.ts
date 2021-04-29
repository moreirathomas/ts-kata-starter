import { Tuple } from "./type"

// This map seems better than a switch statement inside the function body.
const indexToAmount: Record<number, number> = {
  0: 500,
  1: 200,
  2: 100,
  3: 50,
  4: 20,
  5: 10,
}

// Tuple of 6 numbers.

export function useAtm(input: Tuple<number, 6>): string {
  let str: string = ""
  input.forEach((qty, i) => {
    if (str.length && qty > 0) {
      str += ", "
    }
    if (qty > 0) {
      str += `${qty} ${indexToAmount[i]}€`
    }
  })

  return str
}
