var greeting = "Hello, everybody!";
var specialGuest = "Neil deGrasse Tyson"
var greetSpecialGuest = "Hello, " + specialGuest + "!";
var topic = "Let's talk about space";
var conversation = "Let's talk about " + `${topic}` + ".";

var people = ["Brendan", "Sophia", "Isabel"]
var messages = ["You look fabulous!", "My what a tuna you have!", "If only we had known you intended to come."]


function sayHelloToSofia() {
  console.log("Hello, Sofia!");
}

function sayHelloToBrendan() {
  console.log("Hello, Brendan!");
}

function sayHelloToIsabel() {
  console.log("Hello, Isabel!");
}

function sayHello(greeting, names) {
  names.forEach(function(name) {
  // console.log("Hello, " + name +"!");
  console.log(greeting + name +"!");
  });
}

var colors = ["red", "blue", "green", "yellow"]

function showColor(list) {
  list.forEach(function(color) {
    console.log(color);
  });
}



// function sayHelloMsg(greetings, names) {
//     for (var i = names.length -1; i >= 0; i--) {
//     // names.forEach(function(name) {
//    return "Hello, " + names[i] + ", " + greetings[i];
//     };
//   // }
// }

// function sayHelloMsg(greetings, names) {
//     for (var i = names.length -1; i >= 0; i--) {
//     // names.forEach(function(name) {
//     console.log("Hello, " + names[i] + ", " + greetings[i]);
//     };
//   // }
// }


// function sayHelloMsg(greetings, names) {
//   for (var i = names.length - 1; i >= 0; i--) {
//     names.forEach(function(name) {
//     console.log("Hello, " + name + ", " + greetings[i]);
//     });
//   }
// }


