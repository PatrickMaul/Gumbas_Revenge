import MapCreator from "../../core/MapCreator";
import Background from "../../core/Background";
import Goomba from "../../models/Goomba";

class TestLevel extends Phaser.Scene {
  GOOMBA = null;

  preload() {
    this.background = new Background(this); // Load background
    MapCreator.preload(this, { MAP_KEY: "First_Test_Level_PM" });
  }

  create() {
    this.background.create(this);
    MapCreator.loadLevel(this);
    this.GOOMBA = new Goomba(this, { SPAWN_X: 350 }); // Create goomba
    MapCreator.loadObjects(this);
    MapCreator.addPhysics(this);
    MapCreator.createCamera(this);
  }

  update() {
    this.GOOMBA.cursorsHandler(this); // Goomba coursor handler
    MapCreator.update(this, { MAP_KEY: "Level_3" });
  }
}
export default TestLevel;
