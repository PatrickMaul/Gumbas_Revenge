import Platform from '../models/Platform';

class Main extends Phaser.Scene {
  create() {
    console.log('Running main scene');

    //Example of including an object
    let platform = new Platform(this);

    platform.addPlatfrom();
  }

  update() {}
}

export default Main;
