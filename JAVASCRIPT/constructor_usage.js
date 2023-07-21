
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Breed: ${this.breed}`);
  }
}

const myDog = new Dog("Buddy", "Labrador Retriever");
myDog.displayInfo();
myDog.makeSound();
