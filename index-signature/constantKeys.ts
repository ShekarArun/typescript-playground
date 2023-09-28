// Constants and symbols can be used as keys
const Foo = "Foo"; // Constant value
const Bar = "Bar"; // Constant value
const Zaz = "Zaz"; // Constant value

const objectWithConstantProperties = {
  [Foo]: 100,
  [Bar]: "hello",
  [Zaz]: () => {},
};

let a12: number = objectWithConstantProperties[Foo];
let b2334: string = objectWithConstantProperties[Bar];

console.log(a12);
console.log(b2334);
console.log(objectWithConstantProperties);

// Similarly, Symbols can also be used as keys
const SERIALIZE_1 = Symbol("serialize-method-key"); // Symbol
const SERIALIZE_2 = "serialize-method-key"; // Constant

const symbolKeyObj1 = { [SERIALIZE_1]: "1", [SERIALIZE_2]: "2" };

let s1: string = symbolKeyObj1[SERIALIZE_1];
let s2: string = symbolKeyObj1[SERIALIZE_2];
console.log(s1);
console.log(s2);
