function insertToDisplay(data) {
  document.querySelector("#display").value += data;
}

function clean_display() {
  document.querySelector("#display").value = "";
}

function delet_unit() {
  const display = document.querySelector("#display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.querySelector("#display");

  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

//Botão toggle
const btnToggle = document.querySelector(".btn-toggle");
const btnToggle_backgroundCal = document.querySelector(".calculadora");
const btnToggle_on = document.querySelector(".btn-toggle-on");
const btnToggle_title = document.querySelector(".Title_toggle")


btnToggle.addEventListener("click", () => {
  btnToggle.classList.toggle("Dark");
  btnToggle_backgroundCal.classList.toggle("Dark");
  document.body.classList.toggle("Dark");
  btnToggle_title.classList.toggle("Dark");
});
