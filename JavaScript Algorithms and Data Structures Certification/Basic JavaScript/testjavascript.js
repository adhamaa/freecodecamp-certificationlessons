const stringCounter = () => {
  let myNameLength = 0;
  var myName = "adhama akmal bin azmi bin abdul rahman";

  myNameLength = myName.length;
  console.log(myName.length);

  const updateCounter = () => {
    const counter = document.querySelector(".counter");
    counter.textContent = myNameLength;
  };
  //Execute Counter Update
  updateCounter();

  const updateName = () => {
    const input = document.querySelector(".inputField");
    const addTextBtn = document.querySelector(".addTextBtn");
    input.value = "type to count";
    console.log(input.value);
  };
  //Execute name
  updateName();
};
//Execute main string counter
stringCounter();
