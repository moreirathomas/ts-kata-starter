// No test written.

function diamond(length: number): string[] {
  if (length % 2 === 0) {
    throw new Error("Cannot print a diamond: diagonal length is even")
  }

  const lines: string[] = []
  const halfLength = Math.floor(length / 2) + 1

  for (let i = 0; i < halfLength; i++) {
    const line = " ".repeat(length - halfLength - i) + "*".repeat(1 + 2 * i) + " ".repeat(length - halfLength - i)
    lines.push(line)
  }

  for (const line of lines.slice(0, lines.length - 1).reverse()) {
    lines.push(line)
  }

  return lines
}

export function printDiamond() {
  console.log("Homemade implementation of diamond:")
  for (const line of diamond(7)) {
    console.log(line)
  }
}
