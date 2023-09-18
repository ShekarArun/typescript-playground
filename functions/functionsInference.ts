// Despite using anonymous functions, the type can be inferred
function f1(p: number): number {
  return p * 2;
}
const f2 = function (p: number): number {
  return p * 2;
};
const f3 = (p: number): number => {
  return p * 2;
};
const f4 = (p: number): number => p * 2;
const f5 = (p: number) => p * 2;
// All above functions have a type defined thanks to inferential capabilities of TS

// When working with functions inside an interface, the parameter names need not match
// Just a match of type is adequate
interface interface1 {
  func1: (p1: number) => number;
}
let differingParamsInterface: interface1 = {
  func1: (p2: number) => p2 * 2,
};

// Functions can have optional parameters
// This can be done either by defining the type to be undefined or to use a question mark before the colon
// The second approach is better but requires a strict convention of having all optional parameters to the end of the parameter list
function newFunc1(a: number, b?: number): number {
  return a * b; // Note how the compiler highlights 'b' to show it can potentiall be undefined
}
