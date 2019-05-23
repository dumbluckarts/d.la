var Player = function()
{
	var health = 0;
	var state = [ "idle", "right", 1];
	var controls =
	{ action: false, secondary: false, };
	var movement = 
	{
		maxspd: 300,
		accel: 2000,
		decel: 2000,
		jump: 500,
		grav: 1400,
		fallspd: 1000,
		active: true,
	};

	return {
		movement: movement, m: movement,
		controls: controls, c: controls,
		getHealth: function() { return health },
		getState: function() { return state[0] },
		getDirection: function() { return state[1] },
		getDirectionNum: function() { return state[2] },

		setHealth: function(newHealth) 
			{ health = newHealth },
		setState: function(newState, newDirection, directionInt)
			{
				state[0] = newState;
				(newDirection) ? state[1] = newDirection : null; 
				(directionInt) ? state[2] = directionInt : null;
			},
		setDirection: function(newDirection, directionInt)
			{ state[1] = newDirection; state[2] = directionInt },
		logState: function() 
			{ console.log(state) },
	}
}();