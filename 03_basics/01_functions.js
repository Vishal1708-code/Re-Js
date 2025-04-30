// function sayMyName(){
//     console.log("My name is John Doe");
//     console.log("Currently learning JavaScript");
//     console.log("I am 20 years old");
    
// }
// sayMyName();

// function addNumber(num1, num2){
// console.log(num1 + num2);
// }
// let result = addNumber(3,4);// 34 It will 34 because it will convert the number to string.
// console.log("Result :", result);// It it give undefined because the function does not return anything.


// function addNumber(num1, num2){
//     // let result = num1 + num2;
//     return num1 + num2;
//     }
//     let result = addNumber(3,4);
//     console.log("Result :", result);

function logInUser(userName="Arjun"){
    if(!undefined){
        console.log("Please provide a username");
        return;
    }
    return `${userName} is loogged in`;
}
console.log(logInUser(userName="Karan"));
console.log(logInUser());