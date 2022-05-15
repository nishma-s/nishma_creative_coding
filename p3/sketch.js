let timer1; // for background color
let timer2;
let birdtimer; // for birds
// for sound of birds
let birdSound;
// for birds
let birds = [];
let numBirds = 5;
let x = 0; // x pos for bird formation
let mountain; // for landscape

function preload() {
  // bird gif:
  for (let i = 0; i < numBirds; i++) {
    birds[i] = loadImage("birdgif.gif");
  }
  // mountain
  mountain = loadImage("greenmount.png");
  // bird sound
  birdSound = loadSound("birdsounds.wav");
}
function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  let h = hour();
  let sky;
  // BACKGROUND COLOR:
  if (h <= 4) { // 12am-4am PEAK DARK
    sky = color(0, 107, 179);
  } 
  else if (h <= 7) { //5am-7am
    sky = color(0, 153, 255);
  } 
  else if (h <= 11) { // 8am-11am
    sky = color(77, 184, 255);
  } 
  else if (h <= 15) { // 12pm-3pm PEAK LIGHT
    sky = color(153, 214, 255);
  } 
  else if (h <= 18) { // 4pm-6pm
    sky = color(77, 184, 255);
  } 
  else if (h <= 21) { // 7pm-9pm
    sky = color(0, 153, 255);
  } 
  else if (h <= 23) { // 10pm-11pm PEAK DARK
    sky = color(0, 107, 179);
  }
  // gradient for sky:
  noStroke();
  for (let y = 0; y < 400; y += 10) {
    let fillcol = lerpColor(sky, color(0, 107, 179), y / 400);
    fill(fillcol);
    rect(0, y, 400, 200);
  }

  // SUN AND MOON:
  if (h <= 5) { // 12am-5am MOON
    // moon...CODE FROM P5JS - "TRANSLATION"
    push();
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(hour() / 6, -160));
    noStroke();
    fill(200);
    ellipse(0, 0, 100, 100);
    pop();
  } 
  else if (h <= 18) { // 6am-6pm SUN
    console.log("sun", x);
    //sun.. CODE FROM P5JS - "TRANSLATION"
    push();
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(hour() / 6, -160));
    noStroke();
    fill(255, 255, 0);
    ellipse(0, 0, 100, 100);
    // BIRDS:
    translate(-width/2, 0);
    scale(0.3);
    bird_func();
    pop();
  } 
  else if (h <= 23) { // 7pm-11pm MOON
    // moon...CODE FROM P5JS - "TRANSLATION"
    push();
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(hour() / 6, -160));
    noStroke();
    fill(200);
    ellipse(0, 0, 100, 100);
    pop();
  }

  //LANDSCAPE:
  scale(0.4);
  image(mountain, width / 3, height * 2.1);
}

// birds
function bird_func() {
  // for the birds
  if (!birdSound.isPlaying()){
    birdSound.play();
  }
  for (let i = 0; i < numBirds; i++) {
    push();
    scale(0.3);
    if (i == 0) {
      x += 0;
    } else if (i == 1) {
      x += 200;
    } else if (i == 2) {
      x += 200;
    } else if (i == 3) {
      x -= 200;
    } else {
      x -= 200;
    }
    image(birds[i], x, 200 * i);
    pop();
  }
  x += 0.5; // to move birds
}
