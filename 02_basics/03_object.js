//singleton



//object literals

const syn1 = Symbol("key1");

const student ={
    Name : "Arjun",
    "Board" : "CBSE",
    [syn1] : "key1",//if we have created object we have to access like this.

    Class : 12,
    Roll_No : 12011717,
    School: "Macro+Vision+Academy"
};
console.log(student.Name);
console.log(student["Name"]);//this type of methods to access object is used when key is in double coated like ("name" : "arjun").
console.log(student[syn1]);

student.greeting = function(){
    console.log("Hello Sabko")
}


student.greeting2 = function(){
    console.log(`Hello yarro ${this.name}`)
}

console.log(student.greeting());
console.log(student.greeting2());

