// DOM Manipulation - Exercises
const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
div.setAttribute('style', 'border: 2px solid black;; background-color: pink;');
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
const paragraphInsideDiv = document.createElement('p');
paragraphInsideDiv.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(paragraphInsideDiv);
container.appendChild(div);