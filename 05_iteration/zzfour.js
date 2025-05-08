// for object we will use for in loop

const cricketKit={
    bat: "wooden",
    ball: "red",
    gloves: "white",
    pads: "yellow"
}
for (const key in cricketKit){
    console.log(key, ":" + cricketKit[key]);
}