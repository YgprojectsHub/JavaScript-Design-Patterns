class Mediator {
    constructor() {
        this.colleagues = [];
    }

    addColleague(colleague) {
        this.colleagues.push(colleague);
    }

    send(message, sender) {
        this.colleagues.forEach(colleague => {
            if (colleague !== sender) {
                colleague.receive(message);
            }
        });
    }
}

class Colleague {
    constructor(mediator) {
        this.mediator = mediator;
        this.mediator.addColleague(this);
    }

    send(message) {
        console.log(`Sending message: ${message}`);
        this.mediator.send(message, this);
    }

    receive(message) {
        console.log(`Received message: ${message}`);
    }
}

const mediator = new Mediator();
const colleague1 = new Colleague(mediator);
const colleague2 = new Colleague(mediator);

colleague1.send('Hello, colleague2!');
// Sending message: Hello, colleague2!
// Received message: Hello, colleague2!
