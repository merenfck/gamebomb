const game = new Game();


 function preload() {
   game.preloadGame();
 }

 function setup() {
   let canvas = createCanvas(WIDTH, HEIGHT);
   canvas.parent("canvas");
   game.setupGame()
   game.setupWall()
   game.setupdWall()
   game.setupBomb()
 }

 function draw() {
  clear()

   game.drawGrid();
   game.drawGame();
 }

 function keyPressed() {
   clear()
   if (keyCode === 38) {
     game.player.moveUp();
   }
   if (keyCode === 40) {
     game.player.moveDown();
   }
   if (keyCode === 37) {
     game.player.moveLeft();
   }

   if (keyCode === 39) {
     game.player.moveRight();
   }
   if(keyCode === 32){
     console.log("hello")
     game.bomb.throwBomb();
   }
   if(keyCode === 93) {
    console.log("hello")
     game.bomb.throwBombr();
   }
   if(keyCode === 91)  {
     game.bomb.throwBombl();
   }
   if(keyCode === 66) {
     game.bomb.throwBombup()
   }
 }
