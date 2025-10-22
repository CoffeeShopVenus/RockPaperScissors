let Computer_Score = 0;
let Human_Score = 0;
const choices = ["rock", "paper", "scissors"];
const winMap = { rock: "scissors", paper: "rock", scissors: "paper" };

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(human, computer) {
    if (human === computer) return "Tie!";
    return winMap[human] === computer ? "You Win!" : "Computer Wins!";

}

const form = document.getElementById("game-form");
const resultsDiv = document.getElementById("results");

form.addEventListener("click", function (event) {
    event.preventDefault();
    const humanChoice = event.target.dataset.choice;
    if (!humanChoice) return;

    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    if (roundResult === "You Win!") {
        Human_Score++;
    }
    else if (roundResult == "Computer Wins!") {
        Computer_Score++;
    }

    resultsDiv.innerHTML = `
        <p>You chose: ${humanChoice}</p>
        <p>Computer's choice: ${computerChoice}</p>
        <p>Result: ${roundResult}</p>
        <p>Scores - You: ${Human_Score} | Computer: ${Computer_Score}</p>
    `;

    if (Human_Score === 5 || Computer_Score === 5) {
        resultsDiv.innerHTML += `<h2>${Human_Score === 5 ? "You won the game!" : "Computer won the game!"}</h2>`;
        form.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }
});

