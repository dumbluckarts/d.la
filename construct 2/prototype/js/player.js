var pl = {
    state: "default"
};

pl.inventory = (function() {

    var arr = [];

    function print() {
        console.log(arr);
    }

    function contains(item) {
        for (var i in arr) {
            var itemArray = arr[i].split(",");
            if (itemArray[0] == item) {
                return true;
            }
        }
    }

    function push(item, amount) {
        var str = item + ',' + amount;
        console.log(str);
        arr.push(str);
    }

    function remove(item) {
        for (var i in arr)
            if (arr[i].includes(item))
                arr.splice(i, 1)
    }

    function amount(item) {
        for (var i in arr) {
            if (contains(item)) {
                var amount = arr[i].split(",");
                amount = amount[1];
                return amount;
            }
        }
    }

    function setAmount(item, amount) {
        for (var i in arr) {
            if (arr[i].includes(item)) {
                var itemAmount;
                itemAmount = arr[i].split(",");
                itemAmount[1] = amount;
                itemAmount = itemAmount.join(",");
                arr[i] = itemAmount;
            }
        }
    }

    return {
        print: print,
        contains: contains,
        add: push,
        remove: remove,
        amount: amount,
        setAmount: setAmount
    };

})();
pl.inv = pl.inventory;