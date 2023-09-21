// Nullable type allows for properties to be nullable or the defined type
// We can build our own nullable function using generic types which union with Null
interface Cat {
  age: number;
  weight: number;
}
const cat1: Cat = { age: 3, weight: 2 };

type Nullable<T> = { [P in keyof T]: T[P] | null };
const cat2: Nullable<Cat> = { age: 1, weight: 1.5 };
