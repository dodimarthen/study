//Simple Variable
let myvar = 2;
// console.log(myvar);
// console.log(myvar ** 2);

//Data Types and Structures
let NewVar = 1000;
// console.log(typeof NewVar);
NewVar = NewVar.toString();
// console.log(NewVar);
// console.log(typeof NewVar);

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

class Home {
  constructor(address, postalcode, residents) {
    this.address = address;
    this.postalcode = postalcode;
    this.residents = residents;
  }
  getAddress = () => {
    return this.address;
  };

  getPostalCode = () => {
    return this.postalcode;
  };

  getResidents = () => {
    return this.residents;
  };

  addResident = (resident) => {
    this.residents.push(resident);
  };
}

let John = new Person("John", 25);
let Doe = new Person("Doe", 19);

let myhome = new Home("chicago street", 21312, [John, Doe]);
console.log(myhome.getResidents());

let Janny = new Person("Janny", 28);
myhome.addResident(Janny);
console.log(myhome.getResidents());
