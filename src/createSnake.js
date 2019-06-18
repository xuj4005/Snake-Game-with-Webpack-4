import { snake } from './moving';
import { ctx } from './moving';


let size = 20;

export function createBody() {
    var length = 5;
    for (let a = length; a >= 0; a--) {
        snake.push({ x: a, y: 0 });
    }
}

export function makeBody(x, y) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x * size, y * size, size, size);
  }
