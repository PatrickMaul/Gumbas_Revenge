import Goomba from '../models/Goomba';
import Platform from '../models/Platform';

class Main extends Phaser.Scene {
  ground = null;
  goomba = null;

  create() {
    console.log('Running main scene');

    this.mountainsBack = this.add.tileSprite(0, window.innerHeight - 200, 2048, 894, 'mountains-back');
    this.mountainsMid2 = this.add.tileSprite(0, window.innerHeight - 200, 2048, 482, 'mountains-mid2');
    this.mountainsMid1 = this.add.tileSprite(0, window.innerHeight - 200, 2048, 770, 'mountains-mid1');
    this.cloudsWhiteSmall = this.add.tileSprite(640, 200, 1280, 400, 'clouds-small');
    this.cloudsWhite = this.add.tileSprite(640, 200, 1280, 400, 'clouds');

    //Example of including an object
    this.ground = new Platform(this);
    this.goomba = new Goomba(this);

    //  Collide the player with the platforms
    this.physics.add.collider(this.player, this.platforms);
    this.ground.addGrasRow(this, 10);
    this.ground.addGras(this);
  }

  update() {
    this.goomba.cursorsHandler(this);

    this.cloudsWhite.tilePositionX += 0.5;
    this.cloudsWhiteSmall.tilePositionX += 0.25;

    if (this.player.body.touching.right) {
      console.log('End');
      this.game.scene.start('GameOver');
    }
  }
}

export default Main;
