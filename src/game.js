
import { startButton } from './dom-loader';
import { pauseButton } from './dom-loader';
import { resetButton } from './dom-loader';

import { start } from './buttons';
import { pause } from './buttons';
import { reset } from './buttons';

import { createBody } from './createSnake';
import { makeBody } from './createSnake';
import { moveDirection } from './moving';

export const snake = [];

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);

createBody();
makeBody();

document.addEventListener('keypress', moveDirection);



 








