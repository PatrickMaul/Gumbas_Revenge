import Goomba from '../models/Goomba.js';
class BaseLevel extends Phaser.Scene {
  GOOMBA = null;

  preload() {
    // Goomba sprites muss hier geladen werden in der Klasse funktioniert es nicht
    this.load.spritesheet('goomba', './src/assets/goomba.png', { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    console.log('Base Level - Gumbas Revange');

    this.GOOMBA = new Goomba(this);
    this.physics.add.collider(this.player, this.platforms);
  }

  update() {
    this.GOOMBA.cursorsHandler(this);
  }
}

export default BaseLevel;
