// TS allows us to specify the type of the key in an object signature
interface dictWithStringKeys<T> {
  [id: string]: T;
}
interface dictWithNumKeys<T> {
  [id: number]: T;
}

// The below dict's keys are automatically compiled to string
const stringKeyDict1: dictWithStringKeys<string> = { 100: "100", 200: "200" };
const numKeyDict1: dictWithNumKeys<string> = { 100: "100", 200: "200" };

console.log(stringKeyDict1);
console.log(numKeyDict1);

interface dictWithTwoMaps {
  [key: number]: number;
  [key: string]: number;
}
const twoMap1: dictWithTwoMaps = { 100: 100, "200": 200 };
console.log(twoMap1);

// An interface defined with an index type string must have all values as a string
interface MyStringDictionaryWithMembers {
  [key: string]: string;
  m1: string;
  //   m2: number; // Won't transpile, must be a string
}
// One way to overcome this is to define an index which is a union of many types
interface MyStringDictionaryWithMembers2 {
  [key: string]: string | number;
  m1: string;
  m2: number;
}

// For pre-existing classes, we cannot perform a union of other types when extending it or creating a class
// This leads to a restricted type definition

/* The below class does not compile

class stringDictWithMembers1 implements MyStringDictionaryWithMembers {
  [key: string]: string | number;
  m1: string;
  m2: number;
}
 */

// To circumvent this, we can intersect the old type
interface MyStringDictionaryWithMembers3 {
  m2: number;
}
type Intersect1 = MyStringDictionaryWithMembers &
  MyStringDictionaryWithMembers3;
// However, this still fails during object creation
/* let intersectVar1: Intersect1 = {
  m1: "This is a string",
  m2: 100,
}; */
