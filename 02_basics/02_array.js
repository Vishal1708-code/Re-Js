// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// console.log(arr.concat(arr2));

// const array = [1,2,3,4,5,[6,7,8,9,[10]]];
// const flatarray = array.flat(Infinity);
// console.log(flatarray);
console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));
console.log(Array.from({name:"Vishal", age: 22}));//It will convert the object to array if not able to convert gives empty array.
//we have to tell that make the array of key like that after that it will not give empty array.("imp")
 const score1 = 100;
 const score2 = 200;
    const score3 = 300;
    console.log(Array.of(score1, score2, score3));
//     ✅ Array.from()
// Purpose: Creates a new array from an array-like or iterable object.

// ✅ Array.of()
// Purpose: Creates a new array from a variable number of arguments
