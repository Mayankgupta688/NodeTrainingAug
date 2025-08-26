class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.getAge());
    }

    getAge() {
        return this.age;
    }
}   

function EmployeeEquate(name, age) {
    
    this.name = name;
    this.age = age;

        function getAge() {
            return this.age;
        }
    
    console.log(getAge());
}

class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.salary = 50000;
    }

    getDetails() {
        return this.salary;
    }
}

let emp = new Manager("John Doe", 30);
console.log(emp.getDetails())