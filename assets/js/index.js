"use strict";

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, yearOfAdmission) {
    super(name, surname);
    this.yearOfAdmission = yearOfAdmission;
  }
  get Course() {
    let date = new Date();
    return date.getFullYear() - this.yearOfAdmission + 1;
  }
}

let student1 = new Student("Vasya", "Petrov", 2020);

console.log(student1);
console.log(student1.fullName);
console.log(student1.Course);
