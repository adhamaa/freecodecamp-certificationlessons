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

const myFunction = () => {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
  x = myName.length;
};

var input = document.getElementById("myText");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    document.getElementById("myBtn").click();
  }
});

for (let i = 1; i <= 9; i++) {
  console.log("Hello World", i);
}
for (let i = 0; i <= 9; i++) {
  if (i % 2 !== 0) console.log(i);
}
for (let i = 9; i >= 0; i--) {
  if (i % 2 !== 0) console.log(i);
}

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  let maxLength = arr.length;
  for (let i = 0; i < maxLength; i += 2) {
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
