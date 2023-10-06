// The & symbol can be used to intersect types, which takes the combination of all properties of the specified types
type T1 = { x: string };
type T2 = { y: number };
type T3 = { z: boolean };
type IntersectType1 = T1 & T2 & T3;
type IntersectType2 = T1 & T2;
type IntersectType3 = T3 & T1;
// const inter1: T1 = { x: "x1", y: 2 }; // Won't compile: y does not exist in T1
const inter2: T1 & T2 = { x: "x1", y: 2 }; // Compile
const inter3: IntersectType2 = { x: "x1", y: 2 }; // Compile

// Interfaces can also be intersected
interface I1 {
  x: string;
}
interface I2 {
  y: number;
}
interface I3 {
  z: boolean;
}
type IntersectWithInterface = I1 & I2 & I3;
const with3Interfaces: IntersectWithInterface = { x: "1", y: 1, z: true };

// Discriminants can be used to differentiate similarly composed types
interface Cat2 {
  kind: "cat"; // Discriminant because shared with Dog
  name: string;
}

interface Dog {
  kind: "dog"; // Discriminant because shared with Dog
  nickname: string;
}

function callMeBy(p: Cat2 | Dog): string {
  if (p.kind === "cat") {
    // In the IF, p is Cat
    return p.name;
  } else if (p.kind === "dog") {
    // In the IF, p is Dog
    return p.nickname;
  }
  return "unknown";
}

const cat3: Cat2 = { kind: "cat", name: "Hello Kitty" };
const dog1: Dog = { kind: "dog", nickname: "Snoopy" };

console.log(callMeBy(cat3));
console.log(callMeBy(dog1));
