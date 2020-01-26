	var x = 240;
	var y = 0;
	var speed = 0;
	var gravity = 0.1;

function setup() {
	createCanvas(480,270);
	//size(480, 270);
}

function draw() {
	background(255);
	fill(175);
	stroke(0);
	rectMode(CENTER);
	rect(x, y, 10, 10);
	
	y = y + speed;
	speed = speed + gravity;
	if(y > height) {
		speed = speed * -0.95;
		y = height;
	}
}