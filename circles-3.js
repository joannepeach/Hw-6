var sizes = [10, 30, 20, 50, 190, 250, 50, 90];
var allCircles = []
function setup() {
  createCanvas(2000, 500);

	noStroke();
	for (var i = 0; i < sizes.length; i += 1) {
		var circle = {
			x: 20+i*240,
			y: height/2,
			r: sizes[i],
			h: random(0, 360)
		};
append(allCircles, circle); 
	}
}
	
function draw() {
	background(0);
	for (var i = 0; i < allCircles.length; i += 1){
		paint(allCircles[i]);
  }
}
function paint(circle) {
	colorMode(HSB);
	fill(circle.h, 100, 100); 
	ellipse(circle.x, circle.y, circle.r, circle.r); 
}
