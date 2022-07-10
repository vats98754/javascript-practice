const fibonacci = function(index) {
    // If given index is negative, return "OOPS"
    if (index < 0) {
        return "OOPS";
    }
    const arrFib = [0, 1];
    for (let i = 2; i <= index; i++) {
        arrFib.push(arrFib[i - 2] + arrFib[i - 1]);
    }
    return arrFib[index];
};

// Do not edit below this line
module.exports = fibonacci;
