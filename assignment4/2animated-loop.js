// pop circles animation

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
let p;
let q;
let r;
let s;
let t;
let u;
let v;
let w;
let x;
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
let ll;
let mm;
let nn;
let oo;
let pp;
let qq;
let positions;

function setup() {
    createCanvas(windowWidth, windowHeight);
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    i = 0;
    j = 0;
    k = 0;
    l = 0;
    m = 0;
    n = 0;
    o = 0;
    p = 0;
    q = 0;
    r = 0;
    s = 0;
    t = 0;
    u = 0;
    v = 0;
    w = 0;
    x = 0;
    y = 0;
    z = 0;
    aa = 0;
    bb = 0;
    cc = 0;
    dd = 0;
    ee = 0;
    ff = 0;
    gg = 0;
    hh = 0;
    ii = 0;
    jj = 0;
    kk = 0;
    ll = 0;
    mm = 0;
    nn = 0;
    oo = 0;
    pp = 0;
    qq = 0;
    positions = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq];
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(46, 48, 64);

    noStroke();

    // 1 border
    fill(255,255,255);
    circle((a + ((width / 2) - 50)), 225, 253);
    
    // 1
    fill(13, 33, 191);
    circle((a + ((width / 2) - 50)), 225, 250);

    // 2
    fill(0,0,0);
    circle((b + ((width / 2) - 72)), 200, 185);

    // 3
    fill(251,230,85);
    circle((c + ((width / 2) - 275)), 50, 25);

    // 4
    fill(249,153,216);
    circle((d + ((width / 2) - 260)), 125, 50);

    // 5 border border
    fill(255,255,255);
    circle((e + ((width / 2) - 210)), 330, 71);

    // 5 border
    fill(0,0,0);
    circle((e + ((width / 2) - 210)), 330, 70);

    // 5
    fill(192,187,219);
    circle((e + ((width / 2) - 210)), 330, 65);

    // 6
    fill(0,0,0);
    circle((f + ((width / 2) - 200)), 318, 20);

    // 7
    fill(203,140,221,200);
    circle((g + ((width / 2) + 5)), 125, 70);

    // 8
    fill(251,235,176);
    circle((h + ((width / 2) + 120)), 100, 40);

    // 9
    fill(255,174,30);
    circle((i + ((width / 2) + 180)), 135, 20);

    // 10
    fill(241,63,87);
    circle((j + ((width / 2) + 215)), 95, 15);

    // 11
    fill(72,133,126, 200);
    circle((k + ((width / 2) + 110)), 190, 90);

    // 12 border
    fill(255,255,255);
    circle((l + ((width / 2) + 110)), 190, 21);
    
    // 12
    fill(0,0,0);
    circle((l + ((width / 2) + 110)), 190, 20);

    // 13
    fill(107,191,219, 180);
    circle((m + ((width / 2) - 20)), 270, 20);

    // 14
    fill(161,221,169, 200);
    circle((n + ((width / 2) + 12)), 260, 40);

    // 19
    fill(81,187,226);
    circle((o + ((width / 2) + 38)), 362, 65);

    // 15
    fill(255,165,53, 200);
    circle((p + ((width / 2) + 35)), 300, 70);

    // 16
    fill(205,174,49, 200);
    circle((q + ((width / 2) - 5)), 300, 40);

    // 17
    fill(244,115,171, 200);
    circle((r + ((width / 2) + 60)), 315, 30);

    // 18
    fill(0,0,0);
    circle((s + ((width / 2) + 48)), 323, 8);

    // 20
    fill(169,177,214, 230);
    circle((t + ((width / 2) - 50)), 350, 50);

    // 21 border
    fill(255,255,255);
    circle((u + ((width / 2) - 65)), 375, 9);
    
    // 21
    fill(0,0,0);
    circle((u + ((width / 2) - 65)), 375, 7);

    // 22
    fill(191,161,211);
    circle((v + ((width / 2) - 95)), 335, 7);

    // 23 border
    fill(0,0,0);
    circle((w + ((width / 2) - 115)), 340, 10);
    
    // 23
    fill(213,101,137);
    circle((w + ((width / 2) - 115)), 340, 7);

    // 24 border
    fill(247,229,101);
    circle((x + ((width / 2) - 168)), 270, 10);
    
    // 24
    fill(0,0,0);
    circle((x + ((width / 2) - 168)), 270, 7);

    // 25
    fill(214,177,47);
    circle((y + ((width / 2) - 145)), 345, 40);

    // 26
    fill(201,101,75, 200);
    circle((z + ((width / 2) - 125)), 370, 40);

    // 28
    fill(232,47,88);
    circle((aa + ((width / 2) - 155)), 395, 40);

    // 27
    fill(223,112,145, 200);
    circle((bb + ((width / 2) - 135)), 395, 40);

    // 29
    fill(247,229,101, 220);
    circle((cc + ((width / 2) - 175)), 390, 40);

    // 30
    fill(246,149,203);
    circle((dd + ((width / 2) -  210)), 450, 12);

    // 31
    fill(51,164,222);
    circle((ee + ((width / 2) - 185)), 470, 22);

    // 32 border
    fill(247,229,101);
    circle((ff + ((width / 2) - 218)), 485, 11);
    
    // 32
    fill(0,0,0);
    circle((ff + ((width / 2) - 218)), 485, 9);

    // 33
    fill(247,182,52);
    circle((gg + ((width / 2) - 10)), 450, 20);

    // 40
    fill(198,203,222);
    circle((hh + ((width / 2) + 180)), 420, 110);

    // 34
    fill(206,173,128);
    circle((ii + ((width / 2) + 120)), 395, 25);

    // 35 border
    fill(239,218,187);
    circle((jj + ((width / 2) + 145)), 405, 30);
    
    // 35
    fill(133,212,217);
    circle((jj + ((width / 2) + 145)), 405, 20);

    // 36 border
    fill(255,255,255);
    circle((kk + ((width / 2) + 220)), 310, 15);
    
    // 36
    fill(18,76,222);
    circle((kk + ((width / 2) + 220)), 310, 13);

    // 37
    fill(200,35,51);
    circle((ll + ((width / 2) + 185)), 373, 10);

    // 38 border
    fill(255,255,255);
    circle((mm + ((width / 2) + 198)), 375, 10);
    
    // 38
    fill(0,0,0);
    circle((mm + ((width / 2) + 198)), 375, 7);

    // 39
    fill(209,184,83);
    circle((nn + ((width / 2) + 238)), 420, 12);

    // 41
    fill(240,222,18);
    circle((oo + ((width / 2) + 165)), 490, 10);

    // 42
    fill(203,46,75);
    circle((pp + ((width / 2) + 150)), 515, 18);

    // 43
    fill(60,139,182);
    circle((qq + ((width / 2) + 210)), 530, 15);

    a = a + 1.6904;
    b = b + 2.8774;
    c = c + 0.9066;
    d = d + 1.7336;
    e = e + 1.9531;
    f = f + 2.5891;
    g = g + 0.683;
    h = h + 2.5401;
    i = i + 2.9692;
    j = j + 2.3351;
    k = k + 2.6599;
    l = l + 2.3822;
    m = m + 0.5693;
    n = n + 1.5324;
    o = o + 1.8813;
    p = p + 2.9103;
    q = q + 2.646;
    r = r + 2.8952;
    s = s + 1.605;
    t = t + 1.7183;
    u = u + 2.8571;
    v = v + 2.5612;
    w = w + 2.6533;
    x = x + 1.6116;
    y = y + 0.9867;
    z = z + 2.1353;
    aa = aa + 1.3328;
    bb = bb + 1.4741;
    cc = cc + 2.2099;
    dd = dd + 0.6955;
    ee = ee + 1.0368;
    ff = ff + 1.0969;
    gg = gg + 2.2682;
    hh = hh + 2.9753;
    ii = ii + 1.2178;
    jj = jj + 2.0193;
    kk = kk + 0.8454;
    ll = ll + 2.3885;
    mm = mm + 1.9987;
    nn = nn + 1.2519;
    oo = oo + 2.3152;
    pp = pp + 1.2718;
    qq = qq + 0.9325;

    if(a > windowWidth - 500){
        a = -windowWidth + 500;
    }
    if(b < -windowWidth / 2){
        b = windowWidth;
    }
    if(c < -windowWidth / 2){
        c = windowWidth;
    }
    if(d < -windowWidth / 2){
        d = windowWidth;
    }
    if(e < -windowWidth / 2){
        e = windowWidth;
    }
    if(f < -windowWidth / 2){
        f = windowWidth;
    }
    if(g < -windowWidth / 2){
        g = windowWidth;
    }
    if(h < -windowWidth / 2){
        h = windowWidth;
    }
    if(i < -windowWidth / 2){
        i = windowWidth;
    }
    if(j < -windowWidth / 2){
        j = windowWidth;
    }
    if(k < -windowWidth / 2){
        k = windowWidth;
    }
    if(l < -windowWidth / 2){
        l = windowWidth;
    }
    if(m < -windowWidth / 2){
        m = windowWidth;
    }
    if(n < -windowWidth / 2){
        n = windowWidth;
    }
    if(o < -windowWidth / 2){
        o = windowWidth;
    }
    if(p < -windowWidth / 2){
        p = windowWidth;
    }
    if(q < -windowWidth / 2){
        q = windowWidth;
    }
    if(r < -windowWidth / 2){
        r = windowWidth;
    }
    if(s < -windowWidth / 2){
        s = windowWidth;
    }
    if(t < -windowWidth / 2){
        t = windowWidth;
    }
    if(u < -windowWidth / 2){
        u = windowWidth;
    }
    if(v < -windowWidth / 2){
        v = windowWidth;
    }
    if(w < -windowWidth / 2){
        w = windowWidth;
    }
    if(x < -windowWidth / 2){
        x = windowWidth;
    }
    if(y < -windowWidth / 2){
        y = windowWidth;
    }
    if(z < -windowWidth / 2){
        z = windowWidth;
    }
    if(aa < -windowWidth / 2){
        aa = windowWidth;
    }
    if(bb < -windowWidth / 2){
        bb = windowWidth;
    }
    if(cc < -windowWidth / 2){
        cc = windowWidth;
    }
    if(dd < -windowWidth / 2){
        dd = windowWidth;
    }
    if(ee < -windowWidth / 2){
        ee = windowWidth;
    }
    if(ff < -windowWidth / 2){
        ff = windowWidth;
    }
    if(gg < -windowWidth / 2){
        gg = windowWidth;
    }
    if(hh < -windowWidth / 2){
        hh = windowWidth;
    }
    if(ii < -windowWidth / 2){
        ii = windowWidth;
    }
    if(jj < -windowWidth / 2){
        jj = windowWidth;
    }
    if(kk < -windowWidth / 2){
        kk = windowWidth;
    }
    if(ll < -windowWidth / 2){
        ll = windowWidth;
    }
    if(mm < -windowWidth / 2){
        mm = windowWidth;
    }
    if(nn < -windowWidth / 2){
        nn = windowWidth;
    }
    if(oo < -windowWidth / 2){
        oo = windowWidth;
    }
    if(pp < -windowWidth / 2){
        pp = windowWidth;
    }
    if(qq < -windowWidth / 2){
        qq = windowWidth;
    }

    // for(i = 0; i < positions.length; i++){
    //     if (i < -windowWidth / 2){
    //         x = windowWidth;
    //     }
    // }
    // if(x < -windowWidth / 2){
    //     x = windowWidth;
    // }

    text(a,20,20);
}