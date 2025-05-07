const isActiveAccount = true;
const money = 10;

if(isActiveAccount && money>5){
    console.log("You can buy the product");
}
else if(isActiveAccount && !money){
    console.log("You can not buy the product");
}

//falsy values
// 0, -0, "", null, undefined, NaN, BigInt 0n.
// truthy values
//"0"=truthy, "false"=truthy, [], {}, function(){}, Symbol(), BigInt(1), Infinity.
// other than falsy values all values are truthy.

// const arr = [];

// // if(arr){
// //     console.log("Array is truthy");
// // }
// // else{
// //     console.log("Array is falsy");
// // }

// if(arr.length ===0){
//     console.log("Array is falsy");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is falsy");
// }

// //nullish coalescing operator

// let var1;
//  var1 = 1 ?? 2;
// console.log(var1); // 1
// var1 = null ?? 2;
// console.log(var1); // 2
// var1 = undefined ?? 2;
// console.log(var1); // 2
// var1 = 0 ?? 2;
// console.log(var1); // 0
// var1 = "" ?? 2;
// console.log(var1); // ""
// var1 = false ?? 2;      
// console.log(var1); // false
// var1 = NaN ?? 2;
// console.log(var1); // NaN

// // ternary operator
// let ternaryOperator = 100;

// ternaryOperator > 50 ? console.log("yes greater thsn 50") : console.log("no less than 50");

// let array = ["apple", "banana", "orange"];
// for(let i=0; i<array.length; i++){
//     let element = array[i];
//     console.log(element);
// }

for(let i=0; i<10; i++){
    if(i==5){
        break;
    }
    console.log(`printing one to nine and except 5 : ${i}`)

}

