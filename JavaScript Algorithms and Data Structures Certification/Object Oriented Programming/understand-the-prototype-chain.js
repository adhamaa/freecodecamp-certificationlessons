function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
<<<<<<< HEAD
console.log(Object.prototype.isPrototypeOf(Dog.prototype));
=======
// ???.isPrototypeOf(Dog.prototype);

console.log(Object.prototype.isPrototypeOf(beagle));
>>>>>>> 5e0ab939065c7c2f931c5d8fe80d93aa5d76b9d6
