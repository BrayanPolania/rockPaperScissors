//SCORE
const txtScore = document.getElementById("txtScore");
let score = 0;


function saveScore() {
  localStorage.setItem("Score", score);
  txtScore.innerText = score;
}

if (localStorage.getItem("Score")) {
  score = localStorage.getItem("Score");
  txtScore.innerText = score;
}







//RULES
const btnRules = document.getElementById("btnRules");
const rules = document.getElementById("rules");
const btnCloseRules = document.getElementById("btnCloseRules");

btnRules.addEventListener("click", displayRules);
btnCloseRules.addEventListener("click", closeRules);

function displayRules () {
  rules.style.transform= "translateY(100vh)";
}
function closeRules () {
  rules.style.transform= "translateY(0)";
}


//userPick
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const btnRock = document.getElementById("btnRock");
//sections
const userPick = document.getElementById("userPick");
const displayPick = document.getElementById("displayPick");
const result = document.getElementById("result");
    //YOU PICKED
const youPickedBorder = document.getElementById("youPickedBorder");
const youPickedImg = document.getElementById("youPickedImg");
    //house pick
const housePickedBorder = document.getElementById("housePickedBorder");
const housePickedImg = document.getElementById("housePickedImg");
const housePickedBtn = document.getElementById("housePickedBtn");
const win = document.getElementById("win");

let optionUser;
let optionHome;

btnPaper.addEventListener("click", pickPaper);
btnScissors.addEventListener("click", pickScissors);
btnRock.addEventListener("click", pickRock);

function pick (option) {
    youPickedBorder.classList.remove (`paper`, `scissors`, `rock`);
    youPickedImg.src = ``;
    result.style.display = "none";
  userPick.style.display = "none";
  displayPick.style.display = "flex";
  youPickedBorder.classList.add (`${option}`);
  youPickedImg.src = `images/icon-${option}.svg`;
  optionUser = option;
  console.log(optionUser);
  housePick();
}
function pickPaper () {
  pick("paper");
}
function pickScissors () {
  pick("scissors");
}
function pickRock () {
  pick("rock");
}

//THE HOUSE PICK
function pickHome (option) {
  optionHome = option;
  console.log(optionHome);
    housePickedBorder.classList.remove (`paper`, `scissors`, `rock`);
    housePickedImg.src = ``;
  setTimeout(function () {
    housePickedBtn.style.backgroundColor = "#fff";
    housePickedBtn.style.boxShadow = "inset 0 0.4375rem 0.0625rem #2a46c047";
    housePickedBorder.classList.add (`${option}`);
    housePickedImg.src = `images/icon-${option}.svg`;
  }, 1000);
  winner();
}

function housePick () {
  housePickedBtn.style.backgroundColor = "#16213d";
  housePickedBtn.style.boxShadow = "none";
  let x = numAleatorio(1,3);
  if (x === 1) {
    pickHome ("paper");
  }
  if (x === 2) {
    pickHome ("scissors");
  }
  if (x === 3) {
    pickHome ("rock");
  }
}

//PLAY AGAIN
function winner () {
  if (optionUser === optionHome) {
    console.log("it's a tie");
    win.innerText = "It's a tie";
    setTimeout(function(){
      result.style.display = "flex";
    }, 2000);
  }
  else if (
  (optionUser === "rock" & optionHome === "scissors") || 
  (optionUser === "paper" & optionHome === "rock") || 
  (optionUser === "scissors" & optionHome === "paper")
  ) {
    console.log("you win");
    win.innerText = "you win";
    setTimeout(function(){
      score++;
      saveScore();
      result.style.display = "flex";
    }, 2000);
  }
  else {
    console.log("you lost");
    win.innerText = "you lost";
    setTimeout(function(){
      score--;
      saveScore();
      result.style.display = "flex";
    }, 2000);
  }
}
//PLAY AGAIN
const playAgain = document.getElementById("playAgain");

playAgain.addEventListener("click", restart);

function restart() {
  displayPick.style.display = "none";
  userPick.style.display = "flex";
}





  //FUNCTIONS
  function numAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }