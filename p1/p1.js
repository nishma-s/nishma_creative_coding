//This image is from Annie Albers.
//https://awarewomenartists.com/en/artiste/anni-albers/

let img;

function preload(){
  img = loadImage("p1/albers.jpg");
}

function setup() {
  createCanvas(500, 400);
  rectMode(CENTER);

}

function draw() {
  //image(name, x, y, w, h);
  image(img, 0, 0, 500, 400);
  
  //get() function gets pixel data from the pixel array
  // Use get it with the mouse coordinates
  let col = get(mouseX, mouseY);
  //1) Print out the color value under the mouse
  fill(col);
  rect(mouseX, mouseY, 50,50);

  //2) draw a rectangle that is filled with the color from the pixel that the mouse is hovering over. 



}

function mousePressed(){
    let p = createP(mouseX+','+mouseY);
  //p.style('font-size', '16px');

  p.position(random(0,500), random(450, 550));
}
