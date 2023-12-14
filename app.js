let options = document.querySelectorAll(".option");

let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let rock = document.querySelector("#rock");

let compSetScore = document.querySelector("#comp-score");
let userSetScore = document.querySelector("#user-score");


let msg = document.querySelector("#msg");

let totalOptions=["paper","scissors","rock"];


let compScore = 0;
let userScore = 0;

const compOption = ()=>{
    let compIdx = Math.floor(Math.random()*3);
    let compOption = totalOptions[compIdx];
    return compOption;
};

const playGame = (userOption)=>{
    let compOpt = compOption();

    if(userOption===compOpt){
        msg.innerText="Game draw!"
        msg.style.backgroundColor="black";
    }
    else if(userOption==="paper"){
        if(compOpt==="scissors"){
            compScore++;
            msg.innerText=`You Lost, scissors cut your paper`;
            msg.style.backgroundColor="red";
            
        }else{
            
            userScore++;
            msg.innerText=`You Won, your paper covered rock`
            msg.style.backgroundColor="green";
        }
    }
    else if(userOption==="rock"){
        if(compOpt==="scissors"){
            
            userScore++;
            msg.innerText=`Your Won, your Rock crushes scissors`;
            msg.style.backgroundColor="green";
        }else{
            
            compScore++;
            msg.innerText=`You Lost, paper coveres your rock`;
            msg.style.backgroundColor="red";
        }
    }
    else{
        if(compOpt==="paper"){
            
            userScore++;
            msg.innerText=`Your Won, your scissors cut paper`;
            msg.style.backgroundColor="green";
        }else{
            
            compScore++;
            msg.innerText=`You Lost, rock crushes your scissors`;
            msg.style.backgroundColor="red";
        }
    }
    compSetScore.innerText=compScore;
    userSetScore.innerText=userScore;   
}

options.forEach((option)=>{
    option.addEventListener("click",()=>{
        let userOption = option.getAttribute("id");
        playGame(userOption);
        
    })
});