const getTheTitles = function(arr) {
    const bookTitles = [];
    for (let i = 0; i < arr.length; i++) {
        bookTitles.push(arr[i].title);
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
