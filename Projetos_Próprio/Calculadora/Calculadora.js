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
