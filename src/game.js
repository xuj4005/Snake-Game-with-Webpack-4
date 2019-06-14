
import { startButton } from './dom-loader';
import { pauseButton } from './dom-loader';
import { resetButton } from './dom-loader';


const canvas = document.querySelector('#gameBoard');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "green";
let stop = false;
let movingRight = true,
  movingDown = false,
  movingLeft = false,
  movingUp = false,
  noClick = true;
let fx;
let fy;
let eatFood = true;
let plusScore = false;

let foodTrue = true; 


let size = 20;
let speed = 150;
var repeater
var foodRepeater;
const snake = [];



import "./buttons";


startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);



import { start } from './buttons';
import { pause } from './buttons';
import { reset } from './buttons';

createBody();
function makeBody(x, y) {
  ctx.fillStyle = 'green';
  ctx.fillRect(x * size, y * size, size, size);
}

function createBody() {

  var length = 5;

  for (let a = length; a >= 0; a--) {

    snake.push({ x: a, y: 0 });
  }
}
function moveDirection(e) {
  let key = String.fromCharCode(e.keyCode);
  if (key == 'w') {
    movingUp = true;
    movingRight = false;
    movingLeft = false;
    movingDown = false;
  } else if (key == 'd') {
    movingRight = true;
    movingUp = false;
    movingLeft = false;
    movingDown = false;
  } else if (key == 's') {
    movingRight = false;
    movingUp = false;
    movingLeft = false;
    movingDown = true;
  } else if (key == 'a') {
    movingRight = false;
    movingUp = false;
    movingLeft = true;
    movingDown = false;
  }
}
document.addEventListener('keypress', moveDirection);


export function game() {
  foodTrue = true;
  if (stop) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 500, 500);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, 500, 500);
  var X = snake[0].x;
  var Y = snake[0].y;
  if (X == 25) {
    X = -1;
  }
  else if (X <= -1) {
    X += 26;
    console.log('out of bound');
  } else if (Y == 25) {
    Y = -1;
  } else if (Y <= -1) {
    Y += 26;
  }
  if (movingRight) {
    X += 1;
  } else if (movingLeft) {
    X -= 1;
  } else if (movingUp) {
    Y -= 1;
  } else if (movingDown) {
    Y += 1;
  }
  document.getElementById(".speed").innerHTML = `Pixels per MS: ${speed}`;
  console.log(speed);
  if (X == fx / size && Y == fy / size) {
    plusScore = true;
    eatFood = true;
    addScore();
    spawnFood();
    clearInterval(repeater);
    if (speed > 40) {
      speed -= 5;
    }
    else {
      speed /= 1.1;
    }
    repeater = setInterval(game, speed);
    var newBody = { x: X, y: Y };
  } else {
    newBody = snake.pop();
    newBody.x = X;
    newBody.y = Y;
  }
  snake.unshift(newBody);
  for (let a = 0; a < snake.length; a++) {
    makeBody(snake[a].x, snake[a].y);
  }

  spawnFood();

  for (let a = 1; a < snake.length; a++) {
    if (snake[a].x == snake[0].x && snake[a].y == snake[0].y) {
      stop = true;
    }
  }
}
function spawnFood() {
  if (eatFood) {
    fx = Math.round((Math.random() * 500) / 20) * 20;
    fy = Math.round((Math.random() * 500) / 20) * 20;
  }
  ctx.fillStyle = "red";
  ctx.fillRect(fx, fy, 20, 20);
  eatFood = false;
}

let foodDeleted = false;

function spawnFoodAuto() {
  if (foodDeleted) {
    ctx.fillStyle = "red";
    fx = Math.round((Math.random() * 500) / 20) * 20;
    fy = Math.round((Math.random() * 500) / 20) * 20;
    ctx.fillRect(fx, fy, 20, 20);
  }
  foodDeleted = false;
}

setInterval(spawnFoodAuto, 10);

export function deleteFoodAuto() {
  if (foodTrue) {
    ctx.clearRect(fx, fy, 20, 20);
    foodDeleted = true;
  }
}
repeater = setInterval(deleteFoodAuto, 5000);

let score = 0;
function addScore() {
  if (plusScore) {
    score += 1;
    console.log(score);
  }
  plusScore = false;
}
function showScore() {
  document.getElementById(".score").innerHTML = `Score: ${score}`;
}

setInterval(showScore, 10);






