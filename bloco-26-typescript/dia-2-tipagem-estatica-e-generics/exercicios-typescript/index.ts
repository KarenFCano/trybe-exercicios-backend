import Car from "./Car";
import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";

const gol = new Car("Volkswagen", 4, Colors.SILVER);

console.log(gol);
gol.openTheDoor(Doors.DRIVER);
gol.closeTheDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();


