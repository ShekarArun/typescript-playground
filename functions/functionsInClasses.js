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
