function OldStyleClass() {
    this.someProperty = 1;
}
OldStyleClass.prototype.someMethod = function () {};


class ChildClass extends OldStyleClass {}

class ModernClass {
    someProperty = 1;
    someMethod() {}
}

class AnotherChildClass extends ModernClass {}

// example 2

function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have a valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!


//example 3

class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
Object.getPrototypeOf(ChildClass) === ParentClass;
// Allows inheritance of instance properties
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;



// creating mixins

class SomeClass extends class {
    constructor() {
        console.log("Base class");
    }
} {
    constuctor() {
        super();
        console.log("Derived class");
    }
}

new SomeClass();
// Base class
// Derived class