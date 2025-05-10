let arry1 = [1,2,3,4,5];

const value = arry1.forEach((element) => {

    console.log(element);
    return element;// this return value is undefined because forEach method does not return anything.
})
console.log(value);

// we will use filter method to return the value

const value2 = arry1.filter( (element) => element > 2);
console.log(value2); // [3,4,5]

const students = [
    ["Alice", "10A", "Math", 101],
    ["Bob", "10B", "Science", 102],
    ["Charlie", "10C", "English", 103],
    ["David", "11A", "Math", 104],
    ["Emma", "11B", "History", 105],
    ["Fiona", "12A", "Physics", 106],
    ["George", "12B", "Chemistry", 107],
    ["Hannah", "9A", "Geography", 108],
    ["Ian", "9B", "Biology", 109],
    ["Jack", "8A", "Math", 110],
    ["Kara", "8B", "Science", 111],
    ["Liam", "7A", "English", 112],
    ["Mia", "7B", "History", 113],
    ["Noah", "6A", "Physics", 114],
    ["Olivia", "6B", "Chemistry", 115],
    ["Paul", "5A", "Geography", 116],
    ["Quinn", "5B", "Biology", 117],
    ["Ryan", "4A", "Math", 118],
    ["Sophia", "4B", "Science", 119],
    ["Tom", "3A", "English", 120]
];

const value3 = students.filter((student) => student[0] === "Tom");
console.log(value3);
