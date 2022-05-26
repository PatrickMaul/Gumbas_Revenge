class Coin {
  // Fix settings
  FRAME_WIDTH = 16;
  FRAME_HEIGHT = 16;
  // Changeabel only once (config)
  AMOUNT = 100;
  SPRITE_KEY = "coin";
  SPRITE_PATH = "./src/assets/coin.png";
  //
  sprite = null;
  counter = 0;

  constructor(config = {}) {
    // Load config
    this.AMOUNT = config.AMOUNT || this.AMOUNT;
    this.SPRITE_KEY = config.SPRITE_KEY || this.SPRITE_KEY;
    this.SPRITE_PATH = config.SPRITE_PATH || this.SPRITE_PATH;
  }

  /**
   * Add the spritesheet animation.
   *
   * Iterate througth the coins array (phaserScene). Each coin get the animation 'rotation'. Animation autoplays.
   * @param {Phaser.Scene} phaserScene: Phaser 3 scene object
   */
  create(phaserScene) {
    this.phaserScene = phaserScene;

    phaserScene.coins = phaserScene.physics.add.group();

    const coins = phaserScene.levelMap.getObjectLayer("COIN");

    if (coins) {
      coins.objects.forEach((coin) => {
        let c = phaserScene.physics.add.sprite(coin.x, coin.y, "coin");
        phaserScene.coins.children.entries.push(c);
      });
    }

    this.addPhysics(phaserScene);
    this.addRotation(phaserScene);

    this.drawCounter(phaserScene);
  }

  /**
   * Add the spritesheet animation.
   *
   * Iterate througth the coins array (phaserScene). Each coin get the animation 'rotation'. Animation autoplays.
   * @param {Phaser.Scene} phaserScene: Phaser 3 scene object
   */
  addRotation(phaserScene) {
    let coins = phaserScene.coins.children.getArray();

    // Create animation
    coins.forEach((child) => {
      phaserScene.anims.create({
        key: "rotation",
        frames: phaserScene.anims.generateFrameNumbers("coin", { start: 0, end: 5 }),
        frameRate: 6,
        repeat: -1,
      });
      // Start animation
      child.anims.play("rotation", true);
    });
  }

  /**
   * Adding phaysical propertys.
   *
   * Iterate througth the coins array (phaserScene). Each coin get the animation 'rotation'. Animation autoplays.
   * @param {Phaser.Scene} phaserScene: Phaser 3 scene object
   */
  addPhysics(phaserScene) {
    Object.keys(phaserScene)
      .filter((key) => key.includes("LM_C"))
      .forEach((key) => {
        phaserScene.physics.add.collider(phaserScene.coins, phaserScene[key]);
      });

    phaserScene.physics.add.overlap(
      phaserScene.player,
      phaserScene.coins,
      (player, coin) => this.collectCoin(player, coin, this),
      null,
      phaserScene
    );
  }

  /**
   *
   * @param {*} player
   * @param {*} coin
   * @param {*} _class
   */
  collectCoin(player, coin, _class) {
    coin.disableBody(true, true);
    _class.counter++;
    player.scene.COIN_COUNTER.text = _class.counter;
  }

  /**
   * Add the spritesheet animation.
   *
   * Iterate througth the coins array (phaserScene). Each coin get the animation 'rotation'. Animation autoplays.
   * @param {Phaser.Scene} phaserScene: Phaser 3 scene object
   */
  drawCounter(phaserScene) {
    phaserScene.COIN_COUNTER = phaserScene.make.text({
      x: 270,
      y: 150,
      text: `${this.counter}`,
      style: {
        font: "48px monospace",
        fill: "#ffffff",
      },
    });
  }
}

export default Coin;
