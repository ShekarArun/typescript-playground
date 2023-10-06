let mapBenefitVariable1 = { x: 10 };
let mapBenefitVariable2 = { x: 10 };
// mapBenefitVariable2.x = 5; Error as read-only property
function convertInterfaceToReadOnly(o) {
    return o;
}
let mapBenefitVariable3 = convertInterfaceToReadOnly(mapBenefitVariable1);
