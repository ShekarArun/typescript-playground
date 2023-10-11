let personTypeCheck1 = {
    firstName: "John",
    lastName: "Doe",
};
let animalTypeCheck1 = {
    name: "Tiger",
    numberOfLegs: 4,
};
// In the below function, the return type is set to p as the specified type
function isPersonTypeCheck(p) {
    return "firstName" in p;
}
function showPersonTypeCheck(p) {
    // Note how here IntelliSense also filters down the parameters based on the condition
    if (isPersonTypeCheck(p))
        console.log(`Person FirstName ${p.firstName} LastName ${p.lastName}`);
    else
        console.log(`Animal ${p.name} Legs ${p.numberOfLegs}`);
}
showPersonTypeCheck(personTypeCheck1);
showPersonTypeCheck(animalTypeCheck1);
