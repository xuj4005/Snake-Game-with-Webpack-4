
import {game} from './game';

let speed = 150;
var repeater; 
var foodRepeater;

 export const start = () => {
    repeater = setInterval(game, speed);
    console.log('Started');
  }

 export const reset = () => {
    console.log(foodTrue);
    clearInterval(foodRepeater);
    document.location.reload();
    console.log('reset');

  }
   export const pause = () => {
    clearInterval(repeater);
    foodTrue = false;
    console.log('pause');
  }

 
 
  


  
  
 
