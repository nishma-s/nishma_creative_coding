// REFERENCES

// p5.clickable library --> https://github.com/Lartu/p5.clickable/blob/master/example/sketch.js

// sound --> https://p5js.org/examples/sound-load-and-play-sound.html?msclkid=938fff18cef411ec999dc7a967e296b7

// input --> https://p5js.org/reference/#/p5/createInput

// checklist --> https://p5js.org/reference/#/p5/createCheckbox


// font --> https://www.1001fonts.com/neat-fonts.html

// clock --> https://www.geeksforgeeks.org/how-to-make-digital-clock-in-p5-js/?msclkid=8d11d890cf1811ec8e5ffb95b88883c8




let backgrounds = [];  // array of backgrounds
let num_bg = 9;
let bg_item = 0;
let bg_button;


let music = [];  // array of music choices
let music0;
let msuic1;
let music2;
let music3;
let music4;
let num_music = 9;
let song_item = 0;
let music_button;


let noises = [];  // array of noise choices
let num_noise = 7;
let noise_item = 0;
let noise_button;


let pets = []; // array of pets
let num_pets = 4;
let pet_item = 0;
let pet_button;



let checkbox;
let checkboxes = [];
let num_boxes = 10;  // max # of things


let myfont;
let myfont2;






function preload() {
  
  myfont = loadFont('font1.ttf');
  myfont2 =loadFont('font2.ttf');
 
  // load in the backgrounds
  for (let i = 0; i < num_bg; i++) {
    backgrounds[i] = loadImage('backgrounds/bg'+i+'.jpg');
  }
  
  // load pets
  for (let j = 0; j < num_pets; j++) {
    pets[j] = loadImage('pets/pet'+j+'.png');
  }
  

  
  // load in musics
  // for (let j = 0; j < num_music; j++) {
  //   music[j] = loadSound("music/music"+j+".mp3")
  // }
  music0 = loadSound('music/music0.mp3');
  music1 = loadSound('music/music1.mp3');
  music2 = loadSound('music/music2.mp3');
  music3 = loadSound('music/music3.mp3');
  music4 = loadSound('music/music4.mp3');
  music5 = loadSound('music/music5.mp3');
  music6 = loadSound('music/music6.mp3');
  music7 = loadSound('music/music7.mp3');
  music8 = loadSound('music/music8.mp3');
  music.push(music0, music1, music2, music3, music4, 
             music5, music6, music7, music8);
  
  // load in noises
  // for (let i = 0; i < num_noise; i++) {
  //   noises[i] = loadSound('noises/noise'+i+'.mp3');
  // }
  noise0 = loadSound('noises/noise0.mp3');
  noise1 = loadSound('noises/noise1.mp3');
  noise2 = loadSound('noises/noise2.mp3');
  noise3 = loadSound('noises/noise3.mp3');
  noise4 = loadSound('noises/noise4.mp3');
  noise5 = loadSound('noises/noise5.mp3');
  noise6 = loadSound('noises/noise6.mp3');
  noises.push(noise0, noise1, noise2, noise3, noise4, noise5, noise6)
}

function setup() {
  createCanvas(800, 600);

  // load in the music choices.... UNDEFINED ERROR?
  // for (let i = 0; i < num_music; i++) {
  //   music[i] = loadSound('music/music'+i+'.mp3');
  // }
  
  
  // load in the noise choices.... UNDEFINED ERROR?
  // for (let i = 0; i < num_noise; i++) {
  //   noises[i] = loadSound('noises/noise'+i+'.mp3');
  // }
  
  
  // CALL THE CLICKABLES
  click_bg();
  click_music();
  click_noise();
  click_pet();
  

  // AGENDA CHECKLIST + INPUT
  for (let i = 0; i < num_boxes; i++) {
    checkboxes[i] = createCheckbox("", false);
    checkboxes[i].position(width-200, 50+30*i)
    
    let inp = createInput('');
    inp.position(width-180, 50+30*i);
    inp.size(150,10);
  }
  
  
  // TIMER INPUT
  let inp_time = createInput('');
  inp_time.position(20, height-150);
  inp_time.size(100,20);

  
  
}

function draw() {
  
  image(backgrounds[bg_item], 0, 0, width, height);

  // play music
  if (!music[song_item].isPlaying()) {
    let prev;
    if (song_item == 0) {
      prev = num_music - 1;
    }
    else {
      prev = song_item - 1;
    }
    music[prev].stop();
    music[song_item].play();
  }
  
  // play noises
  if (!noises[noise_item].isPlaying()) {
    let prev;
    if (noise_item == 0) {
      prev = num_noise - 1;
    }
    else {
      prev = noise_item - 1;
    }
    noises[prev].stop();
    noises[noise_item].play();
  }
  
  
  bg_button.draw();
  music_button.draw();
  noise_button.draw();
  pet_button.draw();
  
  // rectangle background for agenda
  stroke(255);
  strokeWeight(4);
  let c = get(width-10, height-10);
  fill(c);
  rect(width-200, 5, 190, 50 + 30*num_boxes)
  
  textSize(30);
  fill("white");
  noStroke();
  textFont(myfont);

  text("Agenda", width - 140, 35);
  

  
  // SHOW TIME IN CLOCK
  strokeWeight(4);
  
  let sec = second();
  let min = minute();
  let hrs = hour();
    
  // Check for AM or PM based on hours & store it in variable mer
  let mer = hrs < 12 ? "AM":"PM";
    
  // Format the time so that leading
  // 0's are added when needed
  // sec = formatting(sec);
  min = formatting(min);
  hrs = formatting(hrs % 12);
  
  
  // Display CLOCK
  rectMode(CENTER);
  stroke(c)
  rect(width/2.2, 50, 200, 70);
  // text
  noStroke();
  fill(c);
  textSize(48);
  textAlign(CENTER, CENTER);
  text(hrs + ":" + min + " " + mer, width/2.2, 50)
  
  
  // timer (to get input...)  ** NOTE: not fully implemented (just prototype)
  push();
  fill("white");
  rect(73, height-180, 120, 120);
  // stroke("white");
  strokeWeight(3);
  fill(c);
  textSize(20);
  text("enter alarm\nin format\nHH:MM:SS", 70, height-200);
  pop();
  
  
  
  // SERENITY CENTER display title...
  textSize(70);
  textFont(myfont2);
  fill(get(width/2, height/2))
  text("serenity center", 200, height-50)
}


// formatting function to pad (0s) .. for CLOCK
function formatting(num){
  if(int(num) < 10) {
      return "0" + num;
  }
  return num;
}

// ----------- BUTTONS/CLICKABLES --------------------------


// BACKGROUND CHANGE
function click_bg() {
  bg_button = new Clickable();  // create button
  bg_button.locate(10, 10);  // position of button
  bg_button.resize(100,50);
  bg_button.text = "";
  
  // default button condition:
  bg_button.onOutside = function () {
    let c = get(width-10, height-10);
    this.color = c;
    this.stroke = "#ffffff";
    this.text = "Change\nBackground";
    this.textColor = "white";
    this.textSize = 18;
    this.textFont = myfont;
  }
  // When the clickable is pressed, change to next background in array
  bg_button.onPress  = function () {
    if (bg_item + 1 < num_bg) {
      bg_item += 1;
    }
    else {
      bg_item = 0;
    }
  }
}


// MUSIC CHANGE
function click_music() {
  music_button = new Clickable();  // create button
  music_button.locate(10, 100);  // position of button
  music_button.resize(100,50);
  music_button.text = "";
  
  // default button condition:
  music_button.onOutside = function () {
    let c = get(width-10, height-10);
    this.color = c;
    this.stroke = "#ffffff";
    this.text = "Change\nSong";
    this.textColor = "white";
    this.textSize = 20;
    this.textFont = myfont;
  }
  // When the clickable is pressed, change to next song in array
  music_button.onPress  = function () {
    if (song_item + 1 < num_music) {
      song_item += 1;
    }
    else {
      song_item = 0;
    }
  }
}


// NOISE CHANGE
function click_noise() {
  noise_button = new Clickable();  // create button
  noise_button.locate(10, 190);  // position of button
  noise_button.resize(100,50);
  noise_button.text = "";
  
  // default button condition:
  noise_button.onOutside = function () {
    let c = get(width-10, height-10);
    this.color = c;
    this.stroke = "#ffffff";
    this.text = "Change\nNoise";
    this.textColor = "white";
    this.textSize = 20;
    this.textFont = myfont;
  }
  // When the clickable is pressed, change to next noise in array
  noise_button.onPress  = function () {
    if (noise_item + 1 < num_noise) {
      noise_item += 1;
    }
    else {
      noise_item = 0;
    }
  }
}


// PET CHANGE
function click_pet() {
  pet_button = new Clickable();  // create button
  pet_button.image = pets[pet_item];
  pet_button.imageScale = 0.6
  pet_button.locate(width-150, height-120);  // position of button
  pet_button.resize(100,100);
  pet_button.text = "";
  pet_button.color = "white";
  pet_button.stroke = "white";
  pet_button.cornerRadius = 50;


  pet_button.onHover = function () { // if hovering on pet, grow
    pet_button.imageScale = 1.5;
  }
  pet_button.onOutside = function () { // default condition
    pet_button.imageScale = 0.6;
  }
  
  pet_button.onPress  = function () { // if pressed, change
    if (pet_item + 1 < num_pets) {
      pet_item += 1;
    }
    else {
      pet_item = 0;
    }
    pet_button.image = pets[pet_item]; // display new
    
  }
}


