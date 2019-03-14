console.log('loaded svg-demo.js');

let draw = SVG('drawing').size(480, 480);
let rectWidth = 200;
let rectHeight = 200;
let rect = draw.rect(rectWidth, rectHeight).fill('purple');

let x = 0;
let y = 0;
let rectDirection = 'right';
let moveDistance = 50;

function moveRectangle(direction) {
  if (direction == 'right') {
    x = x + moveDistance;
    y = y + moveDistance;
    rect.move(x, y);
  } else if (direction == 'left') {
    x = x - moveDistance;
    y = y - moveDistance;
    rect.move(x, y);
  } else {
    console.error('Error moving rectangle, the direction was ' + rectDirection);
  }
}

document.getElementById('move-rectangle-button').onclick = function() {
  console.log('moving rectangle');
  console.log('current x: ' + x);

  if (x > 480 - rectWidth) {
    // running off the screen
    console.log('running off the screen');
    rectDirection = 'left';
  }

  if (x < 0) {
    rectDirection = 'right';
  }

  moveRectangle(rectDirection);
}