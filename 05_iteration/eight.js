// const  arr  = [1, 2, 3, 4, 5];

//  const total = arr.reduce(  function(accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//     // console.log(accumulator + currentValue); 
//     return accumulator + currentValue;
// }

// )
// console.log(total); // 15

// const total = arr.reduce(  (accumulator,currentValue) => {
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//     return  accumulator + currentValue;

// })
// console.log(total); 


let courses = [
  { name: "JS Basics", duration: "4 weeks", price: 4000 },
  { name: "ES6 and Beyond", duration: "5 weeks", price: 6000 },
  { name: "Async Programming", duration: "3 weeks", price: 4800 },
  { name: "JavaScript Frameworks", duration: "6 weeks", price: 7200 },
  { name: "JS Data Structures & Algorithms", duration: "4 weeks", price: 5600 },
  { name: "Advanced JS Concepts", duration: "5 weeks", price: 6400 }
];

const totalprice = courses.reduce(  (accumulator,currentValue) => 
   accumulator + currentValue.duration,0
    
     
)
 console.log(totalprice); // 15
