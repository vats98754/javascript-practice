// Functions in JS (regular functions, methods used in OOP, arrow functions and anonymous functions for quick use)
function add7(num) {
    return (num + 7);
}
console.log(add7(5));

function multiply(a, b) {
    return (a)*(b);
}
console.log(multiply(5, 3.2));

function capitalize(str) {
    capStr = str[0].toUpperCase() + str.slice(1);
    return capStr;
}
console.log(capitalize("bruh"));

function lastLetter(lastStr) {
    return lastStr[lastStr.length-1];
}
console.log(lastLetter("abcd"));

/*
Anonymous Functions:

function (para) {
    .
    .
    .
    return retVal;
}

Arrow Functions:

(para1, para2, ...) => {
    .
    .
    .
    return retVal;
}
*/