/*index.js for the simon game project
  */

/* we will use this array index to randomly select
   a color at the start of each level */
var colorArray = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var gameOn = false;

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
});

function newSequence(){
  var btnNumber = Math.floor(Math.random() * 4);
  var colorSelected = colorArray[btnNumber];
  gamePattern.push(colorSelected);
  console.log(gamePattern);
}

function sound(url) {
  new Audio(url).play();
}

newSequence();
