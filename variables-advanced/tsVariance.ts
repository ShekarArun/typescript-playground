// TS allows covariance
interface CovA {
  a1: number;
}
interface CovB extends CovA {
  b2: string;
}
interface CovC extends CovB {
  c3: boolean;
}

let cov1: CovA = { a1: 3 };
let cov2: CovB = { a1: 3, b2: "Arun" };
let cov3: CovC = { a1: 3, b2: "Shekar", c3: true };

cov1 = cov2;
console.log(cov1);
// cov3 = cov2; // Not allowed, since covariance allows supertypes but not subtypes
