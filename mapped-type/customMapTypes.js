var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function printVal(p) {
    console.log(p);
}
printVal("Test"); // Compiles
printVal(null); // Raises warning/error on compilation
var conditionalTypeConst1 = {
    name: "John",
    dateCreated: new Date(),
};
var conditionalTypeConst2 = __assign(__assign({}, conditionalTypeConst1), { dateModified: new Date() });
console.log(conditionalTypeConst2);
