// Despite using anonymous functions, the type can be inferred
function f1(p) {
    return p * 2;
}
const f2 = function (p) {
    return p * 2;
};
const f3 = (p) => {
    return p * 2;
};
const f4 = (p) => p * 2;
const f5 = (p) => p * 2;
let differingParamsInterface = {
    func1: (p2) => p2 * 2,
};
// Functions can have optional parameters
// This can be done either by defining the type to be undefined or to use a question mark before the colon
// The second approach is better but requires a strict convention of having all optional parameters to the end of the parameter list
function newFunc1(a, b) {
    return a * b; // Note how the compiler highlights 'b' to show it can potentiall be undefined
}
