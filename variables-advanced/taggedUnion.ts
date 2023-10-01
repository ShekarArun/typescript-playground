// Sometimes, over large codebases, it becomes challenging to narrow down a type when multiple unions and intersections over types are performed
// In such cases, a unique attribute such as 'type' or 'kind' is maintained with a value to indicate the source type
// TS in such cases can narrow down the type accessed within switch-case blocks
interface Disc1 {
  discriminant: "Disc1"; // The type here is 'Disc1' and not string
  m0: number;
}
interface Disc2 {
  discriminant: "Disc2"; // The type here is 'Disc2' and not string
  m1: string;
}
interface Disc3 {
  discriminant: "Disc3"; // The type here is 'Disc3' and not string
  m2: boolean;
}

function unionWithDiscriminant(p: Disc1 | Disc2 | Disc3) {
  switch (
    p.discriminant // Can only access common members
  ) {
    case "Disc1":
      console.log(p.m0); // Only Disc1 members are accessible here
      break;
    case "Disc2":
      console.log(p.m1);
      break;
    case "Disc3":
      console.log(p.m2);
      break;
  }
}
const constDisc1: Disc1 = { discriminant: "Disc1", m0: 97 };
const constDisc2: Disc2 = { discriminant: "Disc2", m1: "Hello" };
const constDisc3: Disc3 = { discriminant: "Disc3", m2: true };

unionWithDiscriminant(constDisc1);
unionWithDiscriminant(constDisc2);
unionWithDiscriminant(constDisc3);
