//Simple Variable
let myvar = 2;
console.log(myvar);
console.log(myvar ** 2);

//Data Types and Structures
let NewVar = 1000;
console.log(typeof NewVar);
NewVar = NewVar.toString();
console.log(NewVar);
console.log(typeof NewVar);

//Object Oriented Programming
class Person {
  constructor(Name, Age) {
    this.Name = Name;
    this.Age = Age;
  }

  getName = () => {
    return this.Name;
  };
  getAge = () => {
    return this.Age;
  };
}
let PersonFirst = new Person("John", 20);
console.log(PersonFirst.getName());
console.log(PersonFirst.getAge());
