// Spread
// Rest
// Destructuring

var dataArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

var [a, b, c, ...d] = dataArray.reverse();

// Array Destructuring
var [x ,y, z] = dataArray;

var userArray = [...dataArray];

userArray[0] = 1000;

console.log(dataArray[0])

var userDetails = {
    name: "Mayank",
    age: 10,    
    designation: "Manager",
    address: "100, ABC Street, XYZ City",
    hobbies: ["Reading", "Writing", "Coding"],
}

var cloneAddress = {
    ...userDetails
}

var name = userDetails.name;
var age = userDetails.age;
var designation = userDetails.designation;
var address = userDetails.address;
// Object Destructuring
var {designation, address, useName = name} = userDetails;
var {userDesignation = designation, userAddress = address} = userDetails;


console.log(cloneAddress == userDetails)
