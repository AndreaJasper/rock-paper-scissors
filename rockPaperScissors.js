console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!')
  }
}


const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors'
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {

    return "Sorry, computer won!";
    } else {
    return "Congratulations, you won!";
    }
  }

  if (UserChoice === 'scissors') {
    if (computerChoice ==='paper') {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer thre: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
