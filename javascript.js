let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const score_board = document.querySelector(".score-board");
let msg = document.querySelector(".msg");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

const generatecompchoice = () => {
    const option = ["stone", "paper","scissor"];//we have store option in array becoz in js random num can be generated 
    const randomidx = Math.floor(Math.random() * 3);      //which can be used as index of an arraybut random strings can't be generated
    return (option[randomidx]); 
}                                              
const gamedraw=(compchoice) => {
     msg.innerText = ` draw ,comp choose ${compchoice} ` ;
     msg.style.backgroundColor = " #081b31";
}

const playgame = (userchoice) => {
    //generate comp choice
    const compchoice=generatecompchoice();
   //drawgame condition 
    if(userchoice == compchoice){
        gamedraw(compchoice);  
    }
   
    //conditions comp wins 
    if(userchoice == "rock" && compchoice == "paper" || userchoice == "paper" && compchoice == "scissor" || userchoice == "scissor" && compchoice == "rock"){
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = `you lose ,comp ${compchoice}beats your ${userchoice}` ;
         msg.style.backgroundColor = "red";

    } 
    else{ //you wins 
      userScore++;
      user_score.innerText = userScore ; 
      msg.innerText =`you wins!, your ${userchoice} beats ${compchoice}`;
      msg.style.backgroundColor = "green";
    }
    
}

 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{        //user choice generate
    const userchoice = choice.getAttribute("id");
    
    playgame(userchoice);
    
   
    })
 })