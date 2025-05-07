const a = 10;

if(5<a){
console.log("a is greater than 5");
}
else{
console.log("a is less than 5");
}
//<, >, <=, =>, ==, ===, !=, !==;
// == checks value, === checks value and type.
// != checks value, !== checks value and type.


// for(let i=0; i<10; i++){
//     let element = i;
//     console.log(element);
// }

for(let i=1; i<=10; i++){
    console.log(i);
    for(let j=1; j<=10; j++){
        console.log(i + "*" + j  +  "=" + i*j);
    }
}