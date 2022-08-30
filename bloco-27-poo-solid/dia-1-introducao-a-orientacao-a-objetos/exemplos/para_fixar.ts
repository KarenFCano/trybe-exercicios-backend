//Exercício 1 

class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn() {
    console.log(`Turning on ${this._brand}, size: ${this._size}, resolution: ${this._resolution}, connections: ${this._connections}` );
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    // permite setar undefined ou uma conexão que esteja no `connections`
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('Samsung', 55, '4K', ['HDMI', 'USB', 'VGA']);
const tv2 = new Tv('LG', 42, 'Full HD', ['HDMI', 'USB', 'VGA']);

tv1.turnOn();
tv2.turnOn();
tv1.connectedTo = 'Wi-Fi';
console.log('Connected to: ', tv1.connectedTo);
