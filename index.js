var random = Math.floor(Math.random() * 6) + 1; //creation of random number
var dice = "dice" + random + ".png"; //putting the random number into the dice
var imggen = document.querySelectorAll("img")[0]; //selecting the img tag of html
imggen.setAttribute("src", dice);

var random2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "dice" + random2 + ".png";
var imggen2 = document.querySelectorAll("img")[1];
imggen2.setAttribute("src", dice2);

function relodefun() {
  window.location.reload();
}

if (random > random2) {
  document.querySelector("h1").innerHTML="player 1 wins";
} 
else if(random < random2) {
    document.querySelector("h1").innerHTML="player 2 wins";
  }
else{
  document.querySelector("h1").innerHTML="match is tie";
}


