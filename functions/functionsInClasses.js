var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _c3_instances, _c3_privateFunction;
// Functions in classes are defined using the visibility mode and without the 'function' keyword
var c1 = /** @class */ (function () {
    function c1() {
    }
    c1.prototype.f1 = function () { };
    c1.prototype.f2 = function () { };
    c1.prototype.f3 = function () { };
    return c1;
}());
// Private methods cannot be accessed outside the class
var c2 = /** @class */ (function () {
    function c2() {
        this.privateFunction();
    }
    c2.prototype.privateFunction = function () {
        console.log("Private function invoked");
    };
    return c2;
}());
var o1 = new c2();
// o1.privateFunction(); Error as the function is private and cannot be accessed outside the class
// Private properties as defined above are still transpiled to JS in a manner that they are accessible outside the class
// The 'Private Field' operator '#' was introduced in JS to overcome this, and is also available in TS
var c3 = /** @class */ (function () {
    function c3() {
        _c3_instances.add(this);
        __classPrivateFieldGet(this, _c3_instances, "m", _c3_privateFunction).call(this);
    }
    return c3;
}());
_c3_instances = new WeakSet(), _c3_privateFunction = function _c3_privateFunction() {
    console.log("Newer private function invoked!");
};
var o2 = new c3();
// o2.#privateFunction() Again, error because private property is not accessible externally
