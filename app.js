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
