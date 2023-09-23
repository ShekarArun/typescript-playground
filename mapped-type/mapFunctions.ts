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
