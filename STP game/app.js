let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const generateCompchoice = () =>{
    const options = ["rock", "paper", "scissors"]
    const randIDX = Math.floor(Math.random() *3);
    return options[randIDX];

}

const drawGame = () => {
    msg.innerText = "Game was drawn";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin, userchoice, compChoice) => {
    if (userwin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    //generate computer choice
    const compChoice = generateCompchoice();

    if(userchoice === compChoice){
        //draw game
        drawGame();
    } else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissors, paper
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            //rock, scissors
            userwin = compChoice === "scissors"? false : true;
        }
        else {
            //rock, paper
            userwin = compChoice === "rock"? false : true;
        }
        showWinner(userwin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

        
    });
});