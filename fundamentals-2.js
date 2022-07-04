// Strings and String methods until line 45
let str = "This is a test... maybe... joe.";
console.log("The original text is: " + str);

// str.length; gives str's length/its num of chars {returns number}
let strLength = str.length;
console.log(strLength);

// str.replace('thing to be replaced', 'thing to replace it'); {returns string}
let joeReplaceTest = str.replace("test", "joe");
console.log(joeReplaceTest);

// str.slice(startIndexIncluded, finalIndexExcluded); {returns string}
let strSliced = str.slice(0, 3);
console.log(strSliced);

/* str.split('expression to split at', i where at most the first i expressions after split returned); 
 {returns string[] or string Array/Collection}
*/
let arrSplit = str.split("... ", 2);
console.log(arrSplit);

// str.concat(str1 to merge after str, str2 to merge after str1, ...); {returns string}
let strConcat = str.concat(joeReplaceTest, strSliced);
console.log(strConcat);

// str.charAt(index of char that is to be returned); {returns char/string}
let strCharAt = str.charAt(1);
console.log(strCharAt);

// str.startsWith("string to check str begins with", index to begin at - 0 by default); {returns boolean}
let strStartsWith = str.startsWith("s is", 2);
console.log(strStartsWith);

// str.startsWith("string to check str includes", index to begin searching from - 0 by default); {returns boolean}
let strIncludes = str.includes("This", 1);
console.log(strIncludes);

// str.toLowerCase(); makes all str's alphabets lowercase; {returns string}
let strToLowerCase = str.toLowerCase();
console.log(strToLowerCase);

// str.toUpperCase(); makes all str's alphabets uppercase; {returns string}
let strToUpperCase = str.toUpperCase();
console.log(strToUpperCase);


/* The rest is about Conditionals (if... else if... else OR switch... case... default)
switch (key) {
    case value:
        
        break;

    default:
        break;
}

if (condition) {
    
} else if (condition2) {
    
} else {

}
*/

// Describes numbers from 0 to 3, depending on the random result 'rand' below...
let rand = Math.floor(4 * Math.random());
console.log(rand);

// Using switch statement
switch (rand) {
    case (3):
        console.log("This is the first odd prime number.");
        break;
    case (2):
        console.log("This is the first prime number.");
        break;
    case (1):
        console.log("This is the first positive integer.");
        break;
    default:
        console.log("This is not 1, 2, or 3.");
        break;
}

// Using if statement
if (rand == 1) {
    console.log("This is the first positive integer.");
} else if (rand == 2) {
    console.log("This is the first prime number.");
} else if (rand == 3) {
    console.log("This is the first odd prime number.");
} else {
    console.log("This is not 1, 2, or 3.");
}