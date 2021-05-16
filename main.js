function preload() {
	video = createVideo('video.mp4');
	video.hide();
	// video.size();
}

function setup() {
	canvas = createCanvas(480, 380);
	canvas.center();
}

function draw() {
	image(video, 0, 0, 480, 380);
}

function detect() {
	object_detector = ml5.objectDetector('cocossd', modelLoaded);
	document.getElementById('status').innerHTML = "Status: Scouting for Objects";
}

function modelLoaded() {
	console.log('Cocossd Model Has Loaded!');

	video.loop();
	video.speed(1);
	video.volume(0);
}