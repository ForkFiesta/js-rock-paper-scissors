const getUserChoice = userInput =>{

    // change user input to all lower case
    userInput = userInput.toLowerCase();
    
    //check if user input valid: rock paper or scissors

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
    {
        return userInput;
    }
    else{
        console.log("ERROR: NOT A VALID INPUT");
    }
}
// gets computer to generate rock paper or scissiors using a random num generator and switch statement
const getComputerChoice = ()=>{
    let computerNumber = Math.floor(Math.random() * 3);

    switch(computerNumber){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            console.log("ERROR");
    }
    
}

// determines winner based off computer choice and user choice and returns it to the console
const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice){
        console.log(`Computer chose ${computerChoice}, player chose ${userChoice}`);
        return 'Game is a tie';
    }
    else if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            console.log(`Computer chose ${computerChoice}, player chose ${userChoice}`);
            return 'Computer wins';
        }
        else if (computerChoice === 'scissors'){
            console.log(`Computer chose ${computerChoice}, player chose ${userChoice}`);
            return 'Player wins';
        }
    
    }
    else if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            console.log(`Computer chose ${computerChoice}, player chose ${userChoice}`);
            return 'Computer wins';
        }
        else if (computerChoice === 'rock'){
            console.log(`Computer chose ${computerChoice}, player chose ${userChoice}`);
            return 'Player wins';
        }
    }
    else if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            console.log(`Computer chose ${computerChoice}, player chose ${userChoice}`);
            return 'Computer wins';
        }
        else if (computerChoice === 'paper'){
            console.log(`Computer chose ${computerChoice}, player chose ${userChoice}`);
            return 'Player wins';

        }
    }
}


// user defines choice here for game. Choose rock paper or scissors. Rock is default
const playGame = ()=>{
    const userChoice = getUserChoice('Scissors');
    const computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));

}

// executes game
playGame();