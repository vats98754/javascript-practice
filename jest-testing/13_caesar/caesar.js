const caesar = function(str, shift) {
    let retStr = '';
    for (let i = 0; i < str.length; ++i) {
        let char = str[i];
        if (char.match("^[a-z\(\)]+$")) {
            // extra +26 added withing .fromCharCode() to make negative mod values positive
            char = String.fromCharCode((char.charCodeAt(0) - 97 + shift + 26) % 26 + 97);
        } else if (char.match("^[A-Z\(\)]+$")) {
            // extra +26 added withing .fromCharCode() to make negative mod values positive
            char = String.fromCharCode((char.charCodeAt(0) - 65 + shift + 26) % 26 + 65);
        }
        retStr += char;
    }
    return retStr;
};

// Do not edit below this line
module.exports = caesar;
