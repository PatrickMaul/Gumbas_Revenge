class BaseLevel extends Phaser.Scene {
  preload() {}

  create() {
    console.log('Base Level - Gumbas Revange');
    this.game.scene.start('Preload');
  }
}

export default BaseLevel;
