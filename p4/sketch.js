// Classifier Variable
let classifier;
// Model URL 
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/lQNoJ0LEm/';

// Video
let video;
let flippedVideo;
// Variable store the classification category name
let label = "";
let confidence = "";
let x;
let y;
// alarm sound
let alarm;

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  alarm = loadSound('alarm.wav');
}
function setup() {
  createCanvas(400, 400);

  video = createCapture(VIDEO);
  video.size(400, 300);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
  x = width/2;
  y = height/2;
  
  //add intructions in a paragraph tag to the dom of the page*************
  createP("if you touch your face, an alarm will sound");
}

function draw() {
  background(220);
  
  // Draw the video
  image(flippedVideo,0,0);

  // Draw the label
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text(label, width/2, height - 10);
  
  //Draw the confidence score
  //text("// Confidence: "+confidence, width / 2-95, height - 4);
  
  //Update your class names and write some code *********************
  //for what should happen when your different categories are detected


  if(label=="yes"){
    print("yes"); // to console
    }
    if (confidence > 0.8) {
      // warning sound
      if (alarm.isPlaying() == false) {
      alarm.play()
      // warning text
      fill(255, 0, 0);
      textSize(20);
      textAlign(CENTER);
      text("DON'T TOUCH YOUR FACE", width/2, height/2);
    }
  }
}


function classifyVideo() {
  //load the video into the ml5.flipImage function to flip it!
  flippedVideo = ml5.flipImage(video)
  //then classify the frame in flippedVideo. Once its done run the function gotResult.
  classifier.classify(flippedVideo, gotResults);
}


function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  print(results[0]);
  label = results[0].label;
  confidence = results[0].confidence;
  // Call classifiy again
  classifyVideo();
}








