// let array1 = [1, 2, 3, 4, 5];

// array1.forEach( function (val1) {
// console.log(val1);
// })
//with arrow function

// array1.forEach( (val1,index,array1) => {
//     console.log(val1, index, array1);
// })

let cricketleague = [
    {
        team1: "India",
        team2: "Pakistan",
        team3: "Bangladesh",
        team4: "Sri Lanka"
    },
    {
        team5: "Australia",
        team6: "New Zealand",
        team7: "South Africa",
        team8: "West Indies"
    },
    {
        team9: "England",
        team10: "Afghanistan",
        team11: "Ireland",
        team12: "Scotland"
    },
    {
        team13: "Nepal",
        team14: "Zimbabwe",
        team15: "UAE",
        team16: "Netherlands"
    },
    {
        team17: "West Indies",
        team18: "Bangladesh",
        team19: "Pakistan",
        team20: "Sri Lanka"
    }
];

cricketleague.forEach((teams) => {
    Object.entries(teams).forEach( (key) => {
        console.log(`Key : ${key} `);

    })
})
    

