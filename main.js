'use strict';

function getAge(dateOfBirth) {
    const barthday = new Date(dateOfBirth);
    const now = new Date();
    const age = now.getFullYear() - barthday.getFullYear()
    const checkday = now.getMonth() - barthday.getMonth() >= 0 && now.getDate() - barthday.getDate() >= 0;
    console.log(now.getDate())
    console.log(barthday.getDate())
    if (checkday) {
        return age
    } else {
        return age - 1
    }
}

console.log(getAge('1990-01-01 16:27:00'));
// Print: 32

function getChildren(persons) {
    return persons.filter((person)=>person.age<20)
}

const allPersons = [
    { name: "John Kim", age: 10 },
    { name: "Jane Doe", age: 20 },
    { name: "Fred Kang", age: 13 },
    { name: "Chris Doe", age: 39 },
    { name: "Layla Park", age: 19 },
];

console.log(getChildren(allPersons));
  // Print: [
  // 	{"name": "John Kim", "age": 10},
  // 	{"name": "Fred Kang", "age": 13},
  //  {"name": "Layla Park", "age": 19},
  // ]