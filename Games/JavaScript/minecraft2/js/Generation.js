class Vector {
	constructor(x, y) {
		this.x = 0;
		this.y = 0;
		this.layer = "";
	}

	// getters
	get x() { return this.x }
	get y() { return this.y }
	get layer() { return this.layer }

	// setters
	set x(x) { this.x = x }
	set y(y) { this.y = y }
	set layer(str) { this.layer = str }

	// methods
	area() {} // return the area between the two points
	dimensions() {} // return map of width and height between the two points
	distance(vector) {} // get a the distance from two vectors
}

class Room {
	constructor(name, vector) {
		this.name = name;
		this.vector = vector;
		this.doors = [];
	}

	// getters
	get name() { return this.name }
	get vector() { return this.vector }
	get doors() { return this.doors }

	// setters
	set name(name) { this.name = name; }
	set vector(vector) { this.vector = vector; }
	set doors(doors) { this.doors = doors; }

}

export class Generation {

	constructor() {
		this.rooms = [];
	}

	
};