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
        image(this.image, 800, 100, 100, 100)
        
        image(this.image, 850, 850, 100, 100)
        image(this.image, 700, 900, 50, 50)
        image(this.image, 750, 900, 50, 50)
        image(this.image, 800, 900, 50, 50)
        image(this.image, 650, 900, 50, 50)
        image(this.image, 650, 850, 50, 50)
        image(this.image, 650, 800, 50, 50)
        image(this.image, 650, 750, 50, 50)
        image(this.image, 700, 750, 50, 50)
        image(this.image, 750, 700, 50, 50)
        image(this.image, 750, 650, 50, 50)
        image(this.image, 750, 750, 50, 50)
        image(this.image, 800, 650, 50, 50)
        image(this.image, 850, 650, 50, 50)
        image(this.image, 900, 650, 50, 50)
        image(this.image, 900, 700, 50, 50)
        image(this.image, 900, 750, 50, 50)
        image(this.image, 900, 800, 50, 50)

        image(this.image, 400, 200, 100, 100)
        image(this.image, 400, 100, 100, 100)
        image(this.image, 400, 50, 50, 50)
        image(this.image, 450, 50, 50, 50)
        
        
    }
    }
    
