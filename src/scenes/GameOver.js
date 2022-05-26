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
  }

  update() {
    this.GOOMBA.cursorsHandler(this); // Goomba coursor handler
    MapCreator.update(this, { MAP_KEY: "Menu" });
  }
}

export default GameOver;
