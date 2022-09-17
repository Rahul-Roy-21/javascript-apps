// alert("Hello world !!");

// Console API used for debugging
console.warn("Hello JS Crash-Course");
// Best doc for JS is MDN Web Docs from Mozilla

// Variables -> var, let, const (ES6)

const mathPI = 22 / 7;
let x = 30;
x = -234;
// Template strings -> Better than Concat strings
console.log(`x: ${x}, value of PI is ${mathPI}`);

// Datatypes -> Number, String, Boolean, null, undefined
const myName = "John Smilga";
console.log(typeof myName);
const age = 23;
console.log(typeof age);
const imdb = 9.3;
console.log(typeof imdb);
const isCool = false;
console.log(typeof isCool);
const root = null; // bogus return -> not an OBJECT
console.log(typeof root);
let y = undefined,
  z;
console.log(typeof y, typeof z);

// STring methods
console.log(`Length of name: ${myName.length}`);
console.log(myName.toUpperCase());

let firstName = myName.substring(0, myName.indexOf(" "));
let lastName = myName.substring(myName.indexOf(" ") + 1);

console.log(lastName.toUpperCase(), firstName);
console.log(lastName.split(""));

const items = "maths, bio, phys, chem";
console.log(items.split(", "));

// Arrays methods
const fruits = ["apple", "banana", "mango", "peach"];
fruits[1] = "melon";
fruits.pop();
// const variables can be modified, but can't be re-assigned

fruits.push("strawberry");
fruits.unshift("guava");

console.log(fruits);
console.log(`Is fruits[] an array? ${Array.isArray(fruits)}`);
console.log(fruits.indexOf("mango"));

// Object literals
const person = {
  fname: "Rahul",
  lname: "Nandy",
  age: 21,
  languages: ["C++", "Java", "Python-3"],
  isOffered: true,
};

console.log(person);

// destructuring -> es6 concept
const { fname, lname, languages } = person;
languages.forEach((codelang, index) => {
  console.log(`Language ${index + 1} = ${codelang}`);
});

// Add properties
person.email = "royrahul0921@gmail.com";
console.log(person);

// object to json stringify -> send via server
const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

// loops

// 1. for
for (let i = 0; i < languages.length; ++i) {
  console.log(i + 1);
}

// 2. while
let i = 92,
  arr = [];
while (i < 103) {
  arr.unshift(i);
  i += 3.5;
}
console.log(arr);

// 3. foreach
for (let codelang of languages) {
  arr.push(codelang);
}
console.log(arr);

// 4. map
const todos = [
  { id: 1, title: "Buy Eggs", isCompleted: true },
  { id: 3, title: "Watch Avrodh Season-2", isCompleted: false },
  { id: 4, title: "Wash Clothes", isCompleted: true },
  { id: 6, title: "Learn Node JS", isCompleted: false },
];

const todoVerdicts = todos.map((todo) => {
  return `Todo[name = ${todo.title}] is ${
    todo.isCompleted ? "Completed" : "Not Yet Done"
  }`;
});

console.log(todoVerdicts);

// 5. filter
const incomplete_work = todos
  .filter((todo) => !todo.isCompleted)
  .map((todo) => todo.title);

console.log(incomplete_work);

// switch-case
let color = "Blue";

switch (color.toLowerCase()) {
  case "red":
    console.log("Color = RED !!!");
    break;
  case "blue":
    console.log("Color = BLUE !!!");
    break;
  default:
    console.log("Color != RED/BLUE ");
}

// functions
function add(n1 = 5, n2 = 11) {
  console.log(n1 + n2);
}
add(10);

// OOPS
function Student(fname, lname, dob) {
  this.firstName = fname;
  this.lastName = lname;

  // JS Date in mm-dd-yyyy
  const [d, m, y] = dob.split("-");
  this.dob = new Date(`${m}-${d}-${y}`);
}

// Arrow functions don't work here in prototype
Student.prototype.getBirthMonth = function () {
  return this.dob.getMonth() + 1;
};
Student.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Class
class Student_Class {
  constructor(fname, lname, dob) {
    this.firstName = fname;
    this.lastName = lname;

    // JS Date in mm-dd-yyyy
    const [d, m, y] = dob.split("-");
    this.dob = new Date(`${m}-${d}-${y}`);
  }

  // Arrow functions don't work here in prototype
  getBirthMonth() {
    return this.dob.getMonth() + 1;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate Objects
const stud1 = new Student_Class("Rupesh", "Roy", "27-8-1973");
console.log(stud1);
console.log(stud1.getFullName(), stud1.getBirthMonth());
