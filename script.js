const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    let result = Function('"use strict"; return (' + display.value + ')')();
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  const historyDiv = document.getElementById("history");
  const newEntry = document.createElement("div");
  newEntry.textContent = entry;
  historyDiv.appendChild(newEntry);
  historyDiv.scrollTop = historyDiv.scrollHeight;
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
