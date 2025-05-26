// let promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise resolved after 1 second");
//         resolve();

//     },1000)

// })
// promise1.then(function(){
//     console.log("This is the then block, executed after the promise is resolved");
// })




// //promise2 is the same as promise1, just using a different syntax
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise resolved after 1 second");
//         resolve();

//     },1000)

// }).then(function(){
//     console.log("This is the then block, executed after the promise is resolved");
// })
// // promises3
// let promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise resolved after 2 seconds");
//         resolve({username: "chai", Gmail: "chaiwala@gmail.com"});
//     },2000)

// })
// promise3.then(function(output){
//     console.log(output)
// })

// promises4
let promises4 = new Promise(function(resolve,reject){
    
     let error = false;
     if(!error){
        setTimeout(function(){
        console.log("Promise resolved after 2 seconds");
        resolve({username: "chai", Gmail: "chai@gmail.com"});
    },2000)

     }else{
        reject({Error: "Something went wrong"})
     }
})
promises4.then((user) => {
    console.log(user)
    return user.username;

}).then( (Then1) => {
    console.log(Then1);

}).catch( (error) => {
    console.log(error);

}).finally( () => {
    console.log("This is the finally block, executed after the promise is settled (resolved or rejected)");
})

//promises5 by async await

let promises5 = new Promise(function(resolve,reject){
    
     let error = false;
     if(!error){
        setTimeout(function(){
        console.log("Promise resolved after 3 seconds");
        resolve({username: "code", Gmail: "code@gmail.com"});
    },3000)

     }else{
        reject({Error: "jS went wrong"})
     }
});

async function problemresolve(){
    try{
       let response  = await promises5;
        console.log(response);
        console.log(response.username);
        

    }catch(error){
        console.log(error);
    }

};
problemresolve();


//by real world example
async function getAllUser(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
         let data = await response.json()
        console.log(data);
         


    }
    catch(error){
        console.log({"Error": "Something went wrong while fetching users"});
    }
}
getAllUser();