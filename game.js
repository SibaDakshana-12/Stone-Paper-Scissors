let userScore=0;
let compScore=0;

let userScoreMsg=document.querySelector("#user-score");
let compScoreMsg=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompchoice = () =>{
    let options=["rock","paper","scissors"];
//rock,paper,scissor
let randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw.Play again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        console.log("you win");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScoreMsg.innerText=userScore;
    }
    else{
        console.log("you loose");
        msg.innerText=`You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScoreMsg.innerText=compScore;
    }
};

const palyGame = (userChoice) =>{
    console.log(`user choice is ${userChoice}`);
    //comp generate
    const compChoice=genCompchoice();
    console.log(`computer choice is ${compChoice}`);

    if(compChoice===userChoice){
        //draw
      drawGame();
    }
    else{
        let userWin=true;
        if(userChoice===rock){
            userwin= compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors" ? false:true;
        }
        else{
            userWin= compChoice==="rock" ?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(userChoice);
     palyGame(userChoice);
    })
})