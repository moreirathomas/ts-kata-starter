import { fmtBills, useAtm } from "./atm"

describe("atm", function () {
  it("should return a tuple for a valid amount input", function () {
    expect(useAtm(10)).toEqual([0, 0, 0, 0, 0, 1])
    expect(useAtm(100)).toEqual([0, 0, 1, 0, 0, 0])
    expect(useAtm(490)).toEqual([0, 2, 0, 1, 2, 0])
  })

  it("should format the result into a string", function () {
    expect(fmtBills([0, 0, 0, 0, 0, 1])).toEqual("1 10€")
    expect(fmtBills([1, 1, 1, 1, 1, 1])).toEqual("1 500€, 1 200€, 1 100€, 1 50€, 1 20€, 1 10€")
    expect(fmtBills([1, 2, 3, 4, 5, 6])).toEqual("1 500€, 2 200€, 3 100€, 4 50€, 5 20€, 6 10€")
  })

  it("should handle a null value formatting", function () {
    // Silence the ts compiler warning.
    expect(fmtBills([] as any)).toEqual("")
  })

  it("should handle non-first zeros formatting", function () {
    expect(fmtBills([0, 1, 0, 1, 0, 1])).toEqual("1 200€, 1 50€, 1 10€")
  })
})
