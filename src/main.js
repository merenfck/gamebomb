const game = new Game();
function preload() {
	console.log("I am preload()")
	// preload images
}

function setup() {
	createCanvas(600,600)
	console.log("I am setup")
	//create player
}

function draw() {
	game.drawGrid();
	console.log("i am draw")
	//the game happens here
}