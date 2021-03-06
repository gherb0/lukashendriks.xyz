let lCursor;
let indexBackGround;
let music;
let gEarth;

function preload() {
    lCursor = loadImage("images/TransparentL.png");
    indexBackGround = loadImage("images/backGroundIndex.jpg");
    music = createAudio('audio/song.mp3');
    gEarth = loadImage("images/tv.jpg");
}


function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);

    imageMode(CORNER);
    image(gEarth, 0, 0, windowWidth, windowHeight);
    music.play();
    music.volume(0.25);
}

function draw() {



    imageMode(CENTER);
    image(lCursor, mouseX, mouseY, 100, 100);
    noCursor();
    textSize(100);

}

function mousePressed() {
    if (music.play()) {
        music.stop();
    } else {
        music.play();
    }
}
