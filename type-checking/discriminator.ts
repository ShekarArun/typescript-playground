// Having a discriminator property is one way to differentiate similar types
interface HumanDiff {
  kind: "human";
  height: number;
  weight: number;
}
interface AnimalDiff {
  kind: "animal";
  color: string;
}
type SpeciesDiff = HumanDiff | AnimalDiff;

let humanDiff: HumanDiff = { kind: "human", height: 80, weight: 100 };

function printDiffData(p: SpeciesDiff): void {
  if (p.kind === "animal") console.log(`Animal: Color ${p.color}`);
  else if (p.kind === "human")
    console.log(`Human Height ${p.height} Weight ${p.weight}`);
}
printDiffData(humanDiff);
