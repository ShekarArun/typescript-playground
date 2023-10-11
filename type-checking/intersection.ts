// Currency is a common use case where type intersection is useful
type SupportCurrencies = "USD" | "INR";

interface BrandedCurrency<TName extends SupportCurrencies> {
  kind: TName;
}

function getMoney<T extends SupportCurrencies>(val: number) {
  return val as number & BrandedCurrency<T>;
}

let money1 = getMoney<"USD">(100);
console.log(money1);
let money2 = getMoney<"INR">(50);
console.log(money2);
