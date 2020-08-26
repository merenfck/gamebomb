class dWall {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.image;
    }
    preloaddWall() {
        this.image = loadImage("assets/wallunstable.png")
    }
    setupdWall() {

    }

    drawdWall() {
        console.log("what is col?", this.col)
        image(this.image, 800, 800, 100, 100)
        image(this.image, 800, 700, 100, 100)
        image(this.image, 700, 800, 100, 100)
    }
}