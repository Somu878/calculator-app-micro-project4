// Get DOM elements
const output = document.getElementById("output");
const buttons = document.querySelectorAll(".element");

let resDisplayed = false;
output.innerText = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btext = button.innerText;
    //removes the current button text
    if (btext === "DEL") {
      if (!resDisplayed) {
        deleteDisplay();
      }
    }
    //resets the output
    else if (btext === "RESET") {
      resetDisplay();
      resDisplayed = false;
    }
    //displays final evaluated result
    else if (btext === "=") {
      calculate();
    } else {
      output.value += btext;
    }
  });
});
//function to delete last input value
function deleteDisplay() {
  output.value = output.value.slice(0, -1);
}

//function to reset display
function resetDisplay() {
  output.value = "";
}

//function to calculate result
function calculate() {
  let res = output.value.replace(/x/g, "*");
  let result = eval(res);
  // Check if the result is a floating-point number
  if (Number.isFinite(result) && result % 1 !== 0) {
    result = result.toFixed(3);
  }
  output.value = result;
  resDisplayed = true;
}
