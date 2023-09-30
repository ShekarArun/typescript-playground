// const inter1: T1 = { x: "x1", y: 2 }; // Won't compile: y does not exist in T1
var inter2 = { x: "x1", y: 2 }; // Compile
var inter3 = { x: "x1", y: 2 }; // Compile
var with3Interfaces = { x: "1", y: 1, z: true };
function callMeBy(p) {
    if (p.kind === "cat") {
        // In the IF, p is Cat
        return p.name;
    }
    else if (p.kind === "dog") {
        // In the IF, p is Dog
        return p.nickname;
    }
    return "unknown";
}
var cat1 = { kind: "cat", name: "Hello Kitty" };
var dog1 = { kind: "dog", nickname: "Snoopy" };
console.log(callMeBy(cat1));
console.log(callMeBy(dog1));
