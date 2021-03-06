/*index.js for the simon game project
  */

/* GLOBALS */
/* we will use this array index to randomly select
   a color at the start of each level */

var colorArray = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var gameOn = false;
var level = 0;


/* functions */
function newSequence(){
  var btnNumber = Math.floor(Math.random() * 4);
  var colorSelected = colorArray[btnNumber];
  gamePattern.push(colorSelected);
  $("." + colorSelected).fadeOut().fadeIn();
  sound("sounds/" + colorSelected + ".mp3");
  level++;
}

function sound(url) {
  new Audio(url).play();
}

function checkAnswer(currentLevel){
  if(userPattern[currentLevel] !== gamePattern[currentLevel]){
    console.log("incorrect");
    return "incorrect";
  }
  else if(userPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("correct");
    return "correct";
  }
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
  userPattern.push(colorClicked);
  checkAnswer(userPattern.length - 1);
});

$(document).keydown(function(){
  if(gameOn === false){
    newSequence();
    $("h1").text("Level " + level);
    gameOn = true;
    }

});
