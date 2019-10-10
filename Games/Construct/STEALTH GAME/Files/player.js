//LEGACY!!
// var player = (function() {

//     let data = {
//         control: 1,
//         state: "",
//         direction: 0,
//         input: 0
//     };

//     var state = (function() {
//         function val() {
//             return data.state;
//         }

//         function put(str) {
//             data.state = str;
//         }

//         return {
//             val: val,
//             put: put
//         };
//     })();

//     var input = (function() {

//         function getKey() {
//             if (data.input == 87) {
//             	data.direction = 0;
//                 return "w";
//             }
//             else
//             if (data.input == 65) {
//             	data.direction = 1;
//                 return "a";
//             }
//             else
//             if (data.input == 83) {
//             	data.direction = 2;
//                 return "s";
//             }
//             else
//             if (data.input == 68) {
//             	data.direction = 3;
//                 return "d";
//             }
//             else {
//                 return 0;
//             }
//         }

//         function validate(key) {
//             if ((key == 87) || (key == 65) || (key == 83) || (key == 68))
//                 return true
//             else
//                 return false
//         }

//         function send(key) {
//             if (validate(key)) {
//             	getKey();
//                 data.input = key;
//                 data.state = "walking";
//             }
//         }

//         function remove(key) {
//         	if (data.input == key) {
//         		data.input = 0;
//         	}
//         }

//         return {
//             key: getKey,
//             validate: validate,
//             send: send,
//             remove: remove
//         };
//     })();

//     return {
//         dat: data,
//         state: state,
//         input: input
//     };
// })();
//END!! LEGACY!!

const stringDirectionToNumber = (direction) => {
    if (direction === 'north')
        return 0;
    else if (direction === 'east')
        return 1;
    else if (direction === 'south')
        return 2;
    else
        return 3;
}

const numberDirectionToString = (direction) => {
    if (direction === 0)
        return 'north';
    else if (direction === 1)
        return 'east';
    else if (direction === 2)
        return 'south';
    else
        return 'west';
}

function resolveKey(key) {
    if (key == 87) {
        return "w";
    }
    else
    if (key == 65) {
        return "a";
    }
    else
    if (key == 83) {
        return "s";
    }
    else
    if (key == 68) {
        return "d";
    }
}

const keyToDirection = (key) => {
    if (direction === 'w')
        return 'north';
    else if (direction === 'a')
        return 'east';
    else if (direction === 's')
        return 'south';
    else if (direction === 'd')
        return 'west';
    else
        return;
}

var player = (() => {

    const MAX_HEALTH = 10,
        MAX_STAMINA = 10,
        MAX_MANA = 10,
        INPUT_DEFAULT = '',
        DIRECTION_DEFAULT = 'east',
        ANIMATION_DEFAULT = 'default',
        MOVING_DEFAULT = false,
        DEAD_DEFAULT = false,
        MOBILE_DEFAULT = true,
        EXHAUSTED_DEFAULT = false,
        MAGICAL_EXHAUSTED_DEFAULT = false;

    var _health,
        _stamina,
        _mana,
        _input,
        _direction,
        _animationState,
        _isMoving,
        _isDead,
        _isMobile,
        _isExhausted,
        _isMagicallyExhausted

    function constructor() {
        _health = MAX_HEALTH;
        _stamina = MAX_STAMINA;
        _mana = MAX_MANA;
        _input = INPUT_DEFAULT;
        _direction = DIRECTION_DEFAULT;
        _animationState = ANIMATION_DEFAULT;
        _isMoving = MOVING_DEFAULT;
        _isDead = DEAD_DEFAULT;
        _isMobile = MOBILE_DEFAULT;
        _isExhausted = EXHAUSTED_DEFAULT;
        _isMagicallyExhausted = MAGICAL_EXHAUSTED_DEFAULT;
    } constructor();

    // public aliases of player constants
    const maxHealth = () => MAX_HEALTH
    const maxStamina = () => MAX_STAMINA
    const maxMana = () => MAX_MANA

    // getters
    const getHealth = () => _health; 
    const getStamina = () => _stamina;
    const getMana = () => _mana;

    const getInput = () => _input; // input
    const getKeypress = getInput;
    const getKeypressed = getInput;
    const getInputDirection = () => keyToDirection(getInput());
    const getInputDirectional = () => stringDirectionToNumber(keyToDirection(getInput()));

    const getDirection = () => _direction;
    const getDir = getDirection;
    const getDirectional = () => stringDirectionToNumber(_direction);

    const getAnimationState = () => _animationState; // animation
    const getAnimation = getAnimationState;
    const getAnim = getAnimationState;
    const getState = getAnimationState;

    const isDead = () => _isDead; // game states
    const isAlive = () => !isDead();
    const isMobile = () => _isMobile;
    const isMoving = () => _isMoving;
    const canMove = isMobile;
    const isExhausted = () => _isExhausted;
    const isOutOfStamina = isExhausted;
    const outOfStamina = isExhausted;
    const noStamina = isExhausted;
    const isMagicallyExhausted = () => _isMagicallyExhausted;
    const isOutOfMana = isMagicallyExhausted;
    const outOfMana = isMagicallyExhausted;
    const noMana = isMagicallyExhausted;

    // setters
    const setHealth = (num) => { 
        _health = (num > MAX_HEALTH) ? MAX_HEALTH : num;
        if (_health > 0) return;
        _health = 0;
        setDead();
    }
    const setStamina = (num) => {
        _stamina = (num > MAX_STAMINA) ? MAX_STAMINA : num;
        if (_stamina > 0) return;
        _stamina = 0;
        setExhausted(true);
    }
    const setMana = (num) => {
        _stamina = (num > MAX_MANA) ? MAX_MANA : num;
        if (_mana > 0) return;
        _mana = 0;
        setMagicallyExhausted(true);
    }
    const setMagika = setMana;

    const setInput = (str) => {
        _input = str; // input
    }
    const setKeypress = setInput;
    const setKeypressed = setInput;
    const setInputFromKeyCode = (key) => setInput(resolveKey(key));
    const clearInput = (key) => {
        if (resolveKey(key) === getInput())
            setInput(undefined); 
    }

    const setDirection = (obj) => {
        if (typeof obj === 'string')
            _direction = obj;
        else
            _direction = numberDirectionToString(obj);
    }
    const setDir = setDirection;

    const setAnimationState = (str) => _animationState = str; // animation
    const setAnimation = setAnimationState;
    const setAnim = setAnimationState;
    const setState = setAnimationState;

    const setMoving = () => _isMoving = true; // boolean values
    const setStopped = () => _isMoving = false;
    const setDead = (bool) => _isDead = bool;
    const setAlive = () => _isDead = false;
    const setRefreshed = () => _isExhausted = false;
    const setExhausted = (bool) => _isExhausted = bool;
    const setOutOfStamina = setExhausted;
    const setNoStamina = setExhausted;
    const setMagicallyExhausted = (bool) => _isMagicallyExhausted = bool;
    const setOutOfMana = setMagicallyExhausted;
    const setNoMana = setMagicallyExhausted;

    return {
        maxHealth,
        maxStamina,
        maxMana,

        getHealth,
        getStamina,
        getMana,
        getInput,
        getKeypress,
        getKeypressed,
        getInputDirection,
        getInputDirectional,
        getDirection,
        getDir,
        getDirectional,
        getAnimationState,
        getAnimation,
        getAnim,
        getState,
        isDead,
        isAlive,
        isMobile,
        isMoving,
        canMove,
        isExhausted,
        isOutOfStamina,
        outOfStamina,
        noStamina,
        isMagicallyExhausted,
        isOutOfMana,
        outOfMana,
        noMana,

        setHealth,
        setStamina,
        setMana,
        setMagika,
        setInput,
        setKeypress,
        setKeypressed,
        setInputFromKeyCode,
        clearInput,
        setDirection,
        setDir,
        setAnimationState,
        setAnimation,
        setAnim,
        setState,
        setMoving,
        setStopped,
        setDead,
        setAlive,
        setRefreshed,
        setExhausted,
        setOutOfStamina,
        setNoStamina,
        setMagicallyExhausted,
        setOutOfMana,
        setNoStamina
    }
})();

// class Player {
//     // methods
//     resetValues = () => {
//         _health = MAX_HEALTH;
//         _stamina = MAX_STAMINA;
//         _mana = MAX_MANA;
//         _input = INPUT_DEFAULT;
//         _direction = DIRECTION_DEFAULT;
//         _animationState = ANIMATION_DEFAULT;
//         _isMoving = MOVING_DEFAULT;
//         _isDead = DEAD_DEFAULT;
//         _isMobile = MOBILE_DEFAULT;
//         _isExhausted = EXHAUSTED_DEFAULT;
//         _isMagicallyExhausted = MAGICAL_EXHAUSTED_DEFAULT;
//     }

//     // public aliases of player constants
//     maxHealth = () => MAX_HEALTH
//     maxStamina = () => MAX_STAMINA
//     maxMana = () => MAX_MANA

//     // getters
//     getHealth = () => _health; 
//     getStamina = () => _stamina;
//     getMana = () => _mana;

//     getInput = () => _input; // input
//     getKeypress = () => getInput();
//     getKeypressed = () => getInput();
//     getInputDirection = () => keyToDirection(getInput());
//     getInputDirectional = () => stringDirectionToNumber(keyToDirection(getInput()));

//     getDirection = () => _direction;
//     getDir = () => getDirection();
//     getDirectional = () => stringDirectionToNumber(_direction);

//     getAnimationState = () => _animationState; // animation
//     getAnimation = () => getAnimationState();
//     getAnim = () => getAnimationState();
//     getState = () => getAnimationState();

//     isDead = () => _isDead; // game states
//     isAlive = () => !isDead();
//     isMobile = () => _isMobile;
//     canMove = () => isMobile();
//     isExhausted = () => _isExhausted;
//     isOutOfStamina = () => isExhausted();
//     outOfStamina = () => isExhausted();
//     noStamina = () => isExhausted();
//     isMagicallyExhausted = () => _isMagicallyExhausted;
//     isOutOfMana = () => isMagicallyExhausted();
//     outOfMana = () => isMagicallyExhausted();
//     noMana = () => isMagicallyExhausted();

//     // setters
//     setHealth = (num) => { 
//         _health = (num > MAX_HEALTH) ? MAX_HEALTH : num;
//         if (_health > 0) return;
//         _health = 0;
//         setDead();
//     }
//     setStamina = (num) => {
//         _stamina = (num > MAX_STAMINA) ? MAX_STAMINA : num;
//         if (_stamina > 0) return;
//         _stamina = 0;
//         setExhausted(true);
//     }
//     setMana = (num) => {
//         _stamina = (num > MAX_MANA) ? MAX_MANA : num;
//         if (_mana > 0) return;
//         _mana = 0;
//         setMagicallyExhausted(true);
//     }
//     setMagika = (num) => setMana(num);

//     setInput = (str) => {
//         _input = str; // input
//         if (_input === 'undefined')
//             setMoving(false);
//         else
//             setMoving(true);
//         setDirection(getInputDirection());
//     }
//     setKeypress = (str) => setInput(str);
//     setKeypressed = setInput;
//     setInputFromKeyCode = (key) => _input = resolveKey(key);
//     clearInput = () => _input = undefined;

//     setDirection = (obj) => {
//         if (typeof obj === 'string')
//             _direction = obj;
//         else
//             _direction = numberDirectionToString(obj);
//     }
//     setDir = (obj) => setDirection(obj);

//     setAnimationState = (str) => _animationState = str; // animation
//     setAnimation = (str) => setAnimationState(str);
//     setAnim = (str) => setAnimationState(str);
//     setState = (str) => setAnimationState(str);

//     setMoving = (bool) => _isMoving = bool; // boolean values
//     setMoving = () => setMoving(true);
//     setStopped = () => setMoving(false);
//     setDead = (bool) => _isDead = bool;
//     setAlive = () => _isDead = false;
//     setRefreshed = () => _isExhausted = false;
//     setExhausted = (bool) => _isExhausted = bool;
//     setOutOfStamina = (bool) => setExhausted(bool);
//     setNoStamina = (bool) => setExhausted(bool);
//     setMagicallyExhausted = (bool) => _isMagicallyExhausted = bool;
//     setOutOfMana = (bool) => setMagicallyExhausted(bool);
//     setNoMana = (bool) => setMagicallyExhausted(bool);

//     constructor() {
//         _health = MAX_HEALTH;
//         _stamina = MAX_STAMINA;
//         _mana = MAX_MANA;
//         _input = INPUT_DEFAULT;
//         _direction = DIRECTION_DEFAULT;
//         _animationState = ANIMATION_DEFAULT;
//         _isMoving = MOVING_DEFAULT;
//         _isDead = DEAD_DEFAULT;
//         _isMobile = MOBILE_DEFAULT;
//         _isExhausted = EXHAUSTED_DEFAULT;
//         _isMagicallyExhausted = MAGICAL_EXHAUSTED_DEFAULT;
//     }
// }
// var player = new Player();