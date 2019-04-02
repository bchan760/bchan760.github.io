var draw = SVG('canvas').size(1000, 1000);

let x = 0;
let y = 0;

function rect(){
    draw.rect(100, 50).fill('white').move(x+20,y+20).stroke('black');
}

function drawPyramid(){
    for(var i = 0; i < 3; i++){
        rect;

    }
}

drawPyramid()