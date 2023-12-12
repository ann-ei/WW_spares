const inputEl = document.querySelector("#quantity-input-js");
const decrementBtnEl = document.querySelector(".minus-btn");
const incrementBtnEl = document.querySelector(".plus-btn");

let counterValue = 1;

decrementBtnEl.addEventListener("click", () => {
  if (inputEl.value === "0") {
    inputEl.value = 0;
  } else {
    counterValue -= 1;
    inputEl.value = counterValue;
  }
});

incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  inputEl.value = counterValue;
});
