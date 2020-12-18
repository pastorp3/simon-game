const buttonColors = ['red','blue','green','yellow'];
let gamePattern = [];
let userPattern = [];
let start = false;
let level = 0;

const randomNumber = () => {
  let x = Math.floor(Math.random()*4);
  return x;
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

const animPress = (tag) => {
    $(`#${tag}`).addClass('pressed');
    setTimeout(function(){
        $(`#${tag}`).removeClass('pressed');
    }, 100);
};

const checkAnswer = (currentLevel) => {
    let status = false
    for ( let i = 0; i <= currentLevel; i += 1) {
        if ( gamePattern[i] != userPattern[i] ) {
          status = true;
        };
    };
    console.log(status);
    return status;
}

const gameOver = () => {
  let lose = new Audio('sounds/wrong.mp3');
  lose.play();
  $('body').addClass('game-over');
  setTimeout(function(){
      $('body').removeClass('game-over');
  }, 100);

  $('h1').text('Game Over, Press Any Key to Restart');
  start = false;
  level = 0;
  userPattern = [];
  gamePattern = [];
}

const nextSequence = () => {
  console.log(level);
  $('h1').text(`Leve ${level}`);
  level += 1;
  let randomColor = buttonColors[randomNumber()];
  gamePattern.push(randomColor);
  $(`#${randomColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  sound($(`#${randomColor}`)[0].id);
  userPattern = [];
}

$('.btn').click(function(e) {
  let userChoosencolor = e.target.id;
  userPattern.push(userChoosencolor);
  sound(userChoosencolor);
  animPress(userChoosencolor);
  if ( gamePattern.length === userPattern.length) {
    let ongame = checkAnswer(level);
    if (ongame === true){
      gameOver();
    } else {
      setTimeout(function(){
        nextSequence();
      }, 500);
    }


  }
});

$(document).keypress(function() {
  if (start === false) {
    nextSequence();
  }
  start = true;
});
