function setup() { 
  createCanvas(600, 600);
  background(0);
	stroke(255);
} 

function draw() { 
	noFill();
  ellipseMode();
  
for (var b = 0; b <=800; b +=100){
 ellipse(300, 300, b, b);
}
}
