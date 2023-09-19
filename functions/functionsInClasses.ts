// Functions in classes are defined using the visibility mode and without the 'function' keyword
class c1 {
  private f1() {}
  protected f2() {}
  public f3() {}
}

// Private methods cannot be accessed outside the class
class c2 {
  constructor() {
    this.privateFunction();
  }
  private privateFunction() {
    console.log("Private function invoked");
  }
}

const o1 = new c2();
// o1.privateFunction(); Error as the function is private and cannot be accessed outside the class
