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

[
  //1
  ["deep"], //2
  [
    //2
    ["deeper"], //3
    ["deeper"] //3
  ],
  [
    //2
    [
      //3
      ["deepest"], //4
      ["deepest"] //4
    ],
    [
      //3
      [
        //4
        ["deepest-est?"] //5
      ]
    ]
  ]
];
