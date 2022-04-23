class Background {
  constructor(phaser, paths) {
    this.PATHS = [...paths];

    this.PATHS.forEach((path) => {
      phaser.load.image(path.tileKey, path.path);
    });
  }

  create(phaser) {
    this.PATHS.forEach((path) => {
      phaser[path.key] = phaser.add.tileSprite(
        phaser.cameras.main.width / 2,
        phaser.cameras.main.height - path.height + 100,
        phaser.cameras.main.width,
        path.height,
        path.tileKey
      );
    });
  }
}

export default Background;
