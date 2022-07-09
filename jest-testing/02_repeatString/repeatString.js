const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let retString = "";
    for (let i = 0; i < num; i++) {
        retString += string;
    }
    return retString;
};

// Do not edit below this line
module.exports = repeatString;
