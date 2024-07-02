class State {
    handle(context) {}
}

class Context {
    constructor() {
        this.state = null;
    }

    setState(state) {
        this.state = state;
    }

    request() {
        this.state.handle(this);
    }
}

class ConcreteStateA extends State {
    handle(context) {
        console.log('State A handling request.');
        context.setState(new ConcreteStateB());
    }
}

class ConcreteStateB extends State {
    handle(context) {
        console.log('State B handling request.');
        context.setState(new ConcreteStateA());
    }
}

const context = new Context();
const stateA = new ConcreteStateA();
context.setState(stateA);
context.request(); // State A handling request.
context.request(); // State B handling request.
