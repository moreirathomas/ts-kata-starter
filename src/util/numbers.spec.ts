import { gcd } from "./numbers"

describe("GCD", function () {
  it("The GCD of any number and 1 is 1", function () {
    expect(gcd(2, 1)).toEqual(1)
  })

  it("The GCD of two prime numbers is 1", function () {
    expect(gcd(2, 3)).toEqual(1)
  })

  it("The GCD of two numbers that are prime to each other is 1", function () {
    expect(gcd(8, 9)).toEqual(1)
  })

  it("The GCD of two numbers, one being a multiple of the other, is the lowest one", function () {
    expect(gcd(2, 4)).toEqual(2)
  })

  it("The GCD of two numbers is the greatest number that divides both", function () {
    expect(gcd(6, 8)).toEqual(2)
  })
})
