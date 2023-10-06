/*
Generic types allow for resuability of code
eg: React can have unlimited number of components, and identifying types by inheriting base classes is impractical
*/
// Below component has color property because it is generic with Props1
const comp1 = {
    name: "First Component",
    id: 1,
    props: { color: "red" },
};
// Below component has size property because it is generic with Props2
const comp2 = {
    name: "Second component",
    id: 2,
    props: { size: 10 },
};
console.log(comp1);
console.log(comp2);
