let num_img = 8; // to keep track of frames
let frames = []; // An array to store the images
let characterX; // The X location of the character
let characterY; // The Y location of the character
let targetX; // The X goal, from the user's click
let targetY; // The Y goal, from the user's click
let frame = 0; // used to loop through each frame
let s = 1;
let t = 0;

function preload() {
  // 1. UPDATE CODE HERE
  // Example image files are on the site.
  // UNCOMMENT THE CODE BELOW AND ADD A FOR LOOP TO FILL THE ARRAY. Check what your images are called.
  // frames[0] = loadImage("images/"+0+".png");
  for (let i = 0; i < num_img; i++) {
    frames[i] = loadImage("images/" + i + ".png");
  }
  // I recomment using a walk cycle of less than 10 images.
  // else use the nf(); function to pad single digits with zeros.
}

function setup() {
  createCanvas(800, 480);
  imageMode(CENTER);
  frameRate(12);

  // Initialize the character and target positions.
  characterX = width / 2;
  characterY = height / 2;
  targetX = characterX;
  targetY = characterY;
}

//---------------------------------------
function draw() {
  background(222);

  if (frame == num_img) {
    // making sure we don't exceed the # of frames
    frame = 0;
  }

  // 2. PUT CODE HERE TO MOVE THE CHARACTER TOWARDS THE TARGET.
  // ********* THE CODE IS AT THE END OF DRAW!!
  var dx = targetX - characterX;
  var dy = targetY - characterY;
  var distanceFromCharacterToTarget = sqrt(dx * dx + dy * dy);

  // 3. PUT CODE HERE TO DISPLAY THE CHARACTER, CYCLING THROUGH THE FRAMES USING A FOR LOOP.
  // ******** CODE IS BELOW #4:
  // 4. WHEN YOU GET THAT WORKING, FLIP THE IMAGE IF THE CHARACTER'S HEADING LEFT.
  // ONE WAY OF DOING THIS IS BY USING TRANSFORMATIONS

  
  if (targetX < characterX) { // so we're going to the left.. flip
    push();
    scale(-1.0, 1.0); // flip x-axis
    image(frames[frame], -characterX, characterY); // display all frames
    pop();
  }
  else{
    image(frames[frame], characterX, characterY); // display all frames
  }


  // Don't change this:
  // Draw a spot at the target, colored based on the character's proximity.
  drawTargetEllipse(distanceFromCharacterToTarget);
  console.log(distanceFromCharacterToTarget);

  frame++; //increment ind for frames
  if (frame >= 8) {
    frame = 0;
  }
  // to move the person to target (using lerp)
    characterX = lerp(characterX, targetX, 0.08);
  characterY = lerp(characterY, targetY, 0.08); 
}

//=======================================================
// PROBABLY NO REASON TO CHANGE ANYTHING BELOW THIS LINE.

//---------------------------------------
function drawTargetEllipse(distanceFromCharacterToTarget) {
  if (distanceFromCharacterToTarget > 80) {
    fill(0, 200, 0, 40); // Green if we're nearby
  } else {
    fill(255, 0, 0, 40); // Red if we're far away
  }
  noStroke();
  ellipse(targetX, targetY, 160, 160);
}

//---------------------------------------
function mousePressed() {
  targetX = mouseX;
  targetY = mouseY;
}
