class CPU {
    freeze() {
        console.log("CPU freeze");
    }

    jump(position) {
        console.log(`CPU jump to ${position}`);
    }

    execute() {
        console.log("CPU execute");
    }
}

class Memory {
    load(position, data) {
        console.log(`Memory load ${data} at ${position}`);
    }
}

class HardDrive {
    read(lba, size) {
        console.log(`HardDrive read ${size} bytes from ${lba}`);
        return "data";
    }
}

class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    start() {
        this.cpu.freeze();
        this.memory.load(0, this.hardDrive.read(0, 1024));
        this.cpu.jump(0);
        this.cpu.execute();
    }
}

const computer = new ComputerFacade();
computer.start();
