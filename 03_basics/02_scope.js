//global scope value are accessible everywhere inside the function and in the block blocks.
//block scope value are accessible only inside the block
//function scope value are accessible only inside the function
//let and const are block scope
//var is function scope





// if(a>5){
//     const a= 10;
// let b = 2;
// var c = 3; 

// }
// console.log(a); // 10
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 3

// function test(){
//     let pass = 10;
//     function test2(){
//         let pass2 = 20;
//          //
//          console.log(pass);
//     }
//     test2();
    
// }   
// test(); // 10

// function method1(){
//     let approach = "good";
//     console.log(approach);

// }
// method1(); // good

let var1 = function method1(){
    let approach = "good";
    console.log(approach);

}
var1(); 
