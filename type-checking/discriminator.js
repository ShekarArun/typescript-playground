let humanDiff = { kind: "human", height: 80, weight: 100 };
function printDiffData(p) {
    if (p.kind === "animal")
        console.log(`Animal: Color ${p.color}`);
    else if (p.kind === "human")
        console.log(`Human Height ${p.height} Weight ${p.weight}`);
}
printDiffData(humanDiff);
