const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // stops the bubbling of the event
}

// capturing: your click is captured by descending down the DOM tree
// bubbling: then, bubbling is applied to the clicked element and up the DOM tree
// divs.forEach(div => div.addEventListener('click', logText)); // this results in bubbling
// divs.forEach(div => div.addEventListener('click', logText, {capture: true})); // this results in capturing

const button = document.querySelector('button');
button.addEventListener('click', logText, {once: true}); // this results in capturing and once