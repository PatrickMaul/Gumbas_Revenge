class Preload extends Phaser.Scene {
  preload() {
    /* Preload required assets */
    this.load.image('gras', './src/assets/gras.png');

    this.load.image('clouds', './src/assets/clouds-big.png');
    this.load.image('clouds-small', './src/assets/clouds-small.png');
    this.load.image('mountains-back', './src/assets/mountains-back.png');
    this.load.image('mountains-mid1', './src/assets/mountains-mid1.png');
    this.load.image('mountains-mid2', './src/assets/mountains-mid2.png');

    this.load.spritesheet('goomba', './src/assets/goomba.png', { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.game.scene.start('GameTitle');
  }
}

export default Preload;
