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

  maximumDeepness: number;

  numberOfLegs: number;
  canSwim: boolean;
  runningSpeed: number;
}

function buyAFish(
  fishEntity: Pick<Animal, "age" | "name" | "maximumDeepness">
) {
  console.log(fishEntity);
}

buyAFish({
  age: 1,
  name: "Clown Fish",
  maximumDeepness: 10,
});
