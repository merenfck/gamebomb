class Treasure {
    constructor (col, row) {
        this.col = col;
        this.row = row;
        this.image;
        this.goUp=true
    }
    preloadTreasure() {
        this.image = loadImage("assets/treasure.png")
    }

    setRandomPosition() {
        // this.col = Math.floor(Math.random() * 1000);
        // this.row = Math.floor(Math.random() * 1000)
        let numberCol = Math.floor(Math.random() * 1000);
        let numberRow = Math.floor(Math.random() * 1000)
        for (let i = 0; i < 100; i++) {
            if(numberCol % 100 !== 0) {
                numberCol--
            } else {
                this.col = numberCol;
            }
            if(numberRow % 100 !== 0) {
                numberRow--
            } else {
                this.row = numberRow;
            }
        }

    }
    moveUp() {
        this.row -= 100;
    }

    moveDown() {
        this.row += 100;
    }

    moveLeft() {
        this.col -= 100;
    }

    moveRight() {
        this.col += 100;
    }

    drawTreasure() {
        if(frameCount%120==0){
            if(this.row<=0){
                this.goUp=false
            }
            if(this.row>=height){
                this.goUp=true
            }
           if(this.goUp){
               this.moveUp()
           }
           else{
               this.moveDown()
           }
        }
        image(this.image, this.col, this.row, 100, 100)
        image(this.image, this.col, this.row, 100, 100)
    }
} 
