// Step 1: Get references to the display and all buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

// Step 2: Add event listeners to buttons using a loop
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText; // Get text of the clicked button

        // Step 3: Handle button actions using if-else
        if (value === "C") {
            display.value = ""; // Clear display
        } 
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1); // Remove last character
        } 
        else if (value === "=") {
            try {
                display.value = eval(display.value); // Evaluate and display result
            } catch {
                display.value = "Error"; // Handle invalid input
            }
        } 
        else {
            display.value += value; // Append clicked button value to display
        }
    });
});