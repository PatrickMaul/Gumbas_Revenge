import MapCreator from "../core/MapCreator";
import Background from "../core/Background";
import Goomba from "../models/Goomba";

class GameOver extends Phaser.Scene {
  goomba = null;

  preload() {
    this.background = new Background(this);
    MapCreator.preload(this, { MAP_KEY: "Game_Over" });
  }

  create() {
    Timer.start();
    this.background.create(this);
    MapCreator.loadLevel(this);
    this.goomba = new Goomba(this);
    MapCreator.addPhysics(this);
    MapCreator.createCamera(this);

    const gameOverText = this.make.text({
      x: 500,
      y: 200,
      text: "Game Over",
      style: {
        font: "48px monospace",
        fill: "#ffffff",
      },
    });
    gameOverText.setOrigin(0.5, 0.5);

    const restartText = this.make.text({
      x: 660,
      y: 232,
      text: "Go to menu",
      style: {
        font: "12px monospace",
        fill: "#ffffff",
      },
    });
    restartText.setOrigin(0, 0.5);
  }

  update() {
    this.goomba.cursorsHandler(this);
    MapCreator.update(this, { MAP_KEY: "Menu" });
  }
}

export default GameOver;
