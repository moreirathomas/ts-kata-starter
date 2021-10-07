/**
 * Returns a partial application of a function with a parameter injected.
 * The injected parameter is fixed inside the returned function's closure.
 */
export function inject<Injectee extends any, Args extends any[], ReturnType extends any>(
  injectee: Injectee,
  func: (injectee: Injectee, ...args: Args) => ReturnType
): (...args: Args) => ReturnType {
  return (...args: Args) => func(injectee, ...args)
}

export function compose(...funcs: ((...args: any[]) => any)[]): (...arg: any[]) => any {
  return (arg: any) => funcs.reduceRight((composed, func) => func(composed), arg)
}
