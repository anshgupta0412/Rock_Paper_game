let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const GenCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const RandIdx = Math.floor(Math.random() * 3);
    return options[RandIdx];
};

const DrawGame = () => {    
    console.log("Game was Drawed.");
    msg.innerText = "Game drawed!!! play again.";
    msg.style.backgroundColor = "#081b31"; 
};

const ShowWinner = (userwin, CompChoice, userChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green"; 
    } else {
        compScore++;
        compScorePara.innerText = compScore; 
        msg.innerText = `You Lost! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    // generating computer choice.
    const CompChoice = GenCompChoice();
    console.log("comp choice = ", CompChoice);

    if(userChoice === CompChoice){
        //Draw
        DrawGame();
    } else {
        let userwin = true;
    if (userChoice === "rock") {
        userwin = CompChoice === "scissors";
    } else if (userChoice === "paper") {
        userwin = CompChoice === "rock";
    } else { // scissors
        userwin = CompChoice === "paper";
    }
    ShowWinner(userwin, CompChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});