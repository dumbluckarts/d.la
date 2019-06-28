var dial = function() {

    var dat = {
        state: "finished",
        speed: 200,
        chars: [],
        output: "",
    };

    function getState() {
        return dat.state
    };

    function getOutput() {
        return dat.output
    };

    function buildCharList(str) {
        if (str.split(" ").includes(";s")) {
            dat.chars.push(str);
        } else {
            for (var i = 0; i < str.length; i++) {
                dat.chars.push(str.charAt(i));
            }
            dat.chars.push(":end");
        }
    }

    function scheduleAddition(char, timeout) {
        if (char.includes(";s")) {
            var spe = char.split(" ")[1];
            dat.speed = parseInt(spe);
        } else {
            setTimeout(() => {
                if (dat.state == "scrolling") {
                    if (char.includes(";s")) {
                        dat.chars.shift();
                    } else if (char != ":end") {
                        dat.output += char;
                        dat.chars.shift();
                    } else {
                        dat.chars.shift();
                        dat.state = "waiting";
                    }
                }
            }, timeout * dat.speed);
        }
    }
    
    function add(...str) {
        for (var i in str) {
            buildCharList(str[i]);
        }
    }

    function start() {
        if (dat.state == "waiting" || dat.state == "finished") {
            dat.state = "scrolling";
            for (var i in dat.chars) {
                scheduleAddition(dat.chars[i], i);
                if (dat.chars[i] == ":end") {
                    break;
                }
            }
        }
    }

    function stop() {
        dat.state = "waiting";
    }

    function clear() {
        dat.output = "";
    }

    return {
        print: function() {
            console.log(dat.state);
            console.log(dat.speed);
            console.log(dat.chars);
            console.log(dat.output);
        },
        dat: dat,
        state: getState,
        add: add,
        start: start,
        stop: stop,
        clear: clear,
        output: getOutput
    }
}();