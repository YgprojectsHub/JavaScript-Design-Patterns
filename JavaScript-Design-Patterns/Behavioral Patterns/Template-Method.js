class AbstractClass {
    templateMethod() {
        this.operation1();
        this.operation2();
    }

    operation1() {
        throw new Error('This method should be overridden');
    }

    operation2() {
        throw new Error('This method should be overridden');
    }
}

class ConcreteClass extends AbstractClass {
    operation1() {
        console.log('ConcreteClass operation1');
    }

    operation2() {
        console.log('ConcreteClass operation2');
    }
}

const concrete = new ConcreteClass();
concrete.templateMethod();
// ConcreteClass operation1
// ConcreteClass operation2
