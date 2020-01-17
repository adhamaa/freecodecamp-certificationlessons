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
