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

  constructor(phaserScene) {
    this.PATHS.forEach((path) => {
      phaserScene.load.image(path.tileKey, path.path);
    });
  }

  create(phaserScene) {
    this.PATHS.forEach((path) => {
      phaserScene[path.key] = phaserScene.add.tileSprite(
        phaserScene.cameras.main.width / 2,
        224,
        phaserScene.cameras.main.width,
        path.height,
        path.tileKey
      );

      phaserScene[path.key].setScale(1);
    });
  }
}

export default Background;
