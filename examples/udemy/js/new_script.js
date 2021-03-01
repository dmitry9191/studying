'use strict';
/*
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} is logged out`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 30);

alex.hello();
ivan.exit();
alex.exit();


function sayMyName(phrase) {
    console.log(this);
    console.log(this.name + ' ' + phrase);
}

const heisenberg = {
    name: 'Mr White'
};

sayMyName.call(heisenberg, "you're goddamn right");
sayMyName.apply(heisenberg, ["you're goddamn right"]);
*/
/* bind
function count(num) {
    return this * num;
}

const double = count.bind(2);

console.log(double(3));
console.log(double(11));
*/

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    } 

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(5, 8);
const abcd = new ColoredRectangleWithText(5, 15, 'new', 'red');

console.log(abcd.calcArea());
abcd.showMyProps();

