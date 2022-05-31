class Goomba {
  // Fix settings
  FRAME_WIDTH = 32;
  FRAME_HEIGHT = 32;
  SPAWN_X = 60;
  SPAWN_Y = 60;
  SPRITE_KEY = "goomba";
  SPRITE_PATH = "./src/assets/goomba.png";
  BOUNCE = 0.2;
  COLLIDE_WITH_WORLD = true;
  // Other
  SCALE = 0.5;
  SPRITE = null;

  constructor(phaserScene, config = {}) {
    // Set config
    // // Settings
    this.FRAME_WIDTH = config.FRAME_WIDTH || this.FRAME_WIDTH;
    this.FRAME_HEIGHT = config.FRAME_HEIGHT || this.FRAME_HEIGHT;
    this.SPAWN_X = config.SPAWN_X || 250; // Change default
    this.SPAWN_Y = config.SPAWN_Y || 300; // Change default
    this.SPRITE_KEY = config.SPRITE_KEY || this.SPRITE_KEY;
    this.SPRITE_PATH = config.SPRITE_PATH || this.SPRITE_PATH;
    this.BOUNCE = config.BOUNCE || this.BOUNCE;
    this.COLLIDE_WITH_WORLD = config.COLLIDE_WITH_WORLD || this.COLLIDE_WITH_WORLD;
    // // Other
    this.SCALE = config.SCALE || this.SCALE;
    this.SPRITE = config.SPRITE || this.SPRITE;

    // Create Goomba
    this.create(phaserScene);
  }

  create(phaserScene) {
    phaserScene.player = phaserScene.physics.add
      .sprite(this.SPAWN_X, this.SPAWN_Y, this.SPRITE_KEY)
      .setScale(this.SCALE);
    phaserScene.player.setBounce(this.BOUNCE);
    phaserScene.player.setCollideWorldBounds(this.COLLIDE_WITH_WORLD);

    phaserScene.anims.create({
      key: "left",
      frames: phaserScene.anims.generateFrameNumbers(this.SPRITE_KEY, { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });

    phaserScene.anims.create({
      key: "turn",
      frames: [{ key: this.SPRITE_KEY, frame: 3 }],
      frameRate: 20,
    });

    phaserScene.anims.create({
      key: "right",
      frames: phaserScene.anims.generateFrameNumbers(this.SPRITE_KEY, { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });

    phaserScene.cursors = phaserScene.input.keyboard.createCursorKeys();
  }

  cursorsHandler(phaserScene) {
    if (phaserScene.cursors.left.isDown) {
      phaserScene.player.setVelocityX(-170);
      phaserScene.player.anims.play("left", true);
    } else if (phaserScene.cursors.right.isDown) {
      phaserScene.player.setVelocityX(170);
      phaserScene.player.anims.play("right", true);
    } else {
      phaserScene.player.setVelocityX(0);
      phaserScene.player.anims.play("turn");
    }
    // Jump
    if ((phaserScene.cursors.up.isDown || phaserScene.cursors.space.isDown) && phaserScene.player.body.onFloor()) {
      phaserScene.player.setVelocityY(-260); // Gomba exakt 4 Tiles hochspringen
    }
  }
}

export default Goomba;
