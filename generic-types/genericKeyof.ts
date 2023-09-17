// 'extends' can be used to extend a generic type if the new type needs the older one as a subset

// Below, we see that K extends T, so the second parameter should extend the former
interface TypeA {
  prop1: string;
  prop2: number;
}
interface TypeB {
  prop1: string;
  prop3: boolean;
}
interface TypeC extends TypeA {
  prop4: number;
}

function printProps<T, K extends T>(p1: T, p2: K): void {
  // This implies K must at minimum have all props of T
  console.log(p1);
  console.log(p2);
}

let a: TypeA = { prop1: "A", prop2: 1 };
let b: TypeB = { prop1: "B", prop3: true };
let c: TypeC = { prop1: "C", prop2: 2, prop4: 5 };

// printProps(a, b); Doesn't compile since b doesn't extend a
printProps(a, c);

/* In case we want to specify the property names of a generic type, we can specify an array of property names through the extends constraint coupling it with Keyof */
interface TypeD {
  prop1: string;
  prop2: number;
}

function printProps2<T, K extends keyof T>(p1: T, p2: K[]): void {
  console.log("Printing:");
  p2.forEach((propName) => {
    console.log(`Property Name: ${String(propName)}, Value: ${p1[propName]}`);
  });
}

let d: TypeD = { prop1: "p1", prop2: 99 };

printProps2(d, ["prop1"]);
printProps2(d, ["prop1", "prop2"]);
// printProps2(d, ["does", "not", "work"]); Not present in the extension of keyof
