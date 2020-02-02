const stringCounter = () => {
  let myNameLength = 0;
  let myName = "a";
  const input = document.querySelector(".inputField");

  myNameLength = myName.length;

  const updateCounter = () => {
    const counter = document.querySelector(".counter");
    counter.textContent = myNameLength;
  };
  //Execute Counter Update
  return updateCounter();
};
//Execute main string counter
stringCounter();

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
  x = myName.length;
}

for (let i = 1; i <= 9; i++) {
  console.log("Hello World", i);
}
for (let i = 0; i <= 9; i++) {
  if (i % 2 !== 0) console.log(i);
}
for (let i = 9; i >= 0; i--) {
  if (i % 2 !== 0) console.log(i);
}
