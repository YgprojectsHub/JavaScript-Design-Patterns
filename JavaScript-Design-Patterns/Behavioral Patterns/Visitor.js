class Element {
    accept(visitor) {
        throw new Error('This method should be overridden');
    }
}

class Visitor {
    visitConcreteElementA(element) {
        throw new Error('This method should be overridden');
    }

    visitConcreteElementB(element) {
        throw new Error('This method should be overridden');
    }
}

class ConcreteElementA extends Element {
    accept(visitor) {
        visitor.visitConcreteElementA(this);
    }

    operationA() {
        console.log('ConcreteElementA operationA');
    }
}

class ConcreteElementB extends Element {
    accept(visitor) {
        visitor.visitConcreteElementB(this);
    }

    operationB() {
        console.log('ConcreteElementB operationB');
    }
}

class ConcreteVisitor1 extends Visitor {
    visitConcreteElementA(element) {
        console.log('ConcreteVisitor1 visiting ConcreteElementA');
        element.operationA();
    }

    visitConcreteElementB(element) {
        console.log('ConcreteVisitor1 visiting ConcreteElementB');
        element.operationB();
    }
}

const elements = [new ConcreteElementA(), new ConcreteElementB()];
const visitor = new ConcreteVisitor1();

console.log(elements, visitor);

elements.forEach(element => element.accept(visitor));
// ConcreteVisitor1 visiting ConcreteElementA
// ConcreteElementA operationA
// ConcreteVisitor1 visiting ConcreteElementB
// ConcreteElementB operationB
