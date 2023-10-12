function returnPromise() {
    const p = Promise.resolve("value to be in the argument of then");
    throw new Error("Error Message");
    return p;
}
async function functionHandlePromise() {
    try {
        await returnPromise();
    }
    catch (err) {
        console.log("Error Message #2", err.message);
    }
    finally {
        console.log("Always called");
    }
}
functionHandlePromise();
