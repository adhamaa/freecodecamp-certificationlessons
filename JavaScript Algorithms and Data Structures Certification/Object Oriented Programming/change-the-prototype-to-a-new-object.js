function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  eat: function() {
    console.log("yum, yum, yummy");
  },

  describe: function() {
    console.log("My name is " + this.name)
  }
};
