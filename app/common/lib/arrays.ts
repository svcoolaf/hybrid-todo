export function range<T>(length: number, fill?: (i: number) => T): T[] {
  return Array.from({ length }, (_, i) => (fill ? fill(i) : ((i as any) as T)));
}

export function splitIntoEqualParts<T>(arr: T[], parts: number): T[][] {
  return arr.reduce(
    (result, element, i) => result[i % parts].push(element) && result,
    range(parts, () => [])
  );
}
