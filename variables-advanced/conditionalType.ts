interface Conditional1 {
  kind: "TypeA";
  m1: string;
}
interface Conditional2 {
  kind: "TypeB";
  m2: number;
}

function conditionalSwapper<T extends Conditional1 | Conditional2>(
  obj: T
): T extends Conditional1 ? Conditional2 : Conditional1 {
  return obj as any; // Will not be type 'any'
}

let conditional1: Conditional1 = { kind: "TypeA", m1: "Hello" };
let return1: Conditional2 = conditionalSwapper(conditional1); // Check function signature on IntelliSense here

// This allows for conditional blocking of types
// The example below doesn't allow 'undefined' types to be passed to the function
type NotUndefined<T> = T extends undefined ? never : T;

let x1: string = "Hello";
let x2: undefined = undefined;

function printIfNotUndefined<T>(p: NotUndefined<T>) {
  console.log(p);
}

printIfNotUndefined(x1);
// printIfNotUndefined(x2); // Not allowed as undefined type cannot be passed to function
