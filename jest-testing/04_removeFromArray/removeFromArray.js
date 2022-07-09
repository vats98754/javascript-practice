const removeFromArray = function() {
    const arr = arguments[0];
    const removeArr = [];
    for (let i = 1; i < arguments.length; i++) {
        removeArr.push(arguments[i]);
    }
    removeArr.forEach((itemToBeRemoved) => {
        arr.forEach((item) => {
            if (item === itemToBeRemoved) {
                arr.splice(arr.indexOf(item), 1);
            }
        });
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
