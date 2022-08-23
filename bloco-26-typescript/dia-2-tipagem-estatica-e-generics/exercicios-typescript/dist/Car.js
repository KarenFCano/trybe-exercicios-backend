"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colors_1 = __importDefault(require("./Colors"));
class Car {
    constructor(brand, doors, color) {
        this.brand = brand;
        this.doors = doors;
        this.color = color;
    }
    turnOn() {
        console.log("Carro ligado.");
    }
    turnOff() {
        console.log("Carro desligado.");
    }
    turn(direction) {
        console.log(`Virando para a ${direction}.`);
    }
    speedUp() {
        console.log("Acelerando o carro.");
    }
    speedDown() {
        console.log("Reduzindo a velocidade do carro.");
    }
    stop() {
        console.log("Parando o carro.");
    }
    honk() {
        console.log("Buzinando: BIP BIP");
    }
    openTheDoor(door) {
        console.log(`Abrindo a porta ${door}.`);
    }
    closeTheDoor(door) {
        console.log(`Fechando a porta ${door}.`);
    }
}
const car1 = new Car("Ford", 4, Colors_1.default.BLACK);
//console.log(car1);
exports.default = Car;
