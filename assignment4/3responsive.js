function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("gray");
  circle(100, 500, 100);
}

// place circle when clicked to create own circle painting