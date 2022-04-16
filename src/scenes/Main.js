import Goomba from '../models/Goomba';
import Platform from '../models/Platform';

class Main extends Phaser.Scene {
  ground = null;
  goomba = null;

  create() {
    console.log('Running main scene');

    //Example of including an object
    this.ground = new Platform(this);
    this.goomba = new Goomba(this);

    this.ground.addGrasRow(this, 10);
    //  Collide the player with the platforms
    this.physics.add.collider(this.player, this.platforms);
  }

  update() {
    this.goomba.cursorsHandler(this);
  }
}

export default Main;
