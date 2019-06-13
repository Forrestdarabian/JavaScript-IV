// CODE here for your Lambda Classes

//-------------------------------------------------------------------//
class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}
//-------------------------------------------------------------------//
class Instructor extends Person {
  constructor(specialty, favLanguage, catchPhrase) {
    super(name, age, location);
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }

  demo() {
    console.log(`Today we are learning about {subject}`);
  }
grade() {
  console.log(`{student.name} recieves a perfect score on {subject}`);
}
//-------------------------------------------------------------------//
class Student extends Person {
  constructor(previousBackground, className, favSubjects) {
    super(name, age, location);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }

  listsSubjects() {
    console.log();
  }
PRAssignment() {
  console.log(`student.name has begun sprint challenge on {subject}`);
}
//-------------------------------------------------------------------//



  //-----------------------------------------------------------------//