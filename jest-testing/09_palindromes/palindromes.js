const palindromes = function (str) {
    let flag = true;
    // Using regex to remove punctuation and all whitespace; Converts all characters to lowercase
    const strCopy = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(/\s/g,'').toLowerCase();
    const len = strCopy.length;
    for (let i = 0; i < len; i++) {
        if (strCopy[i] !== strCopy[len - 1 - i]) {
            flag = false;
        }
    }
    return flag;
};

// Do not edit below this line
module.exports = palindromes;
