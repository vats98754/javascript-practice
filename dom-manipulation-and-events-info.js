const container = document.querySelector('#container'); // selects the #container div
console.dir(container.firstElementChild); // selects the first child of #container => .display
const controls = document.querySelector('.controls'); // selects the .controls div
console.dir(controls.previousElementSibling); // selects the prior sibling => .display

/* Query Selectors
They help target single or multiple nodes based on their class, id, or tag name.

element.querySelector(selector) returns a reference to the first match of selector.
.querySelector() is commonly used with id selectors, which correspond to a single/'first match' element.

element.querySelectorAll(selectors) returns a “NodeList” containing references to all matches of the selectors.
.querySelectorAll() is commonly used with class selectors, which correspond to at least one element.
*/

const divs = document.querySelectorAll('div'); // creates a `NodeList` object
const divsArr = Array.from(divs); // converts `NodeList` to an array

const div = document.createElement('div'); // creates a new `div` element in memory, but NOT into the DOM
document.appendChild(div); // appends the existing `div` element to the DOM as the last node

/* Append Elements
parentNode.appendChild(childNode) — appends childNode as the last child of parentNode
parentNode.insertBefore(newNode, referenceNode) — inserts newNode into parentNode before referenceNode

Remove Elements
parentNode.removeChild(child) — removes child from parentNode on the DOM and returns a reference to child
*/

// Adding inline styles to an element
div.style.color = 'blue'; // adds the indicated style rule
div.style.cssText = 'color: blue; background: white;'; // adds several style rules
div.setAttribute('style', 'color: blue; background: white;'); // adds several style rules; generally useful syntax

/* For kebab-case properties, use camelCase
div.style.background-color; doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor; accesses the div's background-color style
div.style['background-color']; also works
div.style.cssText = "background-color: white;"; ok in a string
*/

div.setAttribute('id', 'theDiv'); // if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.getAttribute('id'); // returns value of specified attribute, in this case "theDiv"
div.removeAttribute('id'); // removes specified attribute

div.classList.add('new'); // adds class "new" to your new div
div.classList.remove('new'); // removes "new" class from div
div.classList.toggle('active'); // if div doesn't have class "active" then add it, or if it does, then remove it

div.textContent = 'Hello World!'; // creates a text node containing "Hello World!" and inserts it in div
div.innerHTML = '<span>Hello World!</span>'; // renders the HTML inside div
// innerHTML should be used sparingly as it can create security risks if misused.
// It is generally better to use innerHTML for dynamic content, and textContent for static content.