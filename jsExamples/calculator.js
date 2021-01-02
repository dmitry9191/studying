function Calculator() {
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    this.calculate = function(str) {
        strArr = str.split(' ');
        let a = +strArr[0];
        let b = +strArr[2];
        let op = strArr[1];
        if (!this.operations[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.operations[op](a, b);
    }
    this.addMethod = function(name, func) {
        this.operations[name] = func;
    }
}

let calc = new Calculator;
let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
console.log(calc.calculate('2 + 5'));
console.log(powerCalc.calculate('2 / 3'));
