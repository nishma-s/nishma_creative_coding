// Modification of Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A

// speech audios from: https://freetts.com/#ads
// to make gifs transparent: https://onlinegiftools.com/create-transparent-gif

// Storing the label
let label = "waiting...";
let confidence = "";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/hB6GAtbxD/';

// for background
let bground;

// for sounds + gifs
let car;
let car_gif;
let cat;
let cat_gif
let coffee;
let coffee_gif;
let dog;
let dog_gif;
let flower;
let flower_gif;
let good;
let goodbye;
let hello;
let how;
let no;
let sun;
let sun_gif;
let sushi;
let sushi_gif;
let train;
let train_gif;
let unicorn;
let unicorn_gif;
let yes;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
  // background pic
  bground = loadImage('background.png');
  // speech + gifs
  car = loadSound('sounds/car.mp3');
  car_gif = loadImage('gifs/car.gif');
  cat = loadSound('sounds/cat.mp3');
  cat_gif = loadImage('gifs/cat.gif');
  coffee = loadSound('sounds/coffee.mp3');
  coffee_gif = loadImage('gifs/coffee.gif');
  dog = loadSound('sounds/dog.mp3');
  dog_gif = loadImage('gifs/dog.gif');
  flower = loadSound('sounds/flower.mp3');
  flower_gif = loadImage('gifs/flower.gif');
  good = loadSound('sounds/good.mp3');
  goodbye = loadSound('sounds/goodbye.mp3');
  hello = loadSound('sounds/hello.mp3');
  how = loadSound('sounds/how.mp3');
  no = loadSound('sounds/no.mp3');
  sun = loadSound('sounds/sun.mp3');
  sun_gif = loadImage('gifs/sun.gif');
  sushi = loadSound('sounds/sushi.mp3');
  sushi_gif = loadImage('gifs/sushi.gif');
  train = loadSound('sounds/train.mp3');
  train_gif = loadImage('gifs/train.gif');
  unicorn = loadSound('sounds/unicorn.mp3');
  unicorn_gif = loadImage('gifs/unicorn.gif');
  yes = loadSound('sounds/yes.mp3');
}

function setup() {
  createCanvas(640, 520);
  image(bground, 0, 0, 600, 500);

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER);
  
  // black box to put label in:
  push();
  noStroke();
  fill(0);
  rectMode(CENTER);
  rect(width/2, 100, 200, 70)
  noFill();
  pop();
  // show the label
  stroke(255);
  fill(255);
  textSize(17);
  text(label, width/2, 100);
  text(confidence, width/2, 120);
  
  // "Screen"
  push();
  fill(0);
  strokeWeight(10);
  stroke(179, 224, 255);
  rect(width/3, height/3, 200, 200);
  pop();

  //make a variable to contain a message that will show when there is no sound
  let message = "keywords: unicorn, dog, cat, sushi, car, train, coffee, flower, sun \n(ex: i want sushi, show me a dog, ...)";
  //test the label variable as to whether your program is detecting a category. You will need to test for categories you named in your model. The sketch updates the label variable with whatever category is being detected.
  if (label == "Background Noise") {
      print("no noise");
      }
  else if (label == "Hello") {
    // say hi how are you
    if (confidence > 0.5) {
      if (!hello.isPlaying()){
        hello.play();
      }
    }
  }
    
  if (label == "Goodbye") {
    // say see you later... and turn off! like black screen?
    if (confidence > 0.5) {
      if (!goodbye.isPlaying()){
        goodbye.play();
      }
    }
    background(0); // saying goodbye stops it
    noLoop();
  }
  else if (label == "How") {
    // say i'm good, how are you
    if (confidence > 0.5) {
      if (!how.isPlaying()){
        how.play();
      }
    }
  }
  else if (label == "Good") {
    // say ok, cool
    if (confidence > 0.5) {
      if (!good.isPlaying()){
        good.play();
      }
    }
  }
  else if (label == "No") {
    // say sorry
    if (confidence > 0.5) {
      if (!no.isPlaying()){
        no.play();
      }
    }
  }
  else if (label == "Yes") {
    // say ok
    if (confidence > 0.5) {
      if (!yes.isPlaying()){
        yes.play();
      }
    }
  }
  else if (label == "unicorn") {
    // say "here's a magical unicorn for you"
    if (confidence > 0.5) {
      if (!unicorn.isPlaying()){
        unicorn.play();
      }
      // display unicorn gif
      push();
      image(unicorn_gif, width/3, height/3, 200, 200);
      pop();
    }
  }
  else if (label == "dog") {
    // say "cute dog"
    if (confidence > 0.5) {
      if (!dog.isPlaying()){
        dog.play();
      }
      // display dog gif
      push();
      image(dog_gif, width/3, height/3, 200, 200);
      pop();
    }
  }
  else if (label == "cat") {
    // say "fluffy cat"
    if (confidence > 0.5) {
      if (!cat.isPlaying()){
        cat.play();
      }
      // display cat gif
      push();
      image(cat_gif, width/3, height/3, 200, 200);
      pop();
    }
  }
  else if (label == "sushi") {
    // "ooh, i love sushi!"
    if (confidence > 0.5) {
      if (!sushi.isPlaying()){
        sushi.play();
      }
      // display sushi gif
      push();
      image(sushi_gif, width/3, height/3, 200, 200);
      pop();
    }
  }
  else if (label == "car") {
    // "is this the type of car you're looking for?"
    if (confidence > 0.5) {
      if (!car.isPlaying()){
        car.play();
      }
      // display car gif
      push();
      image(car_gif, width/3, height/3, 200, 200);
      pop();
    }
  }
  else if (label == "train") {
    // "here comes the train!"
    if (confidence > 0.5) {
      if (!train.isPlaying()){
        train.play();
      }
      // display train gif
      push();
      image(train_gif, width/3, height/3, 200, 200);
      pop();
    }
  }
  else if (label == "coffee") {
    // "isn't coffee the best?"
    if (confidence > 0.5) {
      if (!coffee.isPlaying()){
        coffee.play();
      }
      // display coffee gif
      push();
      image(coffee_gif, width/3, height/3, 200, 200);
      pop();
    }
  }
  else if (label == "flower") {
    if (confidence > 0.5) {
      if (!flower.isPlaying()){
        flower.play();
      }
      // display flower gif
      push();
      image(flower_gif, width/3, height/3, 200, 200);
      pop();
    }
  }
  else if (label == "sun") {
    // "the sun is out!"
    if (confidence > 0.5) {
      if (!sun.isPlaying()){
        sun.play();
      }
      // display sun gif
      push();
      image(sun_gif, width/3, height/3, 200, 200);
      pop();
    }
  }
  

  //draw message to the screen
  push();
  textSize(17);
  strokeWeight(0.3);
  stroke(255);
  fill(255);
  text(message, width / 2, height - 60);
  pop();
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
  // label = "dog";
  
  // Store the label
  confidence = results[0].confidence;
}
