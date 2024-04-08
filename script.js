const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("number")) {
            appendToDisplay(button.textContent);
        } else if (button.classList.contains("operator")) {
            appendToDisplay(button.textContent);
        } else if (button.classList.contains("clear")) {
            clearDisplay();
        } else if (button.classList.contains("backspace")) {
            backspaceDisplay();
        } else if (button.classList.contains("equal")) {
            evaluateExpression();
        } else if (button.classList.contains("special")) {
            handleSpecial(button.textContent);
        }
    });
});

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspaceDisplay() {
    display.value = display.value.slice(0, -1);
}

function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}

function handleSpecial(value) {
    if (value === "%") {
        display.value += "/100";
    } else {
        display.value += value;
    }
}
