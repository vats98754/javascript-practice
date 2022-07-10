const findTheOldest = function(people) {
    let oldest = people[0];
    if (!oldest.hasOwnProperty('yearOfDeath')) {
        let currentTime = new Date();
        oldest['yearOfDeath'] = currentTime.getFullYear();
    }
    for (let i = 1; i < people.length; ++i) {
        let copy = people[i];
        if (!copy.hasOwnProperty('yearOfDeath')) {
            let currentTime = new Date();
            copy['yearOfDeath'] = currentTime.getFullYear();
        }
        if (copy.yearOfDeath-copy.yearOfBirth > oldest.yearOfDeath-oldest.yearOfBirth) {
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
