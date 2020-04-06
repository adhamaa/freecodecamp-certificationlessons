var Person = function(firstAndLast) {
  let fullName;
  
  this.setFullName = full => fullName = full.split(' ');
  this.setFirstName = first => fullName[0] = first;
  this.setLastName = last => fullName[1] = last;
  
  this.setFullName(firstAndLast);
  
  this.getFullName = () => fullName.join(' ');
  this.getFirstName = () => fullName[0];
  this.getLastName = () => fullName[1];
};

var bob = new Person('Bob Ross');
bob.getFullName();
