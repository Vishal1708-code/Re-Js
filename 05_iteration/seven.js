// const arr = [1, 2, 3, 4, 5];

// arr.forEach( (element) => {
//     console.log(element+10);

// })

//chaining

const arr = [1, 2, 3, 4, 5];

let answer = arr.map( (num) => num * 2 )
             .map( (num) => num+1 )

console.log(answer); 


