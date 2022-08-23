import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";

class Car {
    brand : string;
    doors: number;
    color: Colors;
  
  
    constructor(brand: string, doors: number, color: Colors) {
        this.brand = brand;
        this.doors = doors;
        this.color = color;
    }

    turnOn(): void {
        console.log("Carro ligado.");
    }

    turnOff(): void {
        console.log("Carro desligado.");
    }

    turn(direction: Directions): void {
        console.log(`Virando para a ${direction}.`);
    }

    speedUp(): void {
        console.log("Acelerando o carro.");
    }

    speedDown(): void {
        console.log("Reduzindo a velocidade do carro.");
    }

    stop(): void {
        console.log("Parando o carro.");
    }

    honk(): void {
        console.log("Buzinando: BIP BIP");
    }

    openTheDoor(door: Doors): void {
        console.log(`Abrindo a porta ${door}.`);
    }

    closeTheDoor(door: Doors): void {
        console.log(`Fechando a porta ${door}.`);
    }
  }
  
  const car1 = new Car("Ford", 4, Colors.BLACK);
  
  //console.log(car1);

  export default Car;
