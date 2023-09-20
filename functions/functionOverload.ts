// Function overload allows for better documentation of code
// The function is implicitly understood to have multiple input and return types
// More descriptive, but clearer to understand than using combinations of optional and default parameters
function functionWithOverload(param1: number): boolean;
function functionWithOverload(param1: number, param2: string): string;
function functionWithOverload(
  param1: number,
  param2: string = "default",
  param3?: string
): boolean | string {
  if (param3 === undefined) {
    return "string";
  }
  return true;
}
console.log(functionWithOverload(1)); // Prints 'string' because the first definition is used, which means param3 is undefined. Note how no error is raised for missing param2

// String literals can be used for function overload as well
interface SuperHero {
  attackName: string;
}
interface Batman extends SuperHero {
  runningSpeed: number;
}
interface Superman extends SuperHero {
  flyingHeight: number;
}

function createSuperHero(name: "batman"): Batman;
function createSuperHero(name: "superman"): Superman;
function createSuperHero(name: string): Batman | Superman | SuperHero {
  if (name == "batman") {
    return {
      attackName: "Punch",
      runningSpeed: 25,
    };
  } else if (name == "superman") {
    return {
      attackName: "Laserbeam",
      flyingHeight: 55,
    };
  } else {
    return {
      attackName: "Walking",
    };
  }
}

const hero1 = createSuperHero("batman");
console.log(`Batman has running speed: ${hero1.runningSpeed}`); // Note the IntelliSense when accessing properties here
const hero2 = createSuperHero("superman");
console.log(`Superman can fly at a height of: ${hero2.flyingHeight}`);
