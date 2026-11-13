
const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}

function calculate() {
    try {
        const expression = display.value;

        // Allow only numbers and calculator operators
        if (!/^[0-9+\-*/. ]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = String(
            Number(result.toFixed(10))
        );

    } catch {
        display.value = "Error";
    }
}
