var prompt = require("prompt-sync")();
var echo = prompt(`laugh , mewo, woof woof`);
console.log("echo: ", echo);

var events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler1 = () => {
  console.log("I hear a laugh!");
};
var myEventHandler2 = () => {
  console.log("bow bow!");
};
var myEventHandler3 = () => {
  console.log("meeoooooooow");
};

//Assign the event handler to an event:
eventEmitter.on("laugh", myEventHandler1);
eventEmitter.on("meow", myEventHandler2);
eventEmitter.on("woof woof", myEventHandler3);

//Fire the 'laugh' event:
eventEmitter.emit(echo);
