let stop = false;
let movingRight = true,
    movingDown = false,
    movingLeft = false,
    movingUp = false,
    noClick = true;
export let speed = 150;
let fx;
let fy;
let eatFood = true;
let plusScore = false;
let size = 20;
var repeater, repeater2, repeater3;



import { makeBody } from './createSnake';
import { startVar } from './buttons';
import { startVar2 } from './buttons';



import {foodFalse} from './buttons';

const canvas = document.querySelector('#gameBoard');
export let ctx = canvas.getContext('2d');
export const snake = [];


export function moveDirection(e) {
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


   export const game = () => {
       if(startVar){


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
      

      
        

        if (X == fx / size && Y == fy / size) {
            plusScore = true;
            eatFood = true;
            addScore();
            spawnFood();
            
            if (speed > 40) {
                speed -= 5;
            }
            else {
                speed /= 1.1;
            }
            
           
         clearInterval(repeater);
         repeater = setInterval(game, speed*2);
            
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
var repeater3; 

function checkFood(){
  

    repeater3 = setInterval(spawnFoodAuto, 10);
    if(foodFalse){
        clearInterval(repeater3); 
    }
}
setInterval(checkFood, 10);
export function deleteFoodAuto() {
    if (foodFalse) {
        return;
    }
    else if (!foodFalse) {
        ctx.clearRect(fx, fy, 20, 20);
        foodDeleted = true;
    }
}


let score = 0;
function addScore() {
    if (plusScore) {
        score += 1;
       
    }
    plusScore = false;
}
function showScore() {
    document.getElementById(".score").innerHTML = `Score: ${score}`;
}

setInterval(showScore, 10);

export var foodRepeater = setInterval(deleteFoodAuto, 5000);
export var repeater;
