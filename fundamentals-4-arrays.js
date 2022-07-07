// An Array in JS is a Collection whose elements can be accessed via numerical indices.
const cars = ["Saab", "Volvo", "BMW"]; // Array initialized with 3 elements
let car = cars[0]; // Access array element by index
cars[0] = "Opel"; // Changing array element by index
document.getElementById("demo").innerHTML = cars; // Accessing and Displaying array elements on HTML

/*
The above could be initialized/declared in the following ways:

const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
*/

// An alternate form of initialization is to use the Array constructor with the 'new' keyword:
const cars2 = new Array("Saab", "Volvo", "BMW");

const person = ["John", "Doe", 46]; // Arrays don't need to be type-specific
console.log(typeof(person)); // Output: object
const person2 = {firstName:"John", lastName:"Doe", age:46}; // Objects like this use names to access their properties
console.log(person2.firstName); // Logs "John"

// Array elements themselves can also be objects or even functions
const myArray = [];
myArray[0] = Date.now;
myArray[1] = () => {
    console.log("Robbie Jefferiss");
};
console.log(cars.length); // Returns the number of elements
cars.sort(); // Sorts the array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let firstFruit = fruits[0]; // Accessing first element
let lastFruit = fruits[fruits.length - 1]; // Accessing last element

// The following are some ways to access each element in an Array:
for (let i = 0; i < fruits.length; ++i) {
    console.log(fruits[i]);
}

const nums = [1, 2, 3, 4];
let sum = 0;
nums.forEach(addNums); // Iterates over each element in the array and executes a function on it
console.log(sum); // Output: 10

function addNums(num) {
    sum += num;
}

fruits.push("Lemon"); // Adds a new element (Lemon) at the end of fruits {same as fruits[fruits.length] = "Lemon";}
fruits[6] = "Lemon"; // Creates undefined "holes" in fruits

person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length; // Will return 3
person[0]; // Will return "John"

// If you use named indexes, JavaScript will redefine the array to an object.
// After that, some array methods and properties will produce incorrect results.
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined

// Ways to check if a given object is an Array
Array.isArray(fruits); // Solution 1: Returns true
fruits instanceof Array; // Solution 2: Returns true

// The following are some array methods:
document.getElementById("demo").innerHTML = fruits.toString(); // Returns "Banana,Orange,Apple,Mango"
document.getElementById("demo").innerHTML = fruits.join(" * "); // Returns "Banana * Orange * Apple * Mango"

let fruit = fruits.pop(); // Removes and returns the last element
let length = fruits.push("Kiwi"); // Adds a new element at the end of fruits and returns the new array length

let fruit2 = fruits.shift(); // Removes and returns the first element
let length2 = fruits.unshift("Lemon"); // Adds a new element at the beginning of fruits and returns the new array length

fruits[0] = "Kiwi"; // Changing elements

fruits[fruits.length] = "Kiwi"; // The length property provides an easy way to append a new element to an array

delete fruits[0]; // Creates an underfined "hole" in the array at index 0

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myNonBinaryKids = ["Jeff", "Sarah", "John"];
const myChildren = myGirls.concat(myBoys, myNonBinaryKids); // Concatenates myGirls, myBoys, and myNonBinaryKids and returns a new array

// The splice method can be used to add and remove elements from THE SAME array as such:
fruits.splice(2, 0, "Lemon", "Kiwi");
/*
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items:
*/

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
fruits.splice(0, 1);
/*
The first parameter (0) defines the position where new elements should be added (spliced in).
The second parameter (1) defines how many elements should be removed.
The rest of the parameters are omitted. No new elements will be added.
*/

// The slice() method slices out a piece of an array into a NEW array.
const citrus = fruits.slice(1); // Slices out a part of an array starting from array element 1 ("Orange")
const pooba = fruits.slice(1,3); // Returns elements from the start argument, and up to (but not including) the end argument

// There are no built-in functions for finding the highest or lowest value in a JavaScript array.
fruits.sort(); // Sorts the array alphabetically