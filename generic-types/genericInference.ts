// Inference is possible when using a generic type
function genericInference<T>(param: T) {}
typeof genericInference("abc"); // Implicitly inferred that T is of type string (Hover to verify)
typeof genericInference<string>("def"); // No inference, explicitly specified
genericInference(true); // Inferred to be boolean
genericInference(1); // Inferred to be number

// If any property of an inferred type is to be accessed, generic constraints have to be used
function genericInference2<T extends string>(param: T) {
  return param.length;
}
console.log(genericInference2("New string"));
// console.log(genericInference2(123)); Not allowed as T extends string
type UUID = string;
let newUUID: UUID = "123-456"; // Although just a string, defining a separate type also helps understand the data present in this variable
console.log(genericInference2(newUUID));
