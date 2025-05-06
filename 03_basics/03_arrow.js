// let user = {
//     name : "karan",
//     age : 20,
//     hobbies : function(){
//         console.log(`My name is ${this.name} and ${this.age} years old`);
//         console.log(this)
//     }
// }

// user.name = "karan";
// user.age = 21;
// user.hobbies();
// console.log(this);

// let chai1 =  () => {
//     let chai1 = "chai";
//     console.log(this.chai1);//this keyword is works only in object not in function 


// }
// chai();

// const addTwo = (num1, num2) =>{
//    return num1 + num2;
    
//     }
//     console.log(addTwo(2,3)); // 5
//     // Arrow function

    const addTwo = (num1, num2) => (num1 + num2);
    console.log(addTwo(2,3)); // 5