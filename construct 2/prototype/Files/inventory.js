"use strict";

var inv = (function() {

    let items = {
        slots: [
            "sword",
            "empty"
        ],
    };

    let keys = () => {
        return Object.keys(items)
    };

    let vals = () => {
        return Object.values(items)
    };

    let key = function(item) {
        for (let i in key) {
            if (key == item) {
                return key[i];
            }
        }
    }

    let val = function(item) {
        if (keys().includes(item))
            return parseInt(items[item], 10);
        else
            return 0;
    }

    function printObj() {
        console.log(items);
    }

    function pushToObj(item, amount) {
        if (!keys().includes(item)) {
            items[item] = (amount ? amount : 1);
        } else {
            let newAmnt = val(item) + (amount ? amount : 0);
            items[item] = newAmnt;
        }
    }

    function putInObj(item, amount) {
        if (amount) {
            items[item] = amount;
        } else {
            items[item] = 1;
        }
    }

    function removeFromObj(item) {
        delete items[item];
    }

    return {
        dat: items,
        key: key,
        val: val,
        print: printObj,
        add: pushToObj,
        put: putInObj,
        remove: removeFromObj,
        // slots
        one: items.slots[0],
        two: items.slots[1],
    };
})();