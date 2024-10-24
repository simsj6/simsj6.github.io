let color = [color(13, 33, 191), color(0,0,0), color(251,230,85), color(249,153,216), color(192,187,219), color(203,140,221,200), color(251,235,176), color(255,174,30), color(241,63,87), color(72,133,126, 200), color(107,191,219, 180), color(161,221,169, 200), color(81,187,226), color(255,165,53, 200), color(205,174,49, 200), color(244,115,171, 200), color(169,177,214, 230), color(191,161,211), color(213,101,137), color(214,177,47), color(201,101,75, 200), color(232,47,88), color(223,112,145, 200), color(247,229,101, 220), color(246,149,203), color(51,164,222), color(247,182,52), color(198,203,222), color(206,173,128), color(133,212,217), color(18,76,222), color(200,35,51), color(209,184,83), color(240,222,18), color(203,46,75), color(60,139,182)];

let circleFilling = false;
let circleSize = 0;
let circleColor;

const circles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
  circleColor = color(random(color.length));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(46, 48, 64);
    noStroke();

    if (circleFilling) {
        circleSize += 2;

        fill(circleColor);
        circle(mouseX, mouseY, circleSize);
    }


    for (const c of circles) {
        c.draw();
    }
}

function getOverlappingCircle() {
    for(const c of circles){
        if(dist(c.x, c.y, mouseX, mouseY) <
        circleSize / 2 + c.size / 2 + 2){
        return c;
        }
    }

    return undefined;
}

function isOffScreen(){
    return mouseX < circleSize / 2 ||
            mouseX > width - circleSize / 2 ||
            mouseY < circleSize / 2 ||
            mouseY > height - circleSize / 2;
}

function mousePressed() {
    circleSize = 0;
    circleColor = color(random(color.length));
    circleFilling = true;
}

function mouseReleased() {
    if (circleFilling) {
        circles.push(new Circle(mouseX, mouseY, circleSize, circleColor));
    }
    circleFilling = false;
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

// place circle when clicked to create own circle painting