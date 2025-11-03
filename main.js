function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("die.wav");
	setSprites();
	MarioAnimation();
	
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
}

function draw() {
	game()
}










