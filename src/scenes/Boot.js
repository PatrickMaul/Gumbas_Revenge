class Boot extends Phaser.Scene {
  preload() {}

  create() {
    this.game.scene.start('Preload');
  }
}

export default Boot;
