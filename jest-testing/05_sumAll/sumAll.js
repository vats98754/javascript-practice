const sumAll = function(start, end) {
    // Fixing if end is less than start by reassigning start to min(start,end) and end to max(start,end)
    const first = Math.min(start, end);
    const last = Math.max(start, end);
    // Fixing if either number is negative; fixing if either parameter is not a number
    if (first < 0 || typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }
    return (first + last) * (last - first + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
