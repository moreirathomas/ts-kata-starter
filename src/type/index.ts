/**
 * Tuple of `N` elements of type `T`.
 * @example Tuple<number, 2> = [number, number]
 */
export type Tuple<T, N extends number> = N extends N ? (number extends N ? T[] : _TupleOf<T, N, []>) : never
type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ? R : _TupleOf<T, N, [T, ...R]>

export type ParamInjector<Injectee extends any, Args extends any[], ReturnType extends any> = (
  injectee: Injectee,
  func: (injectee: Injectee, ...args: Args) => ReturnType
) => (...args: Args) => ReturnType
