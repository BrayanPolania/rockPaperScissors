//RULES
const btnRules = document.getElementById("btnRules");
const rules = document.getElementById("rules");
const btnCloseRules = document.getElementById("btnCloseRules");

btnRules.addEventListener("click", displayRules);
btnCloseRules.addEventListener("click", closeRules);

function displayRules () {
  rules.style.transform= "translateY(0)";
}
function closeRules () {
  rules.style.transform= "translateY(-100vh)";
}

//