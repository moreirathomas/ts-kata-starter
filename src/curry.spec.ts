import { inject, compose } from "./curry"

describe("curry", function () {
  it("should correctly construct a partial application of a function with a parameter injected", function () {
    const inc = inject(1, (a: number, b: number) => a + b)
    expect(inc(2)).toEqual(3)
  })

  it("should correctly compose a function", function () {
    const inc = inject(1, (a: number, b: number) => a + b)
    const double = inject(2, (a: number, b: number) => a * b)

    const doubleThenInc = compose(inc, double)

    expect(doubleThenInc(2)).toEqual(5)
  })
})
