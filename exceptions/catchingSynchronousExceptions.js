class ArgumentNullException extends Error {
    constructor(name) {
        super("Argument was undefined");
        this.name = name;
        Object.setPrototypeOf(this, ArgumentNullException.prototype);
    }
}
class ReferenceException extends Error {
    constructor(x, y) {
        super("Reference was undefined");
        this.x = x;
        this.y = y;
        Object.setPrototypeOf(this, ReferenceException.prototype);
    }
}
function throwTwoExceptions(switcher) {
    if (switcher) {
        throw new ArgumentNullException("Switcher");
    }
    throw new ReferenceException(1, 2);
}
try {
    throw new ArgumentNullException("Switcher");
}
catch (ex) {
    if (ex instanceof ArgumentNullException) {
        console.log("I can access name:" + ex.name);
    }
    else if (ex instanceof ReferenceException) {
        console.log("I can access x and y:" + ex.x + " and " + ex.y);
    }
}
