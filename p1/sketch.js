let skycol; // color of sky
let bcol; // color of building
let scale; // size of building

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // sky = gradient... first color depends on mouseX position
  noStroke();
  sky();
  // when mouse is pressed, don't change the background anymore
  // so that it doesn't cover the buildings
  if (mouseIsPressed) {
    noLoop();
  }
  // buildings = rectangles... called when mouse pressed
  
}


function sky() {
  skycol = color(mouseX, 100, 200);
  for (let y = 0; y < 400; y += 10) {
    let fillcol = lerpColor(skycol, color('green'), y/500);
    fill(fillcol);
    rect(0, y, 400, 200);
  }
}

function buildings(x,y,sz) {
  // rectangles = buildings (x,y) 
  let bcol = color(random(100,200),
                   random(100,200),random(100,200));
  stroke(0);
  fill(bcol);
  rect(x, y, sz, 20*sz);
  for (let row = x + sz/10; row < x + sz - 5; row = row + 20) {
    for (let col = y + 10; col < 20*sz; col = col+20) {
      noStroke();
      fill(255, 255, 204);
      rect(row, col, 5, 5);
    }
  }
}

function mousePressed() {
  // each time mouse pressed, draw building (but random)
  scale = random(50,100);  
  buildings(random(width), random(100,height), scale);
  
}

