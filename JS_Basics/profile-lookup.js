// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property"
        }
    } 
} return "No such contact"
// Only change code above this line
}

console.log(lookUpProfile("Akira", "lastName"));
console.log(lookUpProfile("Harry", "likes"));


function lookUpPro(endName, prop) {
    for (var i = 1; i < contacts.length; i++) {
        if (contacts[i].lastName === endName) {
           if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "You are looking at wrong place"
            }
        }
    } return "You are lost here"
}
 console.log(lookUpPro("Holmes", "number"));
 console.log(lookUpPro("Potter", "firstName"));
 