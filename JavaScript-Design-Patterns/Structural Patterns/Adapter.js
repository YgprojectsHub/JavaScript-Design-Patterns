
class Calculator {
    add(t1, t2) {
        return t1 + t2;
    }
    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalculatorAdapter {
    constructor() {
        this.calculator = new Calculator();
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return this.calculator.add(t1, t2);
            case 'sub':
                return this.calculator.sub(t1, t2);
            default:
                return NaN;
        }
    }
}

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15

const adapter = new CalculatorAdapter();
console.log(adapter.operations(10, 5, 'add')); // 15
