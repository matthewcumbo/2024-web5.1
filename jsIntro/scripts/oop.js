// OOP = Object-Oriented Programming

// Objects can have a collection of variable properties
// Example: Person (firstName, lastName, age)

let person = {};
console.log(typeof(person));
console.log(person);

// Object properties are key-value-pairs
person = {
    firstName : 'Matt',
    lastName : 'Cumbo',
    age : 33
};
console.log(person);

// Accessing properties via Dot Notation
console.log(person.firstName);

// Accessing properties via Bracket Notation
console.log(person["firstName"]);