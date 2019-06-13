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
class ProjectManager extends Instructor {
  constructor(gradClassName, favInstructor) {
    super(name, age, location);
  this.gradClassName = gradClassName;
  this.favInstructor = favInstructor;
  }

  standUp() {
    console.log(`{name} announces to {channel}, @channel standy times!`);
  }
debugsCode() {
  console.log(`{name} debugs {student.name}'s code on {subject}`);
}
  //-----------------------------------------------------------------//
  const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

const isaiah = new Student({
  name: 'Isaiah',
  age: 18,
  location: 'Florida',
  previousBackground: 'High School last month',
  className: 'Web21',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});
  const kevin = new Student({
  name: "Kevin",
  age: 28,
  location: "California",
  previousBackground: "Table Games Dealer",
  className: "WEB21",
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const marguel = new ProjectManager({
  name: 'Marguel',
  age: 'Maybe 26',
  gradClassName: 'WEBPT2',
  favInstructor: 'Me?',
  location: 'California',
  specialty: 'React',
  favLanguage: 'JavaScript, Python, Elm etc.',
  catchPhrase: "Practice Flex Zombies !!!",
});

const brandon = new ProjectManager({
  name: 'Brandon',
  age: '34',
  gradClassName: 'WEB18',
  favInstructor: 'Professor Lambda',
  location: 'Maine',
  specialty: 'Redux',
  favLanguage: 'JavaScript, C++, Python.',
  catchPhrase: "You shall not pass!",
});