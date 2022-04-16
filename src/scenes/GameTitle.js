class GameTitle extends Phaser.Scene {
  create() {
    // Background
    this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'background');

    // Start game
    this.startGame();
  }

  startGame() {
    this.game.scene.start('Main');
  }
}

export default GameTitle;
