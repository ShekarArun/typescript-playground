/*
With generic, one can specify that the type passed into a generic class/function is minimum of a certain type or extends a certain interface
This allows to ensure present of properties within an object for a function that are necessary for the function. Properties beyond that are not essential
*/
function genericFunction(p1) { }
const temp = { id: 5 };
genericFunction(temp); // Allowed
genericFunction({ id: 6 }); // Allowed
function genericFunction2(p) {
    console.log(p.id);
    //   console.log(p.id2); Allowed, but we cannot be sure of the presence of this property
}
genericFunction2({ id: 123, id2: 456 });
// An example use case is for loggers, which in some error function may mandatorily need error properties to be present, but other properties are not under the function's control
