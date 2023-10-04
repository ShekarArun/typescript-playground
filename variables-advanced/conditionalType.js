function conditionalSwapper(obj) {
    return obj; // Will not be type 'any'
}
var conditional1 = { kind: "TypeA", m1: "Hello" };
var return1 = conditionalSwapper(conditional1); // Check function signature on IntelliSense here
var x1 = "Hello";
var x2 = undefined;
function printIfNotUndefined(p) {
    console.log(p);
}
printIfNotUndefined(x1);
printIfNotUndefined(x2);
