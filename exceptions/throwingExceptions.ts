// Exception syntax in TS is similar to ECMAScript
// It is preferred to throw an error object rather than a string, as this forces instantiatation of an error object which contains the call stack and other contextual information
function throw1() {
  throw "String error";
}
function throw2() {
  throw new Error("Object Error1");
}
function throw3() {
  const err: Error = new Error("Object Error2");
  throw err;
}

// throw1(); // Throws a simple plaintext error
// throw2(); // Error object sent to output with call stack
// throw3(); // Error object sent to output with call stack

// Custom errors are useful to identify planned vs unplanned errors, and can help fail gracefully in accordance with the error class
class customError1 extends Error {
  public data: string;
  constructor(data: string, message: string) {
    super(message);
    Object.setPrototypeOf(this, customError1.prototype); // Restore prototype chain
    this.data = data;
  }
}
throw new customError1("ErrorData", "ErrorMessage");
