let Computer_Score = 0;
let Human_Score = 0;
const choices = ["rock", "paper", "scissors"];
const winMap = { rock: "scissors", paper: "rock", scissors: "paper"};


function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    const sign = prompt("Choose Rock, Paper, or Scissors", ).toLowerCase();

    if(choices.includes(sign)){
        return sign;
    } else{
        console.log("Invalid Choice");
        return null;
    }
}

function playRound(human, computer){
   if(human === computer) return "Tie!";
   return winMap[human] === computer ? "You Win!" : "Computer Wins!"; 
   
}
for(i = 0; i <= 5; i++){
const humanChoice = getHumanChoice();
if(humanChoice){
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

console.log(`You picked ${humanChoice}`);
console.log(`Computer picked ${computerChoice}`);
console.log(result);

if(result === "You Win!") Human_Score++;
if(result === "Computer Wins!") Computer_Score++;

console.log("Score => Human: " + Human_Score + ", Computer: " + Computer_Score);
}} 
