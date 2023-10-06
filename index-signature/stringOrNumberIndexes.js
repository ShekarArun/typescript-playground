// The below dict's keys are automatically compiled to string
const stringKeyDict1 = { 100: "100", 200: "200" };
const numKeyDict1 = { 100: "100", 200: "200" };
console.log(stringKeyDict1);
console.log(numKeyDict1);
const twoMap1 = { 100: 100, "200": 200 };
console.log(twoMap1);
// However, this still fails during object creation
/* let intersectVar1: Intersect1 = {
  m1: "This is a string",
  m2: 100,
}; */
