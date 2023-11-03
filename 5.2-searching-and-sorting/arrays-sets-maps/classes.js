function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

const person = new Person('John', 'Doe');
console.log(person.getFullName()); // John Doe


class Person {
    // properties
    
    count = 0
    constructor(firstNameInput, lastNameInput) {
        this.firstName = firstNameInput;
        this.lastName = lastNameInput;
        this.count++
    }

    getFullName() {
        // console.log(`${this.firstName} ${this.lastName}`);
        return this;
    }
}

const travis = new Person('Travis', 'Hammond');
// console.log(travis);
outcome = travis.getFullName();



