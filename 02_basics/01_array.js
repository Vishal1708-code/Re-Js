const arr = [1, 2, 3, 4, 5];


// //array methods
// arr.push(6); // adds 6 to the end of the array
// arr.pop(); // removes the last element of the array
// arr.unshift(0); // adds 0 to the beginning of the array
// arr.shift(); // removes the first element of the array
// console.log(arr);

//join
// const newarr = arr.join();
// console.log(newarr); // 1,2,3,4,5
// console.log(arr); // [1, 2, 3, 4, 5]

//slice and splice
const newarr = arr.slice(1, 3); // returns a new array with elements from index 1 to 3 (not inclusive)
console.log(newarr);
console.log("Older array is :"+arr);
const arr2 = arr.splice(1,3); // removes elements from index 1 to 3 (not inclusive) and returns them
console.log(arr2); // [2, 3, 4]
console.log("Older array is :"+arr);