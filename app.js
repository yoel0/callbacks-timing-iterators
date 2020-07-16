function greeting(name, callBack) {
  let sentence = " Hello, my name is " + name;

  let otherSentence = callBack();

  return sentence + otherSentence;
}

function anotherGreeting() {
  let sentence = " I forgot my last name ";

  return sentence;
}

let myName = "Yoel";
console.log(greeting(myName, anotherGreeting));

// Excercise

function printArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    console.log(number);
  }

  callback(array);
}

function printArrayAgain(array) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    console.log(number);
  }
}

const numbersArray = [1, 2, 3, 4, 5, 9, 8, 7, 6];

printArray(numbersArray, printArrayAgain);

// Excercise
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
