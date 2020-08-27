class Enemy {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.image;
    }
    preloadEnemy() {loadImage("assets/enemy.png")
}

setupPlayer() {

}

moveUp() {
    this.row -=100;
}

moveDown() {
    this.row +=100;
}
}