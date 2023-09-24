// Nullable type allows for properties to be nullable or the defined type
// We can build our own nullable function using generic types which union with Null
interface Cat {
  age: number;
  weight: number;
}
const cat1: Cat = { age: 3, weight: 2 };

type Nullable<T> = { [P in keyof T]: T[P] | null };
const cat2: Nullable<Cat> = { age: 1, weight: 1.5 };

// Pick is a map function used to obtain a subset of properties from an interface with larger properties
// This can also be achieved through inheritance but that approach has drawbacks
interface Animal {
  age: number;
  name: string;

  maximumDepth: number;

  numberOfLegs: number;
  canSwim: boolean;
  runningSpeed: number;
}

function buyAFish(fishEntity: Pick<Animal, "age" | "name" | "maximumDepth">) {
  console.log(fishEntity);
}

buyAFish({
  age: 1,
  name: "Clown Fish",
  maximumDepth: 10,
});

// Another way to create a new type is by Omit, which is the inverse of the Pick function
function buyAFishThroughOmit(
  fishEntity: Omit<Animal, "numberOfLegs" | "canSwim" | "runningSpeed">
) {
  console.log(fishEntity);
}

buyAFishThroughOmit({ age: 1, name: "Clown Fish Too", maximumDepth: 10 });

// Record<> is a map function which accepts a union of required parameters, and then creates a new type as per the specified type in the second parameter of the map function
// It is very useful in situations such as when user input is obtained from a web form or such and needs to be converted to a strongly typed object
function receiveInputFromForm(inputData: Record<keyof Animal, string>): Animal {
  const stronglyTypedObject: Animal = {
    age: Number(inputData.age),
    name: inputData.name,
    maximumDepth: Number(inputData.maximumDepth),
    numberOfLegs: Number(inputData.numberOfLegs),
    canSwim: Boolean(inputData.canSwim),
    runningSpeed: Number(inputData.runningSpeed),
  };

  return stronglyTypedObject;
}
const userInput: Record<keyof Animal, string> = {
  age: "1",
  name: "Zebra",
  maximumDepth: "4",
  canSwim: "",
  numberOfLegs: "4",
  runningSpeed: "100",
};
console.log(receiveInputFromForm(userInput));

// Extract is a map function which is used to extract types that are common across two types
// Consider the following example where two custom types have common typed properties
interface Vehicle {
  type: string;
  engine?: boolean;
  moves: string; // Newly added type
}
interface Car {
  type: string;
  numberOfWheels: number;
  moves: string; // Newly added type
}

type obj = Extract<keyof Vehicle, keyof Car>;
function displayType(what: Record<obj, string>): void {
  console.log(`Type: ${what.type}; Moves? ${what.moves}`);
}
const obj1: Vehicle = { type: "Sea", engine: true, moves: "yes" };
const obj2: Car = { type: "Land", numberOfWheels: 5, moves: "yes" };
displayType(obj1);
displayType(obj2);

// The above example allows the function to use any further string properties that are commonly added to Vehicle and Car types

// Exclude is another mapped function which can create a dynamic type by excluding the specified properties
// Note how the types of the original properties can be carried forward by combining Pick with mapped functions
interface MapI1 {
  name: string;
  gender: string;
  sound: string;
}
interface MapI2 {
  name: string;
  gender: string;
  nickname: string;
}
interface MapI3 {
  name: string;
  gender: boolean;
  intelligenceScore: number;
}
interface noisyMapI1 {
  sound: string;
}

type ExcludedMapI1 = Exclude<keyof MapI1, keyof noisyMapI1>;
// Note the difference in types of properties for the below 2 types
type PickedMapI1 = Pick<MapI2, ExcludedMapI1>;
type PickedMapI2 = Pick<MapI3, ExcludedMapI1>;
