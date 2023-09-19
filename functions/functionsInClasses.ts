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

// Private properties as defined above are still transpiled to JS in a manner that they are accessible outside the class
// The 'Private Field' operator '#' was introduced in JS to overcome this, and is also available in TS
class c3 {
  constructor() {
    this.#privateFunction();
  }
  #privateFunction() {
    console.log("Newer private function invoked!");
  }
}
const o2 = new c3();
// o2.#privateFunction() Again, error because private property is not accessible externally
