class Coin {
  // Fix settings
  FRAME_WIDTH = 16;
  FRAME_HEIGHT = 16;
  // Changeabel only once (config)
  AMOUNT = 100;
  SPRITE_KEY = "coin";
  SPRITE_PATH = "./src/assets/coin.png";
  // Other
  sprite = null;
  counter = 0;

  constructor(config = {}) {
    // Load config
    this.AMOUNT = config.AMOUNT || this.AMOUNT;
    this.SPRITE_KEY = config.SPRITE_KEY || this.SPRITE_KEY;
    this.SPRITE_PATH = config.SPRITE_PATH || this.SPRITE_PATH;
  }

  /**
   * Creates coins. Coins are spawned where they are placed in the object layer.
   *
   * This function calls two other functions. (addPhysics and drawCounter)
   * @param {Phaser.Scene} phaserScene: Phaser 3 scene object
   */
  create(phaserScene) {
    this.phaserScene = phaserScene;

    phaserScene.coins = phaserScene.physics.add.group();

    const coins = phaserScene.levelMap.getObjectLayer("COIN");

    if (coins) {
      coins.objects.forEach((coinData) => {
        let coin = phaserScene.physics.add.sprite(coinData.x, coinData.y, "coin");

        phaserScene.anims.create({
          key: "rotation",
          frames: phaserScene.anims.generateFrameNumbers("coin", { start: 0, end: 5 }),
          frameRate: 6,
          repeat: -1,
        });
        // Start animation
        coin.anims.play("rotation", true);
        phaserScene.coins.children.entries.push(coin);
      });
    }

    this.addPhysics(phaserScene);
    if (!phaserScene.coinCounter || phaserScene.coinCounter > 0) phaserScene.coinCounter = 0;
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
   * Defines the coin behavior when touching th player
   *
   * @param {AcardeSprite} player: Player => Event
   * @param {AcardeSprite} coin: Coin => Event
   * @param {Coin} _class: this
   */
  collectCoin(player, coin, _class) {
    coin.disableBody(true, true);
    _class.counter++;
  }
}

export default Coin;
