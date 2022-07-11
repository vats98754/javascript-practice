/*
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    console.log(e); // e is the object referencing the event itself; useful for getting the triggered element/target
    console.log(e.target); // e.target is the element that triggered the event
    if (e.target.style.background !== 'blue') {
        e.target.style.background = 'blue';
    } else {
        e.target.style.background = 'red';
    }
});
*/

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

// Event types aren't limited to just 'click'. There's also 'click', 'dblclick', 'keydown', 'keyup'.
// Find more events (in greater detail) here: https://www.w3schools.com/jsref/dom_obj_event.asp