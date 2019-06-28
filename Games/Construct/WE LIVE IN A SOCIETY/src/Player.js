
// WELCOME TO PLAYER.JS

/* Player.JS is where the player object is stored for the game. It defines data points needed for game
function along with muliple manipulative functions. 

Author - Nelson.M

File Name - Player.js
Functions -
    Defines and stores data needed for game function and mechanics related to the player object. */

export class Player {
    // constructor function for player defines the variables 
    constructor() {
        // basic attributes
        this._active = true;
        this._state = [ "moving" /* animation state  */, "firing" /* action state */ ];
        this._direction = "";
        this._health = 100;
        this._inventory = {};
        this._objective = {};

        // constant player movement attributes
        this._maxSpeed = 999;
        this._acceleration = 1500;
        this._deceleration = 200;
        this._jumpStrength = 100;
        this._gravity = 450;
        this._maxFallSpeed = 1000;
        this._jumpSustain = 10;
    }

    // getters
    get active() { return this._active }
    get state() { return this._state }
    get animationState() { return `${this._state[0]}  ${this._direction}` }
    get actionState() { return this._state[1] }
    get direction() { return this._direction }
    get inventory() { return this._inventory }
    get objective() { return this._objective }

    // return constant movement attributes in an array
    get movement() { return [ 
        this._maxSpeed,
        this._acceleration,
        this._deceleration,
        this._jumpStrength,
        this._gravity,
        this._maxFallSpeed,
        this._jumpSustain
    ]}

    // setters
    set active(bool) { this._active = bool }
    set state(arr) { this._state = arr }
    set animationState(string) { this._state[0] = string }
    set actionState(string) { this._state[1] = string }
    set direction(string) { this._direction = string }
    set objective(object) { this._objective = object }

    // expressions
}

var player = new Player();
