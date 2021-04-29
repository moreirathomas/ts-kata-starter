import { useAtm } from "./atm"

describe("atm", function () {
  it("should format correctly the result string", function () {
    expect(useAtm([0, 0, 0, 0, 0, 1])).toEqual("1 10€")
    expect(useAtm([1, 1, 1, 1, 1, 1])).toEqual("1 500€, 1 200€, 1 100€, 1 50€, 1 20€, 1 10€")
    expect(useAtm([1, 2, 3, 4, 5, 6])).toEqual("1 500€, 2 200€, 3 100€, 4 50€, 5 20€, 6 10€")
  })

  it("should handle a null value", function () {
    // Silence the ts compiler warning.
    expect(useAtm([] as any)).toEqual("")
  })

  it("should handle non-first zeros formatting", function () {
    expect(useAtm([0, 1, 0, 1, 0, 1])).toEqual("1 200€, 1 50€, 1 10€")
  })
})
