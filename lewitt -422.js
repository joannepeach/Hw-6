var shade = [10,20,45,25,60,205,195,100,180,200,250,100,50,23,15]; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
		function draw() {
append(shade,random(10,50));
}
  
 for (var i = 0; i < shade.length; i += 1) {
	fill(shade[i], 100, 100);
  rect(i*width/shade.length, 0, width/shade.length, height);
	}
}
