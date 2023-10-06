// Literals can be defined with the 'as const' suffix to ensure immutability
// This is the same as applying 'readonly' to the literal but ensures cleaner code
// As const also allows reassigning of values but only to the same const value defined
const asConstExample1 = 10;
let asConstExample2 = 10;
// asConstExample1 = 10; // Doesn't compile
asConstExample2 = 10;
// Immutability of other data types can also be ensured
let asConstExample3 = [1, 2, 3];
let asConstExample4 = { a: 1, b: 2 };
// Nested objects are set with 'readonly' at every level
let asConstExample5 = { a: 1, b: { c: 3, d: 4 } };
// The readonly property can also be conveniently applied to some sublevels by using 'as const' at the specific level
let asConstExample6 = { a: 1, b: { c: 3, d: 4 }, e: { f: 6 } };
