// Step 1 (Older version of TypeScript only)
// (<any>Symbol).asyncIterator = Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");
// Step 2
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
function getRandomSetChars() {
    const random = 1 + Math.floor(Math.random() * 5);
    let wordString = "";
    for (let i = 0; i < random; i++) {
        const letter = 97 + Math.floor(Math.random() * 26);
        wordString += String.fromCharCode(letter);
    }
    return wordString;
}
// Step 3
async function* getRandomSetsChars() {
    for (let i = 0; i < 10; i++) {
        yield getRandomSetChars(); // return a random set of char
        await delay(200); // wait
        yield* [getRandomSetChars(), getRandomSetChars()]; // return two random sets of char
    }
}
// Step 4
async function addWordsAsynchronously() {
    for await (const x of getRandomSetsChars()) {
        console.log("Iterator loop:" + x);
    }
}
addWordsAsynchronously();
