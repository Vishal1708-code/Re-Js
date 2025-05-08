// let arr = [1, 2, 3, 4, 5];

// for  (let num of arr) {

//     console.log(num);
// }

// let camphions = "Cricket";
// for (const  camps of camphions){
//     console.log(camps);
// }
 
let players = "world cup";
for (const play of players)
{
    console.log(play);
}

//maps

const map = new Map()
map.set("name", "john")
map.set("age",30)
map.set("country","usa")
map.set("name", "john")
console.log(map);


for(const [maping,value] of map)
{
    console.log(maping, ":" + value);
}

const cricketKit={
    bat: "wooden",
    ball: "red",
    gloves: "white",
    pads: "yellow"
}
for (const [key, value] of cricketKit){
    console.log(key, ":" + value);
}//for of loop is not work with objects.