/*index.js for the simon game project
  */

/* GLOBALS */
/* we will use this array index to randomly select
   a color at the start of each level */

var colorArray = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var gameOn = false;
/*
$(".green").click(function(){
  sound("sounds/green.mp3");

});

$(".red").click(function(){
  sound("sounds/red.mp3");
});

$(".yellow").click(function(){
  sound("sounds/yellow.mp3");
});

$(".blue").click(function(){
  sound("sounds/blue.mp3");
});*/

/* functions */
function newSequence(){
  var btnNumber = Math.floor(Math.random() * 4);
  var colorSelected = colorArray[btnNumber];
  gamePattern.push(colorSelected);
  $("." + colorSelected).fadeOut().fadeIn();
  sound("sounds/" + colorSelected + ".mp3");
  return colorSelected;
}

function sound(url) {
  new Audio(url).play();
}

function gameRound(){

}

function animatePress(currentColor){
  $("." + currentColor).addClass("pressed");
  setTimeout(function(){
    $("." + currentColor).removeClass("pressed");
  }, 100);
}



function gameOver(){
  gamePattern = [];
  userPattern = [];
  gameOn = false;
}

$(document).click(function(event){
  var colorClicked = event.target.id;
  console.log(colorClicked);
  sound("sounds/" + colorClicked + ".mp3");
  animatePress(colorClicked);

});

$(document).keydown(function(){
  if(gameOn === false){
    newSequence();
    gameOn = true;
    }
});
