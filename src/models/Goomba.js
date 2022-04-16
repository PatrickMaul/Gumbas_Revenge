class Goomba {
  width = 32;
  height = 32;
  scale = 1.5;
  sprit = 'goomba';
  bounce = 0.2;

  constructor(phaser) {
    phaser.player = phaser.physics.add
      .sprite(this.width / 2, window.innerHeight - 128 - this.height, this.sprit)
      .setScale(this.scale);
    phaser.player.setBounce(this.bounce);
    phaser.player.setCollideWorldBounds(true);

    phaser.anims.create({
      key: 'left',
      frames: phaser.anims.generateFrameNumbers(this.sprit, { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });

    phaser.anims.create({
      key: 'turn',
      frames: [{ key: this.sprit, frame: 3 }],
      frameRate: 20,
    });

    phaser.anims.create({
      key: 'right',
      frames: phaser.anims.generateFrameNumbers(this.sprit, { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });

    phaser.cursors = phaser.input.keyboard.createCursorKeys();
  }

  cursorsHandler(phaser) {
    if (phaser.cursors.left.isDown) {
      phaser.player.setVelocityX(-160);
      phaser.player.anims.play('left', true);
    } else if (phaser.cursors.right.isDown) {
      phaser.player.setVelocityX(160);
      phaser.player.anims.play('right', true);
    } else {
      phaser.player.setVelocityX(0);
      phaser.player.anims.play('turn');
    }
    // Jump
    if (phaser.cursors.up.isDown || phaser.cursors.space.isDown) {
      phaser.player.setVelocityY(-300);
    }
  }
}

export default Goomba;
