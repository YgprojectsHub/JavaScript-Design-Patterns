const carPrototype = {
    init(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    },
    getDetails() {
        return `${this.make} ${this.model} ${this.year}`;
    }
};

const car = Object.create(carPrototype);
car.init('Toyota', 'Camry', 2021);
console.log(car.getDetails());
