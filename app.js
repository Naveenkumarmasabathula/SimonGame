let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","blue"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}


function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

}

function check(idx){
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            // levelUp();
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score is <b> ${level} </b>  <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="#032250";
        },50);
        reset();
    }
}


function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    check(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);       
}

function reset(){   
    started = false;
    gameSeq = [];
    
    userSeq = [];
    level=0; 
}