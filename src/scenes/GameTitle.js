class GameTitle extends Phaser.Scene {
  create() {
    // Start game
    this.startGame();
  }

  startGame() {
    this.game.scene.start('Main');
  }
}

export default GameTitle;
