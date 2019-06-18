
import {game} from './moving';
import {foodRepeater} from './moving';
import {repeater} from './moving';
import {speed} from './moving';

var repeaterSnake;


export var foodFalse = true; 

 export const start = () => {
   
    console.log(speed);
      clearInterval(repeaterSnake); 
      repeaterSnake = setInterval(game, speed);
    startVar = true;  
    foodFalse = false;
 }

 export const reset = () => {
   
    document.location.reload();
    foodFalse = true;
    clearInterval(foodRepeater);
    console.log('reset');

  }
   export const pause = () => {
    startVar = false;;
    foodFalse = true;
    clearInterval(repeater);
    
    console.log('pause');
  }

  export var startVar; 

