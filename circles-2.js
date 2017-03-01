var sizes = [40, 70, 90, 30, 60, 80, 10];

function setup() {
  createCanvas(1000, 600);

  noStroke();

  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
		fill(255, 45, 45);
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
		fill(100, 120, 255);
		ellipse(10+i*300, height/2, sizes[i], sizes[i]);
  }
}
