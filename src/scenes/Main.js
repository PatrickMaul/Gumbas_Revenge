import Goomba from '../models/Goomba';
import Platform from '../models/Platform';

class Main extends Phaser.Scene {
  create() {
    console.log('Running main scene');

    //Example of including an object
    let platform = new Platform(this);
    let goomba = new Goomba(this);

    platform.addGrasRow(10);

    //  Collide the player with the platforms
    this.physics.add.collider(this.player, this.platforms);
  }

  update() {}
}

export default Main;
