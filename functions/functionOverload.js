function functionWithOverload(param1, param2 = "default", param3) {
    if (param3 === undefined) {
        return "string";
    }
    return true;
}
console.log(functionWithOverload(1)); // Prints 'string' because the first definition is used, which means param3 is undefined. Note how no error is raised for missing param2
function createSuperHero(name) {
    if (name == "batman") {
        return {
            attackName: "Punch",
            runningSpeed: 25,
        };
    }
    else if (name == "superman") {
        return {
            attackName: "Laserbeam",
            flyingHeight: 55,
        };
    }
    else {
        return {
            attackName: "Walking",
        };
    }
}
const hero1 = createSuperHero("batman");
console.log(`Batman has running speed: ${hero1.runningSpeed}`); // Note the IntelliSense when accessing properties here
const hero2 = createSuperHero("superman");
console.log(`Superman can fly at a height of: ${hero2.flyingHeight}`);
