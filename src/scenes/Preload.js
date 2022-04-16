class Preload extends Phaser.Scene {
  preload() {
    /* Preload required assets */
    this.load.image('background', './src/assets/BG.png');
    this.load.image('platform_center_top', './src/assets/platform_center_top.png');
  }

  create() {
    this.game.scene.start('GameTitle');
  }
}

export default Preload;
