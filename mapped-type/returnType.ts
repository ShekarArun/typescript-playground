// ReturnType is a useful map function which extracts the type of a function
function getName1(): string {
  return "Name";
}
type FunctionType = ReturnType<typeof getName1>;
const varX: FunctionType = "This is a string";
console.log(varX);

// Now, consider the function's return type changes
function getName2(): { first: string; last: string } {
  return { first: "John", last: "Doe" };
}
// If the variable was mapped to the return type of this function, it would error out during transpilation
type FunctionType2 = ReturnType<typeof getName2>;
// The below line would throw an error during compilation since return type has changed
// const varY: FunctionType2 = "This is also a string";

// In case of asynchronous functions, ReturnType specifies the type as a promise with the intended return type
// To extract the root type of the resolved promise, we use the following technique
async function asyncFunction() {
  return await Math.random();
}
type functionType3 = ReturnType<typeof asyncFunction>;

// Below line does the heavy lifting of identifying the promise's return type; Else, return the type as-is
type ReturnTypeFromPromise<T> = T extends Promise<infer U> ? U : T;
type functionType4 = ReturnTypeFromPromise<functionType3>;
