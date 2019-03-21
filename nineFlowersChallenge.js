var draw = SVG('canvas').size(1000,1000);
var circWidth = 50;
var circHeight = 50;

function drawFlower(x, y){

    var ellipse1 = draw.ellipse(15,50,25,25).fill('blue').move(x+80, y+30).rotate(0);
    var ellipse2 = draw.ellipse(15,50,25,25).fill('grey').move(x+60, y+75).rotate(45);
    var ellipse3 = draw.ellipse(15,50,25,25).fill('red').move(x+100, y+75).rotate(135);
    var circ = draw.circle(15, 15).fill('white').move(x+80,y+75);
    var line = draw.line(0, 50, 0, 0).move(x+88, y+95)
    line.stroke({ color: 'green', width: 7.5, linecap: 'round' })
}
function drawBee(x,y){
    
}
drawFlower(0,0);
drawFlower(200,0);
drawFlower(400,0);
drawFlower(0,200);
drawFlower(200,200);
drawFlower(400,200);
drawFlower(0,400);
drawFlower(200,400);
drawFlower(400,400);
