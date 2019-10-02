export class Vector {
    private x: number;
    private y: number;
    private layer: string;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		this.layer = null;
	}

	// getters
	getX() { return this.x }
	getY() { return this.y }
	getLayer() { return this.layer }
	// setters
	setX(x: number) { this.x = x }
	setY(y: number) { this.y = y }
	setLayer(layer: string) { this.layer = layer }

	// methods
	area() {} // return the area between the two points
	dimensions() {} // return map of width and height between the two points
	distance(vector: Vector) {} // get a the distance from two vectors
}

class Door {
    private location: Vector;
    private to: Vector;

    constructor(location: Vector, to: Vector) {
        this.location = location;
        this.to = to;
    
    }

    // getters
    getLocation() { return this.location }
    getTo() { return this.to }
    // setters
    setLocation(location: Vector) { this.location = location }
    setTo(to: Vector) { this.to = to }
}

class Room {
    private name: string;
    private vector: Vector;
    private doors: Array<Door>;

	constructor(name: string, vector: Vector) {
		this.name = name;
		this.vector = vector;
		this.doors = [];
    }

	// getters
	getName() { return this.name }
	getVector() { return this.vector }
	getDoors() { return this.doors }

	// setters
	setName(name: string) { this.name = name; }
	setVector(vector: Vector) { this.vector = vector; }
	setDoors(doors: Array<Door>) { this.doors = doors; }

	// methods

}

let room = new Room("owo", new Vector(1, 2));