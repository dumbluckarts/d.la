"use strict";

var inv = (function() {

    let items = [];

    let slots = [
        "sword",
        "empty"
    ];

    let getItemsArray = function() {
        return items;
    };

    let getKeys = function() {
        let keys = [];
        for (let i in items) keys.push(items[i].split(",")[0]); return keys;
    };

    let getValues = function() {
        let vals = [];
        for (let i in items) vals.push(items[i].split(",")[1]); return vals;
    };

    let getIndex = function(item) {
        for (let i in items) if (getKeys()[i] == item) return i;
    }

    let getValue = function(item) {
        for (let i in items) {
            if (getKeys()[i] == item) return parseInt(getValues()[i]);
        }
    };

    function printArray() {
        console.log(items);
    }

    function pushToArray(item, amount) {
        if (getKeys().includes(item)) {
            let toAdd = (amount ? amount : 1);
            let val = getValue(item) + toAdd;
            items[getIndex(item)] = item + "," + val;
        } else {
            if (amount) // != null
                item += "," + amount; 
            else 
                item += ",1";

            // create new item in array.
            items.push(item);
        }
    }

    function putAmount(item, amount) {
        for (let i in items) {
            if (getKeys()[i] == item) {
                let itm = getKeys()[i];
                let amnt = amount;
                let newStr = itm + "," + amnt;
                items[i] = newStr;
            }
        }
    }

    function removeFromArray(item) {
        for (let i in items) {
            if (items[i].includes(item)) {
                items.splice(i, 1);
            }
        }
    }

    function run(func) {
        func(items);
    }

    return {
        dat: getItemsArray,
        val: getValue,
        print: printArray,
        add: pushToArray,
        remove: removeFromArray,
        put: putAmount,
        run: run,
        //start slots
        one: slots[0],
        two: slots[1],
    };
})();