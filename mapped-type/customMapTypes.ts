// Create a non-null custom map which compiles only if a value is not nullable
type notNullValue<T> = T extends null | undefined ? never : T;

function printVal<T>(p: notNullValue<T>): void {
  console.log(p);
}

printVal("Test"); // Compiles
// printVal(null); // Raises warning/error on compilation

// Conditionally adding a property
interface dynamicPropertyInterface1 {
  name: string;
  dateCreated: Date;
}
interface dynamicPropertyInterface2 {
  name: string;
}

// Create a generic type which adds 'dateModified' only if 'dateCreated' is present
type Modified<T> = T extends { dateCreated: Date }
  ? T & { dateModified: Date }
  : never;

const conditionalTypeConst1: dynamicPropertyInterface1 = {
  name: "John",
  dateCreated: new Date(),
};
const conditionalTypeConst2: Modified<dynamicPropertyInterface1> = {
  ...conditionalTypeConst1,
  dateModified: new Date(),
};
console.log(conditionalTypeConst2);
