var player = (function() {

    let data = {
    	control: 1,
        state: "",
        input: 0
    };

    var state = (function() {
    	function val() {
    		return data.state;
    	}

    	function put(str) {
	    	data.state = str;
	    }

    	return {
    		val: val,
    		put: put
    	};
    })();

    var input = (function() {

        function getKey() {
            if (data.input == 87)
                return "w";
            else
            if (data.input == 65)
                return "a";
            else
            if (data.input == 83)
                return "s";
            else
            if (data.input == 68)
                return "d";
            else
                return 0;
        }

        function validate(key) {
            if ((key == 87) || (key == 65) || (key == 83) || (key == 68))
                return true
            else
                return false
        }

        function send(key) {
            if (validate(key)) {
                data.input = key;
                data.state = "walking";
            }
        }

        function remove(key) {
            if ((data.input == key) ||
                (data.input == key) ||
                (data.input == key) ||
                (data.input == key)) {
                data.state = "stopped-" + getKey();
                data.input = 0;
            }

        }

        return {
            key: getKey,
            validate: validate,
            send: send,
            remove: remove
        };
    })();

    return {
        dat: data,
        state: state,
        input: input
    };
})();