var cat1 = { age: 3, weight: 2 };
var cat2 = { age: 1, weight: 1.5 };
function buyAFish(fishEntity) {
    console.log(fishEntity);
}
buyAFish({
    age: 1,
    name: "Clown Fish",
    maximumDepth: 10,
});
// Another way to create a new type is by Omit, which is the inverse of the Pick function
function buyAFishThroughOmit(fishEntity) {
    console.log(fishEntity);
}
buyAFishThroughOmit({ age: 1, name: "Clown Fish Too", maximumDepth: 10 });
// Record<> is a map function which accepts a union of required parameters, and then creates a new type as per the specified type in the second parameter of the map function
// It is very useful in situations such as when user input is obtained from a web form or such and needs to be converted to a strongly typed object
function receiveInputFromForm(inputData) {
    var stronglyTypedObject = {
        age: Number(inputData.age),
        name: inputData.name,
        maximumDepth: Number(inputData.maximumDepth),
        numberOfLegs: Number(inputData.numberOfLegs),
        canSwim: Boolean(inputData.canSwim),
        runningSpeed: Number(inputData.runningSpeed),
    };
    return stronglyTypedObject;
}
var userInput = {
    age: "1",
    name: "Zebra",
    maximumDepth: "4",
    canSwim: "",
    numberOfLegs: "4",
    runningSpeed: "100",
};
console.log(receiveInputFromForm(userInput));
