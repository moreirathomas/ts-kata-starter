import { Tuple } from "./type"

type BillsTuple = Tuple<number, 6>

const availableBills = [500, 200, 100, 50, 20, 10] as const

type ReduceAccumulator = { rest: number; bills: number[] }

export function useAtm(amount: number): BillsTuple {
  const res = availableBills.reduce(
    (acc: ReduceAccumulator, currBill) => {
      // Amount that cannot fit in any number of the current bill.
      const rest = acc.rest % currBill
      // Quantity of current bill to sum up to the amount that can fit.
      const currBillQty = (acc.rest - rest) / currBill
      return { rest, bills: [...acc.bills, currBillQty] }
    },
    { rest: amount, bills: [] }
  )
  return res.bills as BillsTuple
}

export function fmtBills(input: BillsTuple): string {
  let str: string = ""
  input.forEach((qty, i) => {
    if (str.length && qty > 0) {
      str += ", "
    }
    if (qty > 0) {
      str += `${qty} ${availableBills[i]}€`
    }
  })

  return str
}
