let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message.textContent = "Bitte gib eine Zahl zwischen 1 und 100 ein!";
        message.style.color = "yellow";
        return;
    }

    attempts++;
    userGuess = Number(userGuess);

    if (userGuess === randomNumber) {
        message.textContent = `Glückwunsch! Du hast die Zahl ${randomNumber} in ${attempts} Versuchen erraten! 🎉`;
        message.style.color = "lightgreen";
    } else if (userGuess < randomNumber) {
        message.textContent = "Zu niedrig! Versuch es nochmal.";
        message.style.color = "orange";
    } else {
        message.textContent = "Zu hoch! Versuch es nochmal.";
        message.style.color = "red";
    }
}