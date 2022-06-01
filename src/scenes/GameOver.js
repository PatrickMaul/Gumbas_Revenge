import MapCreator from "../core/MapCreator";
import Background from "../core/Background";
import Goomba from "../models/Goomba";

class GameOver extends Phaser.Scene {
  GOOMBA = null;

  preload() {
    this.background = new Background(this); // Load background
    MapCreator.preload(this, { MAP_KEY: "Game_Over" });
  }

  create() {
    // Start timer
    Timer.start();
    this.background.create(this);
    MapCreator.loadLevel(this);
    this.GOOMBA = new Goomba(this); // Create goomba
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
      x: 440,
      y: 248,
      text: "Go to menu",
      style: {
        font: "12px monospace",
        fill: "#ffffff",
      },
    });
    restartText.setOrigin(0, 0.5);
  }

  update() {
    this.GOOMBA.cursorsHandler(this); // Goomba coursor handler
    MapCreator.update(this, { MAP_KEY: "Menu" });
  }
}

export default GameOver;
