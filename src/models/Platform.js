class Platform {
  // Config
  width = 128;
  height = 128;
  scale = 1;

  // Tiles
  // Values = Keys from preloade state
  gras = 'gras';

  constructor(phaser) {
    this.platforms = phaser.physics.add.staticGroup();
  }

  addGras() {
    this.platforms.create(this.width / 2, window.innerHeight - this.height / 2, this.gras).setScale(this.scale);
  }

  addGrasRow(border) {
    for (let counter = 0; counter < border; counter++) {
      if (counter === 0) {
        // First tile
        this.platforms.create(this.width / 2, window.innerHeight - this.height / 2, this.gras).setScale(this.scale);
      } else {
        // Following tiles
        this.platforms
          .create(this.width * counter + this.width / 2, window.innerHeight - this.height / 2, this.gras)
          .setScale(this.scale);
      }
    }
  }
}

export default Platform;
