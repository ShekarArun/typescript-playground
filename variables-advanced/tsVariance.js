let cov1 = { a1: 3 };
let cov2 = { a1: 3, b2: "Arun" };
let cov3 = { a1: 3, b2: "Shekar", c3: true };
cov1 = cov2;
console.log(cov1);
// cov3 = cov2; // Not allowed, since covariance allows supertypes but not subtypes
