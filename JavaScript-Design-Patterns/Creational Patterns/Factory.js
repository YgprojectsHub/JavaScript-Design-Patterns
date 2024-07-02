class Vehicle {
    type;
    constructor(type) {
        this.type = type;
        console.log("Type vehicle",type)
    }
    drive() {
        console.log("Type drive",this.type)
    }
}

class Car extends Vehicle {
    constructor(){
        super("Car")
    }
}

class MotorCycle extends Vehicle {
    constructor(){
        super("MotorCycle")
    }
}

class VehicleFactory{
    createVehicle(createVehicle){
        switch(createVehicle){
            case "Car":
                return new Car()
            case "MotorCycle":
                return new MotorCycle()
            default:
                break;
        }
    }
}

const factory = new VehicleFactory()
const car = factory.createVehicle("Car")
car.drive()
const motorcycle = factory.createVehicle("MotorCycle")
motorcycle.drive()