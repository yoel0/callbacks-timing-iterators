function greeting(name, callback) {
  let sentence = "Hello, my name is " + name + " ";

  let otherSentence = callback();

  return sentence + otherSentence;
}

function anotherGreeting() {
  let sentence = "I forgot my last name";

  return sentence;
}

let myName = "Yoel";
console.log(greeting(myName, anotherGreeting));

// Exercise
function printArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i]; // 1, 2, ....

    console.log(number); // 1
  }

  callback(array);
}

function printArrayAgain(array) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i]; // 1, 2 ...

    console.log(number); // 1, 2
  }
}

const numbersArray = [1, 2, 3, 4, 5, 9, 8, 7, 6];

printArray(numbersArray, printArrayAgain);

// Exercise
function calculator(num1, num2, callbackOne, callbackTwo) {
  let result = callbackOne(num1, num2) + callbackTwo(num1, num2);
  // 82 + -72 = 10

  return result;
}

function addNumbers(num1, num2) {
  let result = num1 + num2;

  return result;
}

function subtractNumbers(num1, num2) {
  let result = num1 - num2;

  return result;
}

console.log(calculator(5, 77, addNumbers, subtractNumbers));

// make a superHero function
// take in two callbacks
// return a string in each callback describing the superpower

function sonic(superPowerOne, superPowerTwo) {
  let allSuperPowers = superPowerOne() + " and " + superPowerTwo();

  return allSuperPowers;
}

function superSpeed() {
  let power = "I can run 1000 mph";

  return power;
}

function superSpin() {
  let spin = "I can spin 1000 mph";

  return spin;
}

console.log(sonic(superSpeed, superSpin));
