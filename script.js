//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener("input", (e) => {
        const value = e.target.value;

        // Allow only digits
        if (!/^\d$/.test(value)) {
            e.target.value = "";
            return;
        }

        // Move to next input
        if (value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            // If current input is empty, move to previous
            if (code.value === "" && index > 0) {
                codes[index - 1].focus();
            }
        }
    });
});