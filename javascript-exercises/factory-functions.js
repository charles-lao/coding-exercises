function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function() {
    console.log(this.name);
}

const jeff = new Person('Jeff', 33);

jeff.sayName();


// factory functions

const personFactory = (name, age) => {
    const sayHello = () => console.log('hello');
    return { name, age, sayHello };
};

const jeffFactory = personFactory('jeff', 27);

console.log(jeffFactory.name);

jeff.sayHello();

const name = "Manny";
const color = "red";
const number = 34;
const food = "rice";

console.log({name, color, number, food});

//

let a = 17;

const func = x => {
    let a = x;
};

func(99);

console.log(a);

//

const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
};

const taco = FactoryFunction('taco');

printString();
capitalizeString();
taco.capitalizeString();
taco.printString();

//

const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

const counter = counterCreator();

counter();
counter();
counter();
counter();

//

const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName = () => name;
    const die = () => {
        // uh oh
    };
    const damage = x => {
        health -= x;
        if (health <= 0) {
            die();
        }
    };
    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
        if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    };
}