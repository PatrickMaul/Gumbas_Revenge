class Goomba {
  // Config

  constructor(phaser) {
    this.player = phaser.physics.add.sprite(100, 400, 'goomba').setScale(1.5);
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    phaser.anims.create({
      key: 'left',
      frames: phaser.anims.generateFrameNumbers('gumba', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });

    phaser.anims.create({
      key: 'turn',
      frames: [{ key: 'gumba', frame: 3 }],
      frameRate: 20,
    });

    phaser.anims.create({
      key: 'right',
      frames: phaser.anims.generateFrameNumbers('gumba', { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });

    this.cursors = phaser.input.keyboard.createCursorKeys();
  }
}

export default Goomba;
