class Background {
  constructor(scene, paths) {
    this.PATHS = [...paths];

    this.PATHS.forEach((path) => {
      scene.load.image(path.tileKey, path.path);
    });
  }

  create(scene) {
    this.PATHS.forEach((path) => {
      scene[path.key] = scene.add.tileSprite(
        scene.cameras.main.width / 2,
        scene.cameras.main.height - path.height - 128,
        scene.cameras.main.width,
        path.height,
        path.tileKey
      );

      scene[path.key].setScale(2.5);
    });
  }
}

export default Background;
