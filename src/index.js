import 'phaser';
import Preload from './scenes/Preload';
import Menu from './scenes/menu';

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

    this.scene.add('Preload', Preload, false);
    this.scene.add('Menu', Menu, false);

    this.scene.start('Preload');
  }
}

new Game();
