let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

// Object declaration through literals
let user3 = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

// get property values of the object:
console.log( user3.name ); // John
console.log( user3.age ); // 30

user3.isAdmin = true; // to quickly add a key:value pair
delete user3.age; // to quickly remove a property

let user = {
    name: "John",
    age: 30,
    "likes birds": true, // multiword property name must be quoted
};

user["likes birds"] = true; // set
console.log(user["likes birds"]); // gets "true"
delete user["likes birds"]; // delete property

let key = prompt("What do you want to know about the user?", "name");
console.log(user[key]); // John (if enter "name")
console.log(user.key) // undefined

let fruit = prompt("Which fruit to buy?", "apple");

// Computer Properties
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log(bag.apple); // 5 if fruit="apple"

// The above is the same as doing the below, except the above is more concise
let fruit2 = prompt("Which fruit to buy?", "apple");
let bag2 = {};
// take property name from the fruit variable
bag[fruit2] = 5;

// More complicated expressions can be used for computed properties
let fruit3 = 'apple';
let bag3 = {
  [fruit3 + 'Computers']: 5 // bag.appleComputers = 5
};

function makeUser(name, age) {
    return {
        name, // same as name: name
        age,  // same as age: age
        // ...
    };
    // // Long way to do the above
    // return {
    //   name: name,
    //   age: age,
    //   // ...other properties
    // };
  }

let user4 = makeUser("John", 30);
console.log(user4.name); // John

let obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
// This means that the __proto__ property cannot be assigned to a primitive type like number, but only object

let user5 = {};
console.log( user5.noSuchProperty === undefined ); // true means "no such property"
// however, if there is a property that is set as undefined, the above method returns true even if it exists
let obj1 = {test: undefined};
console.log( obj1.test === undefined ); // returns true, even though we expect false
console.log( "test" in obj1 ); // true, the property does exist!
// We mostly use null for “unknown” or “empty” values, so the above situation of using 'in' operator is rare

// To traverse an object, we can use the for..in loop
for (key in user5) {
    console.log(key + ": " + user5[key]);
}

// Objects are ordered: if int property, ordered ascendingly, if string property, ordered in creation order

// Example of number/string number keys being logged in ascending order
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
  
for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

//Javascript.info exercises
user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
// Test for function isEmpty()
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
// Write the code to sum all salaries and store in the v
for (salary in salaries) {
    sum += salary;
}
console.log(sum);

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};    

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
}
console.log(multiplyNumeric(menu));
// // after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name[0]}.`); // 'this' refers to the immediate parent object
        // 'this' is very commonly used in constructors to allow customization in creating many different objects
    }
};
person.bio() // 'person' acts as a namespace here

// Function below creates an object called person, which is more long-winded than using a constructor
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
    return obj;
}

// Below is an example of a constructor
function Person(name) { // By convention, constructors are named after the object they create (Capitalized)
    this.name = name;
    this.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
}

// To call Person() as a constructor, we use the 'new' keyword:
const salva = new Person('Salva');
console.log(salva.name);
salva.introduceSelf();

const frankie = new Person('Frankie');
console.log(frankie.name);
frankie.introduceSelf();

// When accessing the DOM, as in 'document.querySelector('div)', a Document object gets created once webpage loads
// Built-in objects and APIs don't always create object instances automatically
const myNotification = new Notification('Hello!');