let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let minRange = 1;
let maxRange = 100;

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    let attemptCount = document.getElementById("attemptCount");
    let rangeDisplay = document.getElementById("rangeDisplay");

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message.textContent = "Bitte gib eine Zahl zwischen 1 und 100 ein!";
        message.style.color = "yellow";
        return;
    }

    attempts++;
    attemptCount.textContent = attempts;
    userGuess = Number(userGuess);

    if (userGuess === randomNumber) {
        message.textContent = `Glückwunsch! Du hast die Zahl ${randomNumber} in ${attempts} Versuchen erraten.`;
        message.style.color = "lightgreen";
        disableInput();
    } else if (userGuess < randomNumber) {
        message.textContent = "Zu niedrig! Versuch es nochmal.";
        message.style.color = "orange";
        minRange = Math.max(minRange, userGuess + 1);
    } else {
        message.textContent = "Zu hoch! Versuch es nochmal.";
        message.style.color = "red";
        maxRange = Math.min(maxRange, userGuess - 1);
    }

    rangeDisplay.textContent = `${minRange} - ${maxRange}`;
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    minRange = 1;
    maxRange = 100;
    document.getElementById("attemptCount").textContent = attempts;
    document.getElementById("message").textContent = "Viel Erfolg!";
    document.getElementById("message").style.color = "white";
    document.getElementById("guessInput").value = "";
    document.getElementById("rangeDisplay").textContent = "1 - 100";
    enableInput();
}

function disableInput() {
    document.getElementById("guessInput").disabled = true;
}

function enableInput() {
    document.getElementById("guessInput").disabled = false;
}
