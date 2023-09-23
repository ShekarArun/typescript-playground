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
