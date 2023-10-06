var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ReturnType is a useful map function which extracts the type of a function
function getName1() {
    return "Name";
}
const varX = "This is a string";
console.log(varX);
// Now, consider the function's return type changes
function getName2() {
    return { first: "John", last: "Doe" };
}
// The below line would throw an error during compilation since return type has changed
// const varY: FunctionType2 = "This is also a string";
// In case of asynchronous functions, ReturnType specifies the type as a promise with the intended return type
// To extract the root type of the resolved promise, we use the following technique
function asyncFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Math.random();
    });
}
