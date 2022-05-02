class Background {
  PATHS = [
    {
      key: "woodBg",
      tileKey: "wood-bg",
      path: "./src/assets/backgrounds/deamon_woods/wood-bg.png",
      width: 706,
      height: 448,
    },
    {
      key: "woodFar",
      tileKey: "wood-far",
      path: "./src/assets/backgrounds/deamon_woods/wood-far.png",
      width: 871,
      height: 448,
    },
    {
      key: "woodMid",
      tileKey: "wood-mid",
      path: "./src/assets/backgrounds/deamon_woods/wood-mid.png",
      width: 871,
      height: 448,
    },
    {
      key: "woodClose",
      tileKey: "wood-close",
      path: "./src/assets/backgrounds/deamon_woods/wood-close.png",
      width: 871,
      height: 448,
    },
  ];

  constructor(scene) {
    this.PATHS.forEach((path) => {
      scene.load.image(path.tileKey, path.path);
    });
  }

  create(scene) {
    this.PATHS.forEach((path) => {
      scene[path.key] = scene.add.tileSprite(
        scene.cameras.main.width / 2,
        224,
        scene.cameras.main.width,
        path.height,
        path.tileKey
      );

      scene[path.key].setScale(1);
    });
  }
}

export default Background;
