let user_score = document.getElementById("user_score");
let computer_score = document.getElementById("computer_score");
let btn_group = document.querySelectorAll("button");
let result_display = document.getElementById("result_display");

btn_group.forEach((button) =>
  button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    let computerChoice = computerChoiceFunc();
    calculateResult(userChoice, computerChoice);
  })
);

function computerChoiceFunc() {
  const rps = ["Rock", "Paper", "Scissors"];
  let ramdonNum = Math.floor(Math.random() * rps.length);
  return rps[ramdonNum];
}
let userScore = 0;
let computerScore = 0;
let userWonRounds = 0;
let computerWonRounds = 0;
function calculateResult(userChoice, computerChoice) {
  switch (userChoice + computerChoice) {
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      result_display.innerHTML = `You pick ${userChoice} and Computer picks ${computerChoice}. It's a draw.`;

      break;
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      result_display.innerText = `You pick ${userChoice} and Computer picks ${computerChoice}. You won.`;
      userScore++;
      if (userScore === 5) {
        userWonRounds++;
        user_score.innerText = 0;
        computer_score.innerText = 0;
        userScore = 0, computerScore = 0;
        user_result_round.innerText = `(${userWonRounds})`
      }else {
        user_score.innerText = userScore;
      }
      break;
    case "ScissorsRock":
    case "RockPaper":
    case "PaperScissors":
      result_display.innerText = `You pick ${userChoice} and Computer picks ${computerChoice}. You lost.`;
      computerScore++;
      if (computerScore === 5) {
        computerWonRounds++;
        user_score.innerText = 0;
        computer_score.innerText = 0;
        userScore = 0, computerScore = 0;
        computer_result_round.innerText = `(${computerWonRounds})`
      }else {
        computer_score.innerText = computerScore;
      }
      break;
  }
}

