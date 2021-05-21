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
    //YOU PICKED
const youPickedBorder = document.getElementById("youPickedBorder");
const youPickedImg = document.getElementById("youPickedImg");

btnPaper.addEventListener("click", pickPaper);
btnScissors.addEventListener("click", pickScissors);
btnRock.addEventListener("click", pickRock);

function pickPaper () {
  console.log("Paper");
  userPick.style.display = "none";
  displayPick.style.display = "flex";
  youPickedBorder.classList.add ("paper");
  youPickedImg.src = "images/icon-paper.svg";
  housePick();
}
function pickScissors () {
  console.log("Scissors");
  userPick.style.display = "none";
  displayPick.style.display = "flex";
  youPickedBorder.classList.add ("scissors");
  youPickedImg.src = "images/icon-scissors.svg";
  housePick();
}
function pickRock () {
  console.log("Rock");
  userPick.style.display = "none";
  displayPick.style.display = "flex";
  youPickedBorder.classList.add ("rock");
  youPickedImg.src = "images/icon-rock.svg";
  housePick();
}

//THE HOUSE PICK
const housePickedBorder = document.getElementById("housePickedBorder");
const housePickedImg = document.getElementById("housePickedImg");
const housePickedBtn = document.getElementById("housePickedBtn");


function housePick () {
  housePickedBtn.style.backgroundColor = "#16213d";
  housePickedBtn.style.boxShadow = "none";
  let x = numAleatorio(1,3);
  console.log(x);
  if (x === 1) {
    setTimeout(function(){
        housePickedBtn.style.backgroundColor = "#fff";
        housePickedBtn.style.boxShadow = "inset 0 0.4375rem 0.0625rem #2a46c047";
      housePickedBorder.classList.add ("paper");
      housePickedImg.src = "images/icon-paper.svg";
      
    }, 1000);
  }
  if (x === 2) {
    setTimeout(function(){
        housePickedBtn.style.backgroundColor = "#fff";
        housePickedBtn.style.boxShadow = "inset 0 0.4375rem 0.0625rem #2a46c047";
      housePickedBorder.classList.add ("scissors");
      housePickedImg.src = "images/icon-scissors.svg";
    }, 1000);
  }
  if (x === 3) {
    setTimeout(function(){
        housePickedBtn.style.backgroundColor = "#fff";
        housePickedBtn.style.boxShadow = "inset 0 0.4375rem 0.0625rem #2a46c047";
      housePickedBorder.classList.add ("rock");
      housePickedImg.src = "images/icon-rock.svg";
    }, 1000);
  }
}
  
  //FUNCTIONS
  function numAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }