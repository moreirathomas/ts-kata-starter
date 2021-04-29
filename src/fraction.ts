import { gcd } from "./util/numbers"

export class Fraction {
  constructor(public numerator: number, public denominator: number) {
    if (denominator === 0) throw new Error("fraction denominator cannot be zero")
  }

  /**
   * Returns the current fraction scaled by the given factor.
   */
  scale(factor: number): Fraction {
    return new Fraction(this.numerator * factor, this.denominator * factor)
  }

  /**
   * Returns the current fraction as an irreductible fraction.
   */
  reduce(): Fraction {
    // Reducing a fraction is scaling it down, hence the division by the inverse.
    return this.scale(1 / gcd(this.numerator, this.denominator))
  }

  /**
   * Sums the given fraction to the current one and returns the result as an irreductible fraction.
   */
  add(other: Fraction): Fraction {
    const current = this.scale(other.denominator)
    const otherone = other.scale(this.denominator)
    return new Fraction(current.numerator + otherone.numerator, current.denominator).reduce()
  }

  /**
   * Mutliplies the current fraction by another fraction and returns the result. NOTE: set the
   * denominator to 1 to multiply by an integer and set the nominator to 1 to divide by an integer.
   */
  multiply(other: Fraction): Fraction {
    return new Fraction(this.numerator * other.numerator, this.denominator * other.denominator).reduce()
  }
}

export function addManyFractions(...fractions: Fraction[]): Fraction {
  return fractions.reduce((acc, curr) => (acc = acc.add(curr))).reduce()
}
