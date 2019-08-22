export function identity<T>(i): T {
  return i;
}

export function pipe(el) {
  return fn => fn(el);
}

export function get<T, V extends T[keyof T]>(property: keyof T): (obj: T) => V {
  return (obj: T) => obj[property] as V;
}

export const throwException = exception => {
  throw exception;
};

export const minMaxReducer = (
  [min, max]: [number, number],
  pm: number
): [number, number] => {
  return [pm < min ? pm : min, pm > max ? pm : max];
};
