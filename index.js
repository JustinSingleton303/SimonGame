/*index.js for the simon game project
  */

/* GLOBALS */
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

/* functions */
function newSequence(){
  var btnNumber = Math.floor(Math.random() * 4);
  var colorSelected = colorArray[btnNumber];
  gamePattern.push(colorSelected);
  $("." + colorSelected).fadeOut().fadeIn();
  return colorSelected;
}

function sound(url) {
  new Audio(url).play();
}

/*$(document).click(function(event){
  var colorClicked = event.target.id;
  console.log(colorClicked);
});*/

$(document).keydown(function(){
  if(gameOn === false){
    var colorToSound = newSequence();
    sound("sounds/" + colorToSound + ".mp3");
    gameOn = true;

    while(gameOn === true){
      $(document).click(function(event){
        var colorClicked = event.target.id;
        console.log(colorClicked);

      });gameOn = false;
    }
  }
});
