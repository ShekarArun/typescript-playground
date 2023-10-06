function conditionalSwapper(obj) {
    return obj; // Will not be type 'any'
}
let conditional1 = { kind: "TypeA", m1: "Hello" };
let return1 = conditionalSwapper(conditional1); // Check function signature on IntelliSense here
let x1 = "Hello";
let x2 = undefined;
function printIfNotUndefined(p) {
    console.log(p);
}
printIfNotUndefined(x1);
