let userscore=0;
let computerscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg");

const userScorepara = document.querySelector("#userscore");
const compScorepara = document.querySelector("#compScore");

const genComputerChoice = () =>{
    const options = ["rock" , "papper" , "scissors"];
    const randIdx= Math.floor(Math.random () *3);
    return options[randIdx];
    //rock,papper,scissor

};

const drawGame = () => {
    msg.innerText = "Game was Draw.Play Again ";
    msg.style.backgroundcolor = "red";
};
const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        user-Score++;
        userScorepara.innerText = user-Score;
        msg.innerText = `congrates, you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor="red";

    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText= `Opps! You lost ${compChoice} beats  Your ${userChoice}`;
      //  msg.style.backgroundcolor= "green";
    }
};

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genComputerChoice();


    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors , papper 
            userWin = compChoice === "papper" ? false : true;
        } else  if ( userChoice === "papper"){
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock , papper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner (userWin , userChoice , compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});