let tools = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    let computerChoice = tools[Math.floor(Math.random() * tools.length)];
    return computerChoice;
}



function game () {
    let user_score = 0;
    let computer_score = 0;
    for (i=1; i < 6; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Play : rock, paper, scissors");
        function playRound (computerChoice,playerChoice) {
            let playerChoiceLowerCase = playerChoice.toLowerCase();
            
            if (computerChoice === "rock" && playerChoiceLowerCase === "rock" || computerChoice === "paper" && playerChoiceLowerCase === "paper" || computerChoice === "scissors" && playerChoiceLowerCase === "scissors") {
                console.log(`Round: ${i} : it's a tie, computer chose ${computerChoice}, you chose ${playerChoiceLowerCase} `);
            }
        
            if (computerChoice === "rock" && playerChoiceLowerCase === "scissors" || computerChoice === "scissors" && playerChoiceLowerCase === "paper") {
                console.log(`Round: ${i} : Computer WON! computer chose ${computerChoice}, you chose ${playerChoiceLowerCase}`);
                computer_score++;
            }
        
            if (computerChoice === "scissors" && playerChoiceLowerCase === "rock" || computerChoice === "paper" && playerChoiceLowerCase === "scissors") {
                console.log(`Round: ${i} : You WON! computer chose ${computerChoice}, you chose ${playerChoiceLowerCase}`);
                user_score++;
            }
        }
        playRound(computerChoice,playerChoice);
        console.log(`Your score : ${user_score} and Computer score ${computer_score} `);
    }
}

game();

