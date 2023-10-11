// User defined functions can also be used for type checks
interface PersonTypeCheck {
  firstName: string;
  lastName: string;
}
interface AnimalTypeCheck {
  name: string;
  numberOfLegs: number;
}

let personTypeCheck1: PersonTypeCheck = {
  firstName: "John",
  lastName: "Doe",
};
let animalTypeCheck1: AnimalTypeCheck = {
  name: "Tiger",
  numberOfLegs: 4,
};

// In the below function, the return type is set to p as the specified type
function isPersonTypeCheck(
  p: PersonTypeCheck | AnimalTypeCheck
): p is PersonTypeCheck {
  return "firstName" in p;
}

function showPersonTypeCheck(p: PersonTypeCheck | AnimalTypeCheck): void {
  // Note how here IntelliSense also filters down the parameters based on the condition
  if (isPersonTypeCheck(p))
    console.log(`Person FirstName ${p.firstName} LastName ${p.lastName}`);
  else console.log(`Animal ${p.name} Legs ${p.numberOfLegs}`);
}

showPersonTypeCheck(personTypeCheck1);
showPersonTypeCheck(animalTypeCheck1);
