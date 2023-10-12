function printVal(p) {
    console.log(p);
}
printVal("Test"); // Compiles
const conditionalTypeConst1 = {
    name: "John",
    dateCreated: new Date(),
};
const conditionalTypeConst2 = {
    ...conditionalTypeConst1,
    dateModified: new Date(),
};
console.log(conditionalTypeConst2);
