class Bomb {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.image;
        this.attached=true
    }
    preloadBomb() {
        this.image = loadImage("assets/bomb.png")
    }

    setupBomb() {
    }

    throwBomb() {
     this.attached = false
        this.row += 300;
    }

    throwBombr() {
        this.attached = false
        this.col += 300;
    }

    throwBombl() {
        this.attached = false
        this.col -= 300;
    }
    
    throwBombup() {
        this.attached = false
        this.row -= 300;
    }

    drawBomb() {
        console.log("what is col?", this.col)
        if(this.attached){
            this.col=game.player.col
            this.row=game.player.row
        }

       

        image(this.image, this.col, this.row, 50, 50)
    }


} 
