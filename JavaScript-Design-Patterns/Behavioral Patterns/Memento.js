class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

class Originator {
    setState(state) {
        this.state = state;
        console.log(`State set to ${state}`);
    }

    saveStateToMemento() {
        return new Memento(this.state);
    }

    getStateFromMemento(memento) {
        this.state = memento.getState();
        console.log(`State restored to ${this.state}`);
    }
}

class Caretaker {
    constructor() {
        this.mementoList = [];
    }

    add(memento) {
        this.mementoList.push(memento);
    }

    get(index) {
        return this.mementoList[index];
    }
}

const originator = new Originator();
const caretaker = new Caretaker();

originator.setState('State1');
originator.setState('State2');
caretaker.add(originator.saveStateToMemento());

originator.setState('State3');
caretaker.add(originator.saveStateToMemento());

originator.setState('State4');
console.log('Current State:', originator.state);

originator.getStateFromMemento(caretaker.get(0));
console.log('First saved State:', originator.state);
originator.getStateFromMemento(caretaker.get(1));
console.log('Second saved State:', originator.state);
