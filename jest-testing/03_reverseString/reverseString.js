const reverseString = function(str) {
    let strReversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strReversed += str[i];
    }
    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
