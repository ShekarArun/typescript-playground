// A tuple is an array of defined elements
let numberTuple;
let myTuple = [0, "one"];
// TS fixes the length property to ensure types match the definition at that position
let tuple1 = [1, 2];
let tuple2 = [3, 4, 5];
// tuple1 = tuple2; // Won't compile owing to length and property difference
// tuple2 = tuple1; // Won't compile owing to length and property difference
// A read only tuple can be created in the following manners
let tuple3 = [1, 2];
let tuple4 = [1, 2];
let tuple5 = [1, 2];
