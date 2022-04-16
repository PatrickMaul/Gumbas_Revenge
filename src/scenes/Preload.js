class Preload extends Phaser.Scene {
  preload() {
    /* Preload required assets */
    this.load.image('background', './src/assets/BG.png');
    this.load.image('gras', './src/assets/gras.png');

    this.load.spritesheet('goomba', './src/assets/goomba.png', { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.game.scene.start('GameTitle');
  }
}

export default Preload;
