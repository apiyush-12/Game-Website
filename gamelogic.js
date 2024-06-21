let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options=["rock", "paper" ,"scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game Draw,Play Again";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        console.log("You Lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("userChoice= ",userChoice);  //User choice
    const compChoice=genCompChoice();   // Computer choice
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Choice was selected",userChoice);
        playGame(userChoice);
    });
});



