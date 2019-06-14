// CODE here for your Lambda Classes

//-------------------------------------------------------------------//
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}
//-------------------------------------------------------------------//
class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
grade(student, subject) {
  console.log(`${student.name} recieves a perfect score on ${subject}`);
}
}
//-------------------------------------------------------------------//
class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }

  listsSubjects() {
    console.log(`my name is ${this.name} and my favorite subjects are ${this.favSubjects}`);
  }
PRAssignment(subject) {
  console.log(`${this.name} has begun sprint challenge on ${subject}`);
}
}
//-------------------------------------------------------------------//
class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
  this.gradClassName = props.gradClassName;
  this.favInstructor = props.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
debugsCode(student, subject) {
  console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
}
}
  //------------------------------------------------------------//
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

console.log(isaiah.listsSubjects())

console.log(brandon.standUp("web21"))

console.log(dan.speak())

console.log(dan.demo("Javascript"))

console.log(isaiah.PRAssignment("HTML"))

console.log(marguel.debugsCode(kevin, "CSS"))

console.log(brandon.grade(isaiah, "HTML"))
