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
// const [host, ...guests] = people;

// console.log("Host:", host);       // Alice
// console.log("Guests:", guests);   // ['Bob', 'Charlie', 'David']

// // Step 3: Function to invite people
// function sendInvites(...names) {
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