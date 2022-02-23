import { Menu } from './scenes/index.js';

function main() {
  var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 500 },
      },
    },
    scene: [Menu],
  };

  console.log('Game');
  var game = new Phaser.Game(config);
}

main();
