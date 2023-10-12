// ReturnType is a useful map function which extracts the type of a function
function getName1() {
    return "Name";
}
const varX = "This is a string";
console.log(varX);
// Now, consider the function's return type changes
function getName2() {
    return { first: "John", last: "Doe" };
}
// The below line would throw an error during compilation since return type has changed
// const varY: FunctionType2 = "This is also a string";
// In case of asynchronous functions, ReturnType specifies the type as a promise with the intended return type
// To extract the root type of the resolved promise, we use the following technique
async function asyncFunction() {
    return await Math.random();
}
