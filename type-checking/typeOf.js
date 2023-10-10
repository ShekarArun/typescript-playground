// TS has a feature called Control Flow Analysis which allows for more granular understanding of a type
// In the below example, the type for each else block is gradually shaved off to remove the previous case that has been covered
function typeOfCheck(p) {
    if (typeof p === "string")
        console.log("String");
    else if (typeof p === "number")
        console.log("Number");
    else if (typeof p === "boolean")
        console.log("Boolean");
}
typeOfCheck("Hello");
typeOfCheck(1);
typeOfCheck(true);
