const userName = "Mayank";
const userAge = 10;

const userDetails = {
    name: userName,
    age: userAge,
    designation: "Manager"
}

// Object.freeze(userDetails);

userDetails.salary = 10000;

const dataArray = [10, 30, 40, 50];

// dataArray = []

// userDetails = {}
dataArray.push(2000)

console.log(dataArray);

console.log(userName);