let v1 = {
    m1: ["Red", "Blue", "Green"],
    m2: [1, 2, 3],
    f1: function () {
        return function () {
            return this.m1[0]; // Note how without the specification of 'this' type in the line above, the type of 'this' and m1 here is 'any'
        };
    },
};
v1.f1();
// Note: 'this' usage can also be restricted by specifying type as 'void'
