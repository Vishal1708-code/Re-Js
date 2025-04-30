// // const tinder = new Object() "Singleton object"

// // no singleton object //
// // const tinder ={};
// // tinder.name = "Arjun";
// // tinder.age = 20;
// // tinder.isloggedIn = false;
// // console.log(tinder);

// const regularUser = {
//     name :karan,
//     Userfullname :{
//         Karan : Joshi,
//         style :{
//             Current: NO
//         }

//     }
// }
// console.log(regularUser.Userfullname);

// Singleton object example (not required here)
const tinder = new Object(); // Optional singleton
tinder.name = "Arjun";
tinder.age = 20;
tinder.isloggedIn = false;
console.log(tinder);

const regularUser = {
    name: "karan",
    Userfullname: {
        firstName: "Karan",
        lastName: "Joshi",
        style: {
            current: "NO"
        }
    }
};

console.log(regularUser.Userfullname);
