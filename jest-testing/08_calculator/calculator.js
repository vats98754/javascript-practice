const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
  return (a - b);
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};

const multiply = function(arr) {
  let mult = 1;
  arr.forEach((num) => {
    mult *= num;
  });
  return mult;
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(num) {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
