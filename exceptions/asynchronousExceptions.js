var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function returnPromise() {
    const p = Promise.resolve("value to be in the argument of then");
    throw new Error("Error Message");
    return p;
}
function functionHandlePromise() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield returnPromise();
        }
        catch (err) {
            console.log("Error Message #2", err.message);
        }
        finally {
            console.log("Always called");
        }
    });
}
functionHandlePromise();
