// A tuple is an array of defined elements
let numberTuple: [number, number, number];
let myTuple: [number, string] = [0, "one"];

// TS fixes the length property to ensure types match the definition at that position
let tuple1: [number, number] = [1, 2];
let tuple2: [number, number, number] = [3, 4, 5];
// tuple1 = tuple2; // Won't compile owing to length and property difference
// tuple2 = tuple1; // Won't compile owing to length and property difference

// A read only tuple can be created in the following manners
let tuple3: readonly [number, number] = [1, 2];
let tuple4: Readonly<[number, number]> = [1, 2];
let tuple5 = [1, 2] as const;
