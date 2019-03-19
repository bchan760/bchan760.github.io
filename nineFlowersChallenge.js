let draw = SVG('canvas').size(800,800);
let circWidth = 75;
let circHeight = 75;

function drawFlower(x, y){
    let circ = draw.circle(50, 50).fill('white').move(x+50,x+50);
    var line = draw.line(0, 100, 0, 50).move(x+75, x+100)
    line.stroke({ color: 'green', width: 7.5, linecap: 'round' })
}

drawFlower(0, 0);
drawFlower(200, 0);
drawFlower(600, 100);

