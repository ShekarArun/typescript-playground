var _a, _b;
// Constants and symbols can be used as keys
var Foo = "Foo"; // Constant value
var Bar = "Bar"; // Constant value
var Zaz = "Zaz"; // Constant value
var objectWithConstantProperties = (_a = {},
    _a[Foo] = 100,
    _a[Bar] = "hello",
    _a[Zaz] = function () { },
    _a);
var a12 = objectWithConstantProperties[Foo];
var b2334 = objectWithConstantProperties[Bar];
console.log(a12);
console.log(b2334);
console.log(objectWithConstantProperties);
// Similarly, Symbols can also be used as keys
var SERIALIZE_1 = Symbol("serialize-method-key"); // Symbol
var SERIALIZE_2 = "serialize-method-key"; // Constant
var symbolKeyObj1 = (_b = {}, _b[SERIALIZE_1] = "1", _b[SERIALIZE_2] = "2", _b);
var s1 = symbolKeyObj1[SERIALIZE_1];
var s2 = symbolKeyObj1[SERIALIZE_2];
console.log(s1);
console.log(s2);
