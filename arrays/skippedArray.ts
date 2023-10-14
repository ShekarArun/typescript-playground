// Values can be skipped in an array
const arrSkip1 = [0, , , 3, 4, 5];
console.log(arrSkip1);

const arrSkip2 = [];
arrSkip2[0] = 0;
arrSkip2[2] = 5;
console.log(arrSkip2);
console.log(arrSkip2[1]);
