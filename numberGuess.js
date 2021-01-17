

//getSecretTarget function
const getSecretTarget = () => Math.floor(Math.random () * 9);

//assign function to variable
let target;
target = getSecretTarget();

//assign value to humanGuess
const humanGuess = 4;


//output of program
console.log(`Current target number is: ${target}`);
console.log('Current human Guess is: ' + humanGuess);

//compare guesses
const compareGuess = () => {
    if (humanGuess > target){
        console.log('You won!');
    } else if (humanGuess < target){
        console.log('The computer won!');
    } else{
        console.log('The game was a tie.')
    }
}

compareGuess();