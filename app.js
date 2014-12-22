#!/usr/bin/env node

'use strict';


// TODO 1 : Declare and initialize a variable named me //
var me = "John";
console.log(me);


// TODO 2 : Declare but DO NOT initialize a variable named you //
var you; 
console.log(you);


// TODO 3 : Create a constant to represent your date of birth //
const dateOfBirth = "May 17, 1990";
console.log(dateOfBirth);


// TODO 4 Try try to reassign the dateOfBirth //



// TODO 5 : Create two variables assigned to primitive values and reassign the second variable to a new value //
var a = 1;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 2;
console.log("a: " + a);
console.log("b: " + b);


// TODO 6 : Create and mutate an Object //
var first = {key: "value"};
var second = first;
console.log("first: " + first.key);
console.log("second: " + second.key);
second.key = "new value";
console.log("first: " + first.key);
console.log("second: " + second.key);




// // Because the person variable has already been declared, we can simply assign it a value at any time AFTER its declaration //
// person = {
//     nameFirst: "Sam",
//     nameLast: "Jones",
//     city: "New Orleans"
// };
// console.log(person);
