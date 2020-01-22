const stringCounter = () => {
  let myNameLength = 0;
  let myName = "ADHAMAA";
  const input = document.querySelector(".inputField");

  myNameLength = myName.length;

  const updateCounter = () => {
    const counter = document.querySelector(".counter");
    counter.textContent = myNameLength;
  };
  //Execute Counter Update
  updateCounter();

  //Execute name

  //   const getAndSetVal = function() {
  //     const input = document.querySelecto(".inputField").value;
  //     const addTextBtn = document.querySelector(".addTextBtn");
  //     input.addEventListener("click", function() {
  //       alert("insert string");
  //     });
  //     console.log(input);
  //   };
  //   getAndSetVal();
};
//Execute main string counter
stringCounter();

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

// Change this value to test
console.log(sequentialSizes(4));

function isLess(a, b) {
  // Fix this code
  return a < b;
}

// Change these values to test
console.log(isLess(10, 15));

var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value === "") delete collection[id][prop];
  else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

console.log(updateRecords(1245, "tracks"));
