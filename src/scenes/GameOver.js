import MapCreator from "../core/MapCreator";
import Background from "../core/Background";
import Goomba from "../models/Goomba";

class GameOver extends Phaser.Scene {
  GOOMBA = null;

  preload() {
    console.log("GAMEOVER");
    this.background = new Background(this); // Load background
    MapCreator.preload(this, { MAP_KEY: "Game_Over" });
  }
  create() {
    this.background.create(this);
    MapCreator.loadLevel(this);
    this.GOOMBA = new Goomba(this); // Create goomba
    MapCreator.addPhysics(this);
    MapCreator.createCamera(this);
  }

  update() {
    this.GOOMBA.cursorsHandler(this); // Goomba coursor handler
    MapCreator.update(this, { MAP_KEY: "Preload" });
  }
}
export default GameOver;
