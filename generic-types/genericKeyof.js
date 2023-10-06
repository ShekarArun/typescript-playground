// 'extends' can be used to extend a generic type if the new type needs the older one as a subset
function printProps(p1, p2) {
    // This implies K must at minimum have all props of T
    console.log(p1);
    console.log(p2);
}
let a = { prop1: "A", prop2: 1 };
let b = { prop1: "B", prop3: true };
let c = { prop1: "C", prop2: 2, prop4: 5 };
// printProps(a, b); Doesn't compile since b doesn't extend a
printProps(a, c);
function printProps2(p1, p2) {
    console.log("Printing:");
    p2.forEach((propName) => {
        console.log(`Property Name: ${String(propName)}, Value: ${p1[propName]}`);
    });
}
let d = { prop1: "p1", prop2: 99 };
printProps2(d, ["prop1"]);
printProps2(d, ["prop1", "prop2"]);
// printProps2(d, ["does", "not", "work"]); Not present in the extension of keyof
