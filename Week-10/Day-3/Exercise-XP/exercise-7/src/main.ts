function formatInput<T extends { toString: () => string }>(input: T): string {
  const str = input.toString() as string;
  return `Formatted: ${str}`;
}

console.log(formatInput(123));
console.log(formatInput(true));
