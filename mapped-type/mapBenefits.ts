// Prior to the mapped type, conversion of interfaces from one type to another would require independent interface definitions and functions to perform the mapping
// eg: Obtaining a read-only copy of an interface
interface mapBenefitInterface1 {
  x: number;
}
interface mapBenefitInterface1ReadOnly {
  readonly x: number;
}

let mapBenefitVariable1: mapBenefitInterface1 = { x: 10 };
let mapBenefitVariable2: mapBenefitInterface1ReadOnly = { x: 10 };
// mapBenefitVariable2.x = 5; Error as read-only property

function convertInterfaceToReadOnly(
  o: mapBenefitInterface1
): mapBenefitInterface1ReadOnly {
  return o;
}

let mapBenefitVariable3 = convertInterfaceToReadOnly(mapBenefitVariable1);
// mapBenefitVariable3.x = 5; Error since the return type of the mapping function is an interface with read-only components

// Converting to read-only can be done using an inbuilt map function
type readOnlyInterface<T> = { readonly [P in keyof T]: T[P] };
