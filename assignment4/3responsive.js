let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;
let j;
let k;
let l;
let m;
let n;
let o;
let p;
let q;
let r;
let s;
let t;
let u;
let v;
let w;
let y;
let z;
let aa;
let bb;
let cc;
let dd;
let ee;
let ff;
let gg;
let hh;
let ii;
let jj;
let kk;

let colors = [];

let circleFilling = false;
let circleSize = 0;
let circleColor;

const circles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    a = color(13, 33, 191);
    b = color(0,0,0);
    c = color(251,230,85);
    d = color(249,153,216);
    e = color(192,187,219);
    f = color(203,140,221,200);
    g = color(251,235,176);
    h = color(255,174,30);
    i = color(241,63,87);
    j = color(72,133,126, 200);
    k = color(107,191,219, 180);
    l = color(161,221,169, 200);
    m = color(81,187,226);
    n = color(255,165,53, 200);
    o = color(205,174,49, 200);
    p = color(244,115,171, 200);
    q = color(169,177,214, 230);
    r = color(191,161,211);
    s = color(213,101,137);
    t = color(214,177,47);
    u = color(201,101,75, 200);
    v = color(232,47,88);
    w = color(223,112,145, 200);
    y = color(247,229,101, 220);
    z = color(246,149,203);
    aa = color(51,164,222);
    bb = color(247,182,52);
    cc = color(198,203,222);
    dd = color(206,173,128);
    ee = color(133,212,217);
    ff = color(18,76,222);
    gg = color(200,35,51);
    hh = color(209,184,83);
    ii = color(240,222,18);
    jj = color(203,46,75);
    kk = color(60,139,182);

    colors = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk];
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