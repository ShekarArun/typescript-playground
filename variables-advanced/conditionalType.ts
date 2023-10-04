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
