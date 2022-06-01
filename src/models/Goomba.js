class Goomba {
  spawnX = null;
  spawnY = null;
  spriteKey = "goomba";
  bounce = 0.2;
  collideWithWorldBorders = true;
  scale = 0.5;

  constructor(phaserScene, config = {}) {
    this.spawnX = config.spawnX || 250;
    this.spawnY = config.spawnY || 300;
    this.spriteKey = config.spriteKey || this.spriteKey;
    this.bounce = config.bounce || this.bounce;
    this.collideWithWorldBorders = config.collideWithWorldBorders || this.collideWithWorldBorders;
    this.scale = config.scale || this.scale;

    // Create Goomba
    this.create(phaserScene);
  }

  create(phaserScene) {
    phaserScene.player = phaserScene.physics.add.sprite(this.spawnX, this.spawnY, this.spriteKey).setScale(this.scale);
    phaserScene.player.setBounce(this.bounce);
    phaserScene.player.setCollideWorldBounds(this.collideWithWorldBorders);

    phaserScene.anims.create({
      key: "left",
      frames: phaserScene.anims.generateFrameNumbers(this.spriteKey, { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });

    phaserScene.anims.create({
      key: "turn",
      frames: [{ key: this.spriteKey, frame: 3 }],
      frameRate: 20,
    });

    phaserScene.anims.create({
      key: "right",
      frames: phaserScene.anims.generateFrameNumbers(this.spriteKey, { start: 4, end: 6 }),
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
