class Wall {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.image;
    }
    preloadWall() {
        this.image = loadImage("assets/wallstable.png")
    }
    setupWall() {

    }

    drawWall() {
        console.log("what is col?", this.col)
        image(this.image, this.col, this.row, 100, 100)
        image(this.image, 200, 600, 100, 100)
        image(this.image, 200, 700, 100, 100)
        image(this.image, 400, 700, 100, 100)
        image(this.image, 300, 700, 100, 100)

        image(this.image, 100, 200, 100, 100)
        image(this.image, 100, 300, 100, 100)

        image(this.image, 600, 200, 100, 100)
        image(this.image, 600, 100, 100, 100)
        image(this.image, 700, 100, 100, 100)
        

        image(this.image, 800, 700, 100, 100)
        image(this.image, 800, 800, 100, 100)
        image(this.image, 700, 800, 100, 100)
        
    }
    }
    
