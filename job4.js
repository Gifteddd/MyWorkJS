function ElectricalAppliance(name){
    this.name = name;
    this.power = 1;
}

ElectricalAppliance.prototype.turnOn = function(){  //добавляем методы в протатип ElectricalAppliance для вкл и выкл прибора
    console.log(`${this.name} включен`);
    this.power += this.calculatePower();
    console.log(`Потребляемая мощность: ${this.power} Вт` );
};

ElectricalAppliance.prototype.turnOff = function(){
    console.log(`${this.name} выключен`);
    this.power -= this.calculatePower();
    console.log(`Потребляемая мощность: ${this.power} Вт` );
};

function Computer (processorSpeed){
    // Вызываем конструктор родительской функции, передавая ей имя прибора
    ElectricalAppliance.call(this, 'Компьютер');
    this.processorSpeed = processorSpeed;
};

// Устанавливаем Computer в качестве прототипа для наследования методов
Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer; // Восстанавливаем ссылку на конструктор


Computer.prototype.calculatePower = function(){
    // Пусть потребляемая мощность будет зависеть от скорости процессора
    return this.processorSpeed * 2; 
};

Computer.prototype.upgradeProcessor = function(newSpeed){
    console.log(`Обновляем процессор. Новая скорость: ${newSpeed} ГГц`);
    this.processorSpeed = newSpeed;
};


function Lamp (brightness){
    ElectricalAppliance.call(this, 'Настольная Лампа');
    this.brightness = brightness;
};

Lamp.prototype = Object.create(ElectricalAppliance.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.calculatePower = function(){
     // Пусть потребляемая мощность будет зависеть от яркости лампы
     return this.brightness / 5;
};

Lamp.prototype.setBrightness = function(newBrightness){
    console.log(`Устанавливаем новую яркость: ${newBrightness}`);
    this.brightness = newBrightness;

};

// Создаем экземпляры компьютера и лампы

const computer = new Computer(3.3);
const lamp = new Lamp(10);

computer.turnOn();  // Включаем компьютер
lamp.turnOn();      // Включаем лампу

console.log(computer); 
console.log(lamp); 