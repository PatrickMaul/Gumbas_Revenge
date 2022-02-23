import { setPlatform, spawnPlatformRow } from './js/func.js';

export class Menu extends Phaser.Scene {
  constructor() {
    var platforms;
    var player;
    var cursor;
    super({ key: 'Menu' });
  }

  preload() {
    this.load.image('background', './src/assets/BG.png');
    this.load.image('platform_center_top', './src/assets/Tiles/Tile (2).png');
    this.load.image('platform_center_center', './src/assets/Tiles/Tile (5).png');
    this.load.spritesheet('gumba', './src/assets/Gumba_2.png', { frameWidth: 32, frameHeight: 32 });

    // this.load.image('ground', './src/assets/platform.png');
  }

  create() {
    const defaultScale = 1;
    const offsetX = 64 * defaultScale;
    const offsetY = window.innerHeight - 64;

    const platformCount = 16;

    // Creating background
    this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'background');

    // Creating Ground
    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(64, 64, 'platform_center_center').setScale(0.4);
    spawnPlatformRow({ x: 200, y: 200, amount: 5, scale: 0.5, t: this });
    // for (let i = 0; i <= platformCount; i++) {
    //   setPlatform(this, 192, i);
    // }
    // for (let i = 0; i <= platformCount; i++) {
    //   this.platforms.create(offsetX * i, offsetY * 2, 'platform_center_center').setScale(defaultScale);
    // }
    // for (let i = 0; i <= platformCount; i++) {
    //   this.platforms.create(yZero + 2 * i * yZero, xZero + 4 * yZero, 'platform_center_center').setScale(defaultScale);
    // }
    // for (let i = 0; i <= platformCount; i++) {
    //   this.platforms.create(yZero + 2 * i * yZero, xZero + 6 * yZero, 'platform_center_center').setScale(defaultScale);
    // }

    // Creating Player
    this.player = this.physics.add.sprite(100, 400, 'gumba').setScale(defaultScale + 0.5);

    // // Player settings
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('gumba', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'gumba', frame: 3 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('gumba', { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    //  Collide the player with the platforms
    this.physics.add.collider(this.player, this.platforms);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    // Jump
    if (this.cursors.up.isDown && this.player.body.touching.down && !this.player.body.touching.up) {
      this.player.setVelocityY(-500);
    }
  }
}
