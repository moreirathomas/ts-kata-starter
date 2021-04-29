export function makeArrayOfIndexes(dimension: number): number[] {
  return [...Array(dimension)].map((_, index) => index)
}
