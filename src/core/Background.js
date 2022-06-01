class Background {
  backgroundImagePaths = [
    {
      key: "woodBg",
      tileKey: "wood-bg",
      path: "./src/assets/backgrounds/deamon_woods/wood-bg.png",
      width: 706,
      height: 448,
      scroolingSpeed: 0,
    },
    {
      key: "woodFar",
      tileKey: "wood-far",
      path: "./src/assets/backgrounds/deamon_woods/wood-far.png",
      width: 871,
      height: 448,
      scroolingSpeed: 0.01,
    },
    {
      key: "woodMid",
      tileKey: "wood-mid",
      path: "./src/assets/backgrounds/deamon_woods/wood-mid.png",
      width: 871,
      height: 448,
      scroolingSpeed: 0.04,
    },
    {
      key: "woodClose",
      tileKey: "wood-close",
      path: "./src/assets/backgrounds/deamon_woods/wood-close.png",
      width: 871,
      height: 448,
      scroolingSpeed: 0.1,
    },
  ];

  constructor(phaserScene) {
    this.backgroundImagePaths.forEach((path) => {
      phaserScene.load.image(path.tileKey, path.path);
    });
  }

  create(phaserScene) {
    this.backgroundImagePaths.forEach((path) => {
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

  parallaxEffect(phaserScene) {
    this.backgroundImagePaths.forEach((path) => {
      if (phaserScene.cursors.left.isDown) {
        phaserScene[path.key].x += path.scroolingSpeed;
      } else if (phaserScene.cursors.right.isDown) {
        phaserScene[path.key].x -= path.scroolingSpeed;
      }
    });
  }
}

export default Background;
