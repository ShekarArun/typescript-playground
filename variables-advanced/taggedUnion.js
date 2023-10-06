function unionWithDiscriminant(p) {
    switch (p.discriminant // Can only access common members
    ) {
        case "Disc1":
            console.log(p.m0); // Only Disc1 members are accessible here
            break;
        case "Disc2":
            console.log(p.m1);
            break;
        case "Disc3":
            console.log(p.m2);
            break;
    }
}
const constDisc1 = { discriminant: "Disc1", m0: 97 };
const constDisc2 = { discriminant: "Disc2", m1: "Hello" };
const constDisc3 = { discriminant: "Disc3", m2: true };
unionWithDiscriminant(constDisc1);
unionWithDiscriminant(constDisc2);
unionWithDiscriminant(constDisc3);
