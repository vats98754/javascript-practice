// Understanding JS Errors
const a = "Hello"
const b = "World"
console.log(c) // This throws a ReferenceError as c is not defined.

// Below is a SyntaxError due to missing parentheses on console.log()
function helloWorld() {
    // console.log "Hello World!"
}

/*
Per MDN, a TypeError may be thrown when:

an operand or argument passed to a function is incompatible with the type expected by that operator or function;
or when attempting to modify a value that cannot be changed;
or when attempting to use a value in an inappropriate way.
*/
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2); // TypeError thrown as push is not a string method, it is an Array method.

//Below are some useful methods to trace errors and fix them
console.table();
console.trace();

/*
At this point, you might be wondering how we can resolve these errors.

1. Read the error carefully and try to understand it on your own.
2. Next, Google the error! Chances are, you can find a fix or explanation on StackOverflow or in the documentation.
    If nothing else, you will receive more clarity as to why you are receiving this error.
3. Use the debugger! As previously mentioned, the debugger is great for more involved troubleshooting, and is a critical 
    tool for a developer. You can set breakpoints, view the value of any given variable at any point in your application’s 
    execution, step through code line by line, and more! It is an extremely valuable tool and every programmer should know 
    how to use it. This tutorial dives into the Chrome Debugger.
4. Make use of the console! console.log() is a popular choice for quick debugging. For more involved troubleshooting, 
    using the debugger might be more appropriate, but using console.log() is great for getting immediate feedback without 
    needing to step through your functions. There are also other useful methods such as console.table(), console.trace(), 
    and more! You can find additional methods here.

P.S. Warnings can be ignored but it is best to address them for the long run. Errors, however, must be addressed for 
    functional code.
*/