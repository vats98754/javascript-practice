const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 50 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
];
console.table(items);

// .filter() returns an array containing each item that returns true from inner func
const filteredItems = items.filter(item => item.price <= 100);
console.table(filteredItems);

// .map() returns an array containing each item that returns true from inner func
const itemPrices = items.map(item => item.price);
console.table(itemPrices);

// .find() returns a reference to the first item that returns true from inner func; if not found, return undefined
const foundItem = items.find(item => item.name === 'Album');
console.table(foundItem);

// .findIndex() returns the index of the first instance of input, otherwise returns -1 if not found
const foundIndex = items.findIndex(item => item.name === 'Album');
console.log(items[foundIndex] + ' is at index ' + foundIndex);

// .forEach() doesn't return anything, just performs a void function on each item in array
items.forEach(item => console.log(item.price));

// .some() returns true only if even a single array element makes the inner func return true
const hasInexpensiveItems = items.some(item => item.price <= 100);
console.log(hasInexpensiveItems);

// .every() returns true only if every single array element makes the inner func return true
const hasAllItemsUnder1000 = items.every(item => item.price <= 1000);
console.log(hasAllItemsUnder1000);

// .reduce() has paras (the previous value returned by inner function, current arr item), returning final thing
// at the end of all the iterations
const reducedArr = items.reduce((obj, item) => {
    obj[item.name] = item.price;
    return obj;
}, {});
console.log(reducedArr);

// .includes() simply returns 'true' if the array has a strict equality (===), else it returns false
const includesJoe = items.includes({name: 'Joe', price: 5});