var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _c3_instances, _c3_privateFunction;
// Functions in classes are defined using the visibility mode and without the 'function' keyword
class c1 {
    f1() { }
    f2() { }
    f3() { }
}
// Private methods cannot be accessed outside the class
class c2 {
    constructor() {
        this.privateFunction();
    }
    privateFunction() {
        console.log("Private function invoked");
    }
}
const o1 = new c2();
// o1.privateFunction(); Error as the function is private and cannot be accessed outside the class
// Private properties as defined above are still transpiled to JS in a manner that they are accessible outside the class
// The 'Private Field' operator '#' was introduced in JS to overcome this, and is also available in TS
class c3 {
    constructor() {
        _c3_instances.add(this);
        __classPrivateFieldGet(this, _c3_instances, "m", _c3_privateFunction).call(this);
    }
}
_c3_instances = new WeakSet(), _c3_privateFunction = function _c3_privateFunction() {
    console.log("Newer private function invoked!");
};
const o2 = new c3();
// o2.#privateFunction() Again, error because private property is not accessible externally
