class Person {
  name = "";
  age = 0;
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    
    introduce() {
      console.log(`My name is ${this.name}, and i am ${this.age} `)
    }
    
    greet() {
      console.log(`Hi, How do you do!`)
    }
  }
  
  const person1 = new Person(`KHoji`, 21);
  const person2 = new Person(`Mike`, 22);
  const person3 = new Person(`Ali`, 23);
  
  person1.greet();
  person1.introduce();