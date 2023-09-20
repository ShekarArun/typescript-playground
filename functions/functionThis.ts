// Functions with 'this' are tricky in JS
// TS helps control unexpected behaviour by allowing the specification of the type for 'this'
interface i1 {
  m1: string[];
  m2: number[];
  f1(): () => string;
}

let v1: i1 = {
  m1: ["Red", "Blue", "Green"],
  m2: [1, 2, 3],
  f1: function () {
    return function (this: i1) {
      return this.m1[0]; // Note how without the specification of 'this' type in the line above, the type of 'this' and m1 here is 'any'
    };
  },
};

v1.f1();
// Note: 'this' usage can also be restricted by specifying type as 'void'
