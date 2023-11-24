class ElectricalAppliance {
    constructor(name){
        this.name = name;
        this.power = 1;
    }

    turnOn() {
        console.log(`${this.name} включен`);
        this.power += this.calculatePower();
        console.log(`Потребляемая мощность: ${this.power} Вт`);
    }

    turnOff() {
        console.log(`${this.name} выключен`);
        this.power -= this.calculatePower();
        console.log(`Потребляемая мощность: ${this.power} Вт`);
    }

    static calculatePowerStatic(power) {
        return power;
    }

    
    calculatePower() {
        return 0;
    }
}

class Computer extends ElectricalAppliance {
    constructor(processorSpeed){
        super('Компьютер');
        this.processorSpeed = processorSpeed;
    }

    calculatePower() {
        return Computer.calculatePowerStatic(this.processorSpeed * 2);
    }

    upgradeProcessor(newSpeed){
        console.log(`Обновляем процессор. Новая скорость: ${newSpeed} ГГц`);
        this.processorSpeed = newSpeed;
    }
}

class Lamp extends ElectricalAppliance {
    constructor(brightness){
        super('Лампа');
        this.brightness = brightness;
    }

    calculatePower() {
        return Lamp.calculatePowerStatic(this.brightness / 5);
    }

    setBrightness(newBrightness){
        console.log(`Устанавливаем новую яркость: ${newBrightness}`);
        this.brightness = newBrightness;
    }
}

const computer = new Computer(3.3);
const lamp = new Lamp(10);

computer.turnOn();  // Включаем компьютер
lamp.turnOn();      // Включаем лампу

console.log(computer); 
console.log(lamp);
