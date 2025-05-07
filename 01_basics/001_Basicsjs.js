// let cars = [1,2,3,];

// let  carsIds , restCars;


// console.log(restCars)

// let cars = { carName : 'HondaCity' , carPrice : 1500000 }

// let carName , carPrice;

// ( { carName , carPrice } = cars);


// console.log(carName,carPrice);

// Step 1: Guest list
// const people = ['Alice', 'Bob', 'Charlie', 'David'];

// // Step 2: Destructure to get host and rest of guests
// const [host, ...guests] = people; // Destructuring the array by using spread operator

// console.log("Host:", host);       // Alice
// console.log("Guests:", guests);   // ['Bob', 'Charlie', 'David']

// // Step 3: Function to invite people
// function sendInvites(...names) { //   // Using rest operator to gather all names into an array
//   names.forEach(name => {
//     console.log(`📨 Invitation sent to ${name}`);
//   });
// }

// // Step 4: Use spread to send all guests
// sendInvites(...guests); // Spread guests array into individual names

  
// const Success = ['All are successfull', 'Vishal', 'Abhijeet', 'Jairaj', 'Tabish', 'Kalash', 'Kabeer'];
// const [Aim, ...Gentlemen] = Success;

// console.log("Aim is :", Aim);
// console.log("Successfull Gentlemen are :",...Gentlemen);

// function allAreSucessfull(...names){
//   names.forEach(name=> {
//     console.log("Successfull Gentlemen name are :",name);
    
//   });
// }
// allAreSucessfull(...Gentlemen);

// function starCars(cars1, cars2, car3,...rest)
// {
//   console.log(rest);
// }

// let cards = [1,2,3,4,5,6];
// starCars(...cards)
// console.log(...cards);

//use of closure and iife

// let app = (function(){
//   let carsIds = 123;
//   let getIds = function(){
//     return carsIds;

//   }
//   return {
//     getIds : getIds
//   }

// }

// )();
// console.log(app.getIds());

// //example of closure 
// function makeCounter() {
//   let count = 0;

//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter = makeCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

//call and apply is used to modify the this keyword in js.
//bind genrally makes the copy of the existing function and use this keyword

//arrow function
// function add(a, b) {
//   return a + b;
// }

// console.log(add(3, 4)); // Output: 7

// const add = (a, b) => a + b;

// console.log(add(3, 4)); // Output: 7

// const Car =(a,b) => a+b;
// {
// console.log()

// }
//constructor
// ✅ Constructor Function: Car
// function Car(brand, model, year) {
//   // 'this' refers to the new object being created
//   this.brand = brand;
//   this.model = model;
//   this.year = year;

//   this.startEngine = function () {
//     console.log(`${this.brand} ${this.model}'s engine started!`);
//   };
// }

// // ✅ Using the Constructor
// let car1 = new Car("Toyota", "Corolla", 2020);
// let car2 = new Car("Honda", "Civic", 2022);

// // ✅ Testing the result
// console.log(car1); // { brand: 'Toyota', model: 'Corolla', year: 2020, startEngine: [Function] }
// car1.startEngine(); // Toyota Corolla's engine started!

// console.log(car2); // { brand: 'Honda', model: 'Civic', year: 2022, startEngine: [Function] }
// car2.startEngine(); // Honda Civic's engine started!

// ✅ How to Recognize a Constructor Function
// 1. Capitalized name (Car)
// 2. Used with `new` keyword
// 3. Uses `this` inside
// 4. Designed to make multiple similar objects



// try catch block
// try {
//   let  car = newCar;
// }

//   catch(error)
//   {
//    console.log('error',error)
//   }

// console.log('continuing');

//promises


// promises and creating promises
// let promise = new Promise(
//   function(resolve, reject) {
//     setTimeout(resolve, 100, 'Somevalue');
//   }
// );
// promise.then(
//   value => console.log('fullfill : ' +value),
//   error => console.log('rejected : '  +error)
 
// );

//how to convert string to json file
// we have to use "JSON.stringify"
//convert back to object we will use "JSON.parse"


// Execeution Context
// Thread of Code
// Hoisting

// Exceution Context:The execution context is the environment in which javascript code is executed.
//there are two types of execution context:
// 1.global execution context:It is the default execution context,It handles the global scope code like function and variables which are decleared globaly.
// 2.Function exceution context:It is created when a function is called,It handles the code inside the function.

// Thread of Code:It is the sequence of code that is executed by the javascript engine.
// Javascript is a single threaded language, and non-blocking model for execution.It means it can only execute one code at a time.
//non-blocking model means it can execute the code without blocking the main thread.
// Hoisting:It is the process of moving the variable and function declarations to the top of the code before execution. 
// Hoisting is done by the javascript engine.
// Hoisting is done for variables and functions only, not for the values.

//In let and const hoisting is done but not initialized.
//In var hoisting is done and initialized with undefined.

//rest operator: it is used to collect all the arguments passed to a function into an array.
//spread operator: it is used to spread the elements of an array or object into another array or object.
//destructuring: it is used to extract the values from an array or object and assign them to variables.
//destructuring is done using the {} and [] brackets.
//destructuring is done for arrays : [a,b] = arr;
//destructuring is done for objects : ({a,b} = obj);


//Interview Questions

// Javascript Execution Context

//Execution phase
//"Memory creation phase-" : Only Memory is created for the variables and functions No calulations take place.
//"Creation phase"- : 
//"Phase 1 :-"Global Execution Context : we will allocate in  'this' key word 
//"Memory creation phase :-" collect all the variable and put it  with us, and we will take all variable an put equal to undefined.
//we will understand by example:-
let num1 = 10;
let num2 = 20;
function addTwo(num1, num2){
    let totol =  num1 + num2;
    return totol;
}
let result = addTwo(num1, num2);
let result1 = addTwo(10, 20);

/* Execution Context: The environment in which code is evaluated

Memory Phase (Hoisting): JS sets up memory and stores variables/functions

Execution Phase: Code runs line-by-line

Call Stack: Tracks active execution contexts*/

// Now we will see how the program runs in JavaScript.
// First, a Global Execution Context is created.

// In that, the this keyword is also allocated.
// In the browser, this refers to the window object.

// Then, a global object is created, and all variables and function declarations are stored in it.
// At this point, memory is allocated like this (in the memory phase):

// js
// Copy code
// num1 = undefined;
// num2 = undefined;
// addTwo = function definition;
// result = undefined;
// result1 = undefined;
// Now the code starts executing (execution phase).
// Line by line:

// num1 = 10

// num2 = 20

// Then addTwo(num1, num2) is called

// When a function is called, a new function execution context is created.

// In that context, a new variable environment is created, and a new execution thread starts running for that function.

// In the memory creation phase of the function:

// js
// Copy code
// a = undefined;
// b = undefined;
// total = undefined;
// In the execution phase of the function:

// a = 10, b = 20

// total = a + b → total = 30

// return total → returns 30 to the global context

// After returning the value, the function execution context is destroyed (removed from the stack).

// Back in the global context:
// result = 30 is stored.

// If you call the function again, the same process repeats:

// New function context

// Memory phase

// Execution phase

// Return value

// Context destroyed
