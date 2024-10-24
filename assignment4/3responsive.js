function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(46, 48, 64);
    noStroke();

    // 1 border
    fill(255,255,255);
    circle(((width / 2) - 50), 225, 253);
    
    // 1
    fill(13, 33, 191);
    circle(((width / 2) - 50), 225, 250);

    // 2
    fill(0,0,0);
    circle(((width / 2) - 72), 200, 185);

    // 3
    fill(251,230,85);
    circle(((width / 2) - 275), 50, 25);

    // 4
    fill(249,153,216);
    circle(((width / 2) - 260), 125, 50);

    // 5 border border
    fill(255,255,255);
    circle(((width / 2) - 210), 330, 71);

    // 5 border
    fill(0,0,0);
    circle(((width / 2) - 210), 330, 70);

    // 5
    fill(192,187,219);
    circle(((width / 2) - 210), 330, 65);

    // 6
    fill(0,0,0);
    circle(((width / 2) - 200), 318, 20);

    // 7
    fill(203,140,221,200);
    circle(((width / 2) + 5), 125, 70);

    // 8
    fill(251,235,176);
    circle(((width / 2) + 120), 100, 40);

    // 9
    fill(255,174,30);
    circle(((width / 2) + 180), 135, 20);

    // 10
    fill(241,63,87);
    circle(((width / 2) + 215), 95, 15);

    // 11
    fill(72,133,126, 200);
    circle(((width / 2) + 110), 190, 90);

    // 12 border
    fill(255,255,255);
    circle(((width / 2) + 110), 190, 21);
    
    // 12
    fill(0,0,0);
    circle(((width / 2) + 110), 190, 20);

    // 13
    fill(107,191,219, 180);
    circle(((width / 2) - 20), 270, 20);

    // 14
    fill(161,221,169, 200);
    circle(((width / 2) + 12), 260, 40);

    // 19
    fill(81,187,226);
    circle(((width / 2) + 38), 362, 65);

    // 15
    fill(255,165,53, 200);
    circle(((width / 2) + 35), 300, 70);

    // 16
    fill(205,174,49, 200);
    circle(((width / 2) - 5), 300, 40);

    // 17
    fill(244,115,171, 200);
    circle(((width / 2) + 60), 315, 30);

    // 18
    fill(0,0,0);
    circle(((width / 2) + 48), 323, 8);

    // 20
    fill(169,177,214, 230);
    circle(((width / 2) - 50), 350, 50);

    // 21 border
    fill(255,255,255);
    circle(((width / 2) - 65), 375, 9);
    
    // 21
    fill(0,0,0);
    circle(((width / 2) - 65), 375, 7);

    // 22
    fill(191,161,211);
    circle(((width / 2) - 95), 335, 7);

    // 23 border
    fill(0,0,0);
    circle(((width / 2) - 115), 340, 10);
    
    // 23
    fill(213,101,137);
    circle(((width / 2) - 115), 340, 7);

    // 24 border
    fill(247,229,101);
    circle(((width / 2) - 168), 270, 10);
    
    // 24
    fill(0,0,0);
    circle(((width / 2) - 168), 270, 7);

    // 25
    fill(214,177,47);
    circle(((width / 2) - 145), 345, 40);

    // 26
    fill(201,101,75, 200);
    circle(((width / 2) - 125), 370, 40);

    // 28
    fill(232,47,88);
    circle(((width / 2) - 155), 395, 40);

    // 27
    fill(223,112,145, 200);
    circle(((width / 2) - 135), 395, 40);

    // 29
    fill(247,229,101, 220);
    circle(((width / 2) - 175), 390, 40);

    // 30
    fill(246,149,203);
    circle(((width / 2) -  210), 450, 12);

    // 31
    fill(51,164,222);
    circle(((width / 2) - 185), 470, 22);

    // 32 border
    fill(247,229,101);
    circle(((width / 2) - 218), 485, 11);
    
    // 32
    fill(0,0,0);
    circle(((width / 2) - 218), 485, 9);

    // 33
    fill(247,182,52);
    circle(((width / 2) - 10), 450, 20);

    // 40
    fill(198,203,222);
    circle(((width / 2) + 180), 420, 110);

    // 34
    fill(206,173,128);
    circle(((width / 2) + 120), 395, 25);

    // 35 border
    fill(239,218,187);
    circle(((width / 2) + 145), 405, 30);
    
    // 35
    fill(133,212,217);
    circle(((width / 2) + 145), 405, 20);

    // 36 border
    fill(255,255,255);
    circle(((width / 2) + 220), 310, 15);
    
    // 36
    fill(18,76,222);
    circle(((width / 2) + 220), 310, 13);

    // 37
    fill(200,35,51);
    circle(((width / 2) + 185), 373, 10);

    // 38 border
    fill(255,255,255);
    circle(((width / 2) + 198), 375, 10);
    
    // 38
    fill(0,0,0);
    circle(((width / 2) + 198), 375, 7);

    // 39
    fill(209,184,83);
    circle(((width / 2) + 238), 420, 12);

    // 41
    fill(240,222,18);
    circle(((width / 2) + 165), 490, 10);

    // 42
    fill(203,46,75);
    circle(((width / 2) + 150), 515, 18);

    // 43
    fill(60,139,182);
    circle(((width / 2) + 210), 530, 15);
}

// place circle when clicked to create own circle painting