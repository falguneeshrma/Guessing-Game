const max= prompt("Enter max number: ");

const random= Math.floor(Math.random() * max) + 1 ;

let guess = prompt("Either quit or enter your guess: ");

while(true){
    if (guess == "quit") {
        console.log("Quitting the game...")
        break;
    }

    if(guess == random){
        console.log("Congrats! You Winnnnnn! See youhhh againnnnnn sooonnnnn! BTW, The random number was,", random);
        break;
    } else if(guess < random){
        guess = prompt("It's better if you try a larger number: ");
    }else {
        guess = prompt("It's better if you try a smaller number:  ");
    }

}
    