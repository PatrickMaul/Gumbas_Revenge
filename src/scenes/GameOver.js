class GameOver extends Phaser.Scene {
  create() {}

  restartGame() {
    this.game.scene.start('Main');
  }
}

export default GameOver;
