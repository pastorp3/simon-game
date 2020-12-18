const buttonColors = ['red','blue','green','yellow'];
let gamePattern = [];
let userPattern = [];
const randomNumber = () => {
  let x = Math.floor(Math.random()*4);
  return x;
};

const animPress = (tag) => {
    $(`#${tag}`).addClass('pressed');
    setTimeout(function(){
        $(`#${tag}`).removeClass('pressed');
    }, 100);
};

const sound = (input) => {
  let button = input;
  switch (button) {
    case 'green':
    let audioGreen = new Audio('sounds/green.mp3');
    audioGreen.play();
      break;
    case 'red':
      let audioRed = new Audio('sounds/red.mp3');
      audioRed.play();
      break;
    case 'yellow':
      let audioYellow = new Audio('sounds/yellow.mp3');
      audioYellow.play();
      break;
    case 'blue':
      let audioBlue = new Audio('sounds/blue.mp3');
      audioBlue.play();
      break;
    default:

  }
}

$(document).keypress(function() {
  let randomColor = buttonColors[randomNumber()];
  $(`#${randomColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  sound($(`#${randomColor}`)[0].id);
  gamePattern.push(randomColor);
});

$('.btn').click(function(e) {
  let userChoosencolor = e.target.id;
  userPattern.push(userChoosencolor);
  sound(userChoosencolor);
  animPress(userChoosencolor);
  console.log(userPattern);
});
