// place circles by clicking mouse to create own circle painting

let colors;
let circleSize = 0;
let circleColor;

const circles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    colors = [color(0,0,0), 
        color(13,33,191), 
        color(251,230,85), 
        color(249,153,216), 
        color(192,187,219), 
        color(203,140,221,200), 
        color(255,174,30), 
        color(241,63,87), 
        color(72,133,126,200), 
        color(161,221,169,200), 
        color(81,187,226), 
        color(255,165,53,200), 
        color(244,115,171,200), 
        color(213,101,137), 
        color(214,177,47), 
        color(201,101,75,200), 
        color(232,47,88), 
        color(246,149,203), 
        color(51,164,222), 
        color(206,173,128), 
        color(133,212,217), 
        color(18,76,222), 
        color(200,35,51), 
        color(240,222,18), 
        color(203,46,75), 
        color(60,139,182)]
    circleSize = Math.floor(Math.random() * 250) + 15;
    circleColor = colors[(Math.floor(Math.random() * colors.length))];
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(46, 48, 64);
    noStroke();

    fill(circleColor);
    circle(mouseX, mouseY, circleSize);

    for (const c of circles) {
        c.draw();
    }
}

function mousePressed() {
    circles.push(new Circle(mouseX, mouseY, circleSize, circleColor));
}

function mouseReleased() {
    circleSize = Math.floor(Math.random() * 250) + 15;
    circleColor = colors[(Math.floor(Math.random() * colors.length))];
}

class Circle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw() {
        fill(this.color);
        circle(this.x, this.y, this.size);
    }
}