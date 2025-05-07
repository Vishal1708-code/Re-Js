//immediately invoked function expression


// unnamed iife
//pass parameter

(function chai(){ //named iife
    const cha1 = 10;
    console.log(cha1);
})();

( (name)=>{

 console.log(`My name is ${name}`);
   
})("Arjun");// iife with parameter


(() => {
    console.log("Again printing iife");
})(); // we have used double parenthesis to call the function and () to close the function.

