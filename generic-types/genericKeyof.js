// 'extends' can be used to extend a generic type if the new type needs the older one as a subset
function printProps(p1, p2) {
    // This implies K must at minimum have all props of T
    console.log(p1);
    console.log(p2);
}
var a = { prop1: "A", prop2: 1 };
var b = { prop1: "B", prop3: true };
var c = { prop1: "C", prop2: 2, prop4: 5 };
// printProps(a, b); Doesn't compile since b doesn't extend a
printProps(a, c);
