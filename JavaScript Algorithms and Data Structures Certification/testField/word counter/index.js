const realCount = () => {
  const submitBtn = document.querySelector("#submitBtn");
  const input = document.querySelector("#wInput");
  //Update the result number
  const updateResult = () => {
    const words = document.querySelector("#total-words");
    const letters = document.querySelector("#total-letters");
    let inputValue = document.querySelector("#wInput").value;
    //exclude  start and end white-space
    inputValue = inputValue.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1
    inputValue = inputValue.replace(/[ ]{2,}/gi, " ");
    // exclude newline with a start spacing
    inputValue = inputValue.replace(/\n /, "\n");
    /* Split and count start */
    let a = inputValue.split(" ").length;
    let b = inputValue.split(/\w/).length - 1;
    console.log(a, b);
    /* Split and count end */
    if (inputValue <= 0) {
      alert("na ahhhhh!");
      return;
    }
    words.textContent = a + " words";
    letters.textContent = b + " letters";
  };

  submitBtn.addEventListener("click", () => updateResult());

  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      updateResult();
    }
  });
};
realCount();
