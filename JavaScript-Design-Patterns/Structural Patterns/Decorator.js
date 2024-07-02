class Car {
    constructor() {
        this.cost = 20000;
    }
    
    getCost() {
        return this.cost;
    }

    getFullDetails() {
        return this
    }
}

function sunroof(car) {
    car.hasSunroof = true;
    car.cost += 1500;
    return car;
}

function leatherSeats(car) {
    car.hasLeatherSeats = true;
    car.cost += 2000;
    return car;
}

let myCar = new Car();
myCar = sunroof(myCar);
myCar = leatherSeats(myCar);

console.log(`Cost of my car: ${myCar.getCost()}`); // Cost of my car: 23500

console.log(myCar.getFullDetails())