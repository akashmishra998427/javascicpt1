// script.js
document.addEventListener("DOMContentLoaded", function () {
    const choices = document.querySelectorAll(".choice");
    const resultText = document.getElementById("result-text");

    const choicesArray = ["rock", "paper", "scissors"];

    choices.forEach(choice => {
        choice.addEventListener("click", function () {
            const playerChoice = this.id;
            const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
            const result = determineWinner(playerChoice, computerChoice);
            displayResult(playerChoice, computerChoice, result);
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    function displayResult(player, computer, result) {
        resultText.innerHTML = `You chose <strong>${player}</strong>.<br>
                                The computer chose <strong>${computer}</strong>.<br>
                                <strong>${result}</strong>`;
    }
});
