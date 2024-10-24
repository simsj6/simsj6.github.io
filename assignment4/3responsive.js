let a = color(13, 33, 191);
let b = color(0,0,0);
let c = color(251,230,85);
let d = color(249,153,216);
let e = color(192,187,219);
let f = color(203,140,221,200);
let g = color(251,235,176);
let h = color(255,174,30);
let i = color(241,63,87);
let j = color(72,133,126, 200);
let k = color(107,191,219, 180);
let l = color(161,221,169, 200);
let m = color(81,187,226);
let n = color(255,165,53, 200);
let o = color(205,174,49, 200);
let p = color(244,115,171, 200);
let q = color(169,177,214, 230);
let r = color(191,161,211);
let s = color(213,101,137);
let t = color(214,177,47);
let u = color(201,101,75, 200);
let v = color(232,47,88);
let w = color(223,112,145, 200);
let y = color(247,229,101, 220);
let z = color(246,149,203);
let aa = color(51,164,222);
let bb = color(247,182,52);
let cc = color(198,203,222);
let dd = color(206,173,128);
let ee = color(133,212,217);
let ff = color(18,76,222);
let gg = color(200,35,51);
let hh = color(209,184,83);
let ii = color(240,222,18);
let jj = color(203,46,75);
let kk = color(60,139,182);

let colors = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk];

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