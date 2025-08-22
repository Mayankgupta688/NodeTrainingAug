// JavaScript is Functional / Object Oriented

class Employee {
    constructor() {
        // Current Context
        this.userName = "Mayank";
        this.userAge = 10;
        this.userDesignation = "Manager";
    }

    getDetails() {
        return `Name: ${this.userName}, Age: ${this.userAge}, Designation: ${this.userDesignation}`;
    }
}

var employeeOne = new Employee();
employeeOne.getDetails();

function Employee() {
    this.username = "Mayank"
    this.userAge = 10;
    this.designation = "sjakdhkj"
}

Employee.prototype.getDetails = function() {
    console.log(this.name)
}

var employeeOne = new Employee();
var employeeTwo = new Employee();

employeeOne.getDetails();