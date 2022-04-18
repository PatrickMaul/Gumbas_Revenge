import 'phaser';
import BaseLevel from './scenes/BaseLevel';

class Game extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      backgroundColor: '#000000',
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 500 },
        },
      },
    };

    super(config);

    this.scene.add('BaseLevel', BaseLevel, false);

    this.scene.start('BaseLevel');
  }
}

new Game();
