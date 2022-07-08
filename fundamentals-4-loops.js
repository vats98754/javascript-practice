// Loop types: for(const x of y), for(init; condt; iter), while, do{} while();
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (const item of collection) is a common and easy way to iterate through a collection.
for (const cat of cats) {
  console.log(cat);
}

const upperCats = cats.map((str) => str.toUpperCase()); // .map() to return a new array with each element returned from the passed function
console.log(upperCats); // returns ["LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION"]

// Filter function returns boolean. If true, element is included in the new array. Else, it is skipped.
function lCat(cat) {
    return cat.startsWith('L');
  }
const filtered = cats.filter(lCat);
console.log(filtered); // returns ["Leopard", "Lion"]

// The standard 'for (initializer; condition; final-expression)' loop
for (let i = 0; i < cats.length; ++i){
    if (cats[i].startsWith('C')){
        break; // This will break out of the loop when 'Caracal' is reached without logging it
    }
    if (cats[i].startsWith('L')){
        continue; // This skips 'Leopard' and 'Lion'
    }
    console.log(cats[i]);
}

// Sometimes, nested loops require labels for correct break/continue operations.
/*
outer: for (let i = 0; i < 3; i++) { // Labels work as 'labelName: control-flow-statement'
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // if an empty string or canceled, then break out of both loops

        if (!input) break outer; // if input is empty, break out of outer loop

        // do something with the given input, which is confirmed now to be non-empty...
    }
}
*/

// Standard 'while' loop
let count = 0;
while (count < cats.length){
    console.log(`Item ${count+1}: ${cats[count]}`);
    ++count;
}

// A do-while loop executes at least once, even if the condition is false.
let c = 0;
do {
    console.log(`Item ${c+1}: ${cats[c]}`);
    ++c;
} while (c < cats.length);


// Below is the MDN "Active Learning: Launch countdown" activity
/*
for (let i = 10; i >= 0; --i){
    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = `Countdown ${i}`;
    } else if (i === 0) {
        para.textContent = `Blast off!`;
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
}
*/

// Below is the MDN "Active Learning: Filling in a guest list" activity
/*
const refusedArr = people.filter((person) => !(person === "Phil" || person === "Lola"));
const admittedArr = people.filter((person) => (person === "Phil" || person === "Lola"));

for (let j = 0; j < admittedArr.length; ++j) {
    if (j == admittedArr.length-1){
        admitted.textContent += ` and ${admittedArr[j]}.`;
    } else {
        admitted.textContent += ` ${admittedArr[j]}, `;
    }
}

for (let i = 0; i < refusedArr.length; ++i) {
    if (i == refusedArr.length-1){
        refused.textContent += ` and ${refusedArr[i]}.`;
    } else {
        refused.textContent += ` ${refusedArr[i]}, `;
    }
}
*/