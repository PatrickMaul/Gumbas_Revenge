import Goomba from '../models/Goomba';
import Platform from '../models/Platform';
class GameOver extends Phaser.Scene {
  ground = null;
  goomba = null;

  create() {
    console.log('Running GameOver scene');
    this.restartGame();
  }

  restartGame() {
    this.game.scene.start('Main');
  }
}

export default GameOver;
