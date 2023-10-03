// keyof allows us to extract names of members from a type or interface
// It allows the code to be restrictive in terms of potential values
interface InterfaceWithMembers {
  id: string;
  title: string;
  createdBy: Date;
}
const members1: keyof InterfaceWithMembers = "title"; // Allows only values of 'id', 'title' or 'createdBy'
// const members2: keyof InterfaceWithMembers = "abc"; // Not allowed
