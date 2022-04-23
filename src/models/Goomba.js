class Goomba {
  // Fix settings
  FRAME_WIDTH = 32;
  FRAME_HEIGHT = 32;
  SPAWN_X = null;
  SPAWN_Y = null;
  SPRITE_KEY = "goomba";
  SPRITE_PATH = "./src/assets/goomba.png";
  BOUNCE = 0.2;
  COLLIDE_WITH_WORLD = true;
  // Other
  SCALE = 1.5;
  SPRITE = null;

  constructor(scene, config = {}) {
    // Set config
    // // Settings
    this.FRAME_WIDTH = config.FRAME_WIDTH || this.FRAME_WIDTH;
    this.FRAME_HEIGHT = config.FRAME_HEIGHT || this.FRAME_HEIGHT;
    this.SPAWN_X = this.FRAME_WIDTH / 2 + config.SPAWN_X || this.FRAME_WIDTH / 2;
    this.SPAWN_Y = window.innerHeight - config.SPAWN_Y || window.innerHeight;
    this.SPRITE_KEY = config.SPRITE_KEY || this.SPRITE_KEY;
    this.SPRITE_PATH = config.SPRITE_PATH || this.SPRITE_PATH;
    this.BOUNCE = config.BOUNCE || this.BOUNCE;
    this.COLLIDE_WITH_WORLD = config.COLLIDE_WITH_WORLD || this.COLLIDE_WITH_WORLD;
    // // Other
    this.SCALE = config.SCALE || this.SCALE;
    this.SPRITE = config.SPRITE || this.SPRITE;

    // Create Goomba
    this.create(scene);
  }

  create(scene) {
    scene.player = scene.physics.add.sprite(this.SPAWN_X, this.SPAWN_Y, this.SPRITE_KEY).setScale(this.SCALE);
    scene.player.setBounce(this.BOUNCE);
    scene.player.setCollideWorldBounds(this.COLLIDE_WITH_WORLD);

    scene.anims.create({
      key: "left",
      frames: scene.anims.generateFrameNumbers(this.SPRITE_KEY, { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: "turn",
      frames: [{ key: this.SPRITE_KEY, frame: 3 }],
      frameRate: 20,
    });

    scene.anims.create({
      key: "right",
      frames: scene.anims.generateFrameNumbers(this.SPRITE_KEY, { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });

    scene.cursors = scene.input.keyboard.createCursorKeys();
  }

  cursorsHandler(scene) {
    if (scene.cursors.left.isDown) {
      scene.player.setVelocityX(-160);
      scene.player.anims.play("left", true);
      this.moveBackround(scene, 0);
    } else if (scene.cursors.right.isDown) {
      scene.player.setVelocityX(160);
      scene.player.anims.play("right", true);
      this.moveBackround(scene, 1);
    } else {
      scene.player.setVelocityX(0);
      scene.player.anims.play("turn");
    }
    // Jump
    if ((scene.cursors.up.isDown || scene.cursors.space.isDown) && scene.player.body.touching.down) {
      scene.player.setVelocityY(-400);
    }
  }
  moveBackround(scene, option) {
    if (option === 0) {
      scene.mountainsBack.tilePositionX -= 0.05;
      scene.mountainsMid1.tilePositionX -= 0.3;
      scene.mountainsMid2.tilePositionX -= 0.75;
    } else if (option === 1) {
      scene.mountainsBack.tilePositionX += 0.05;
      scene.mountainsMid1.tilePositionX += 0.3;
      scene.mountainsMid2.tilePositionX += 0.75;
    } else return;
  }
}

export default Goomba;
