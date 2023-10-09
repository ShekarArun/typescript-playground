// Aliases can be made for primitive types
// Improves self-documentation of code
// Below example, although IP is a primitive string, it is better understood what data it contains
type IP = string;

function giveLength(ip: IP): void {
  console.log(ip.length);
}

giveLength("127.0.0.1");
const localHost: IP = "127.0.0.1";
giveLength(localHost);

// Unions can also have a type alias to reduce repeated code
// In the below case, a single type alias is easier to maintain
type ID = number | string | null;
function getId(id: ID): void {}
function setId(id: ID): void {}
function validId(id: ID): void {}

// Function aliases largely improve readability of code, especially when passed as parameters
type Code = (id: number, name: string) => boolean;
type ErrorCallBack = (message: string) => void;
function execute(code: Code, error: ErrorCallBack): void {
  if (!code(1, "Name1")) {
    error("Does not work");
  }
}
const myAlgorithm: Code = (id: number, name: string): boolean => {
  return false;
};

const errorHandling2: ErrorCallBack = (message: string): void => {
  console.log(message);
};

execute(myAlgorithm, errorHandling2);

// Type aliases are useful for recursive structures
type NodeTypeAlias = {
  name: string;
  child?: NodeTypeAlias;
};
let recursiveTypeAlias: NodeTypeAlias = {
  name: "Node1",
  child: {
    name: "Node2",
    child: {
      name: "Node3",
    },
  },
};

// Types can also intersect with other types, which is similar to extending multiple interfaces
type Family = {
  name: string;
};
type Individual = {
  firstName: string;
  lastName: string;
};
type Child<T> = {
  child: T;
};
type FamilyGroup = Family & Individual & Child<Individual>;
let familyGroup1: FamilyGroup = {
  name: "Family1",
  firstName: "Parent1",
  lastName: "Lastname",
  child: {
    firstName: "ChildFirst",
    lastName: "ChildLast",
  },
};
console.log(familyGroup1);
