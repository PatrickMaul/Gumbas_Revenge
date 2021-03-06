import MapCreator from "../../core/MapCreator";
import Background from "../../core/Background";
import Goomba from "../../models/Goomba";

export default class Level_1_3 extends Phaser.Scene {
  GOOMBA = null;

  preload() {
    this.background = new Background(this); // Load background
    MapCreator.preload(this, { MAP_KEY: "Level_1_3_Map" });
  }

  create() {
    Timer.start();
    this.background.create(this);
    MapCreator.loadLevel(this);
    this.GOOMBA = new Goomba(this, { SPAWN_X: 350 }); // Create goomba
    MapCreator.loadObjects(this);
    MapCreator.addPhysics(this);
    MapCreator.createCamera(this);
  }

  update() {
    this.background.parallaxEffect(this);
    this.GOOMBA.cursorsHandler(this); // Goomba coursor handler
    MapCreator.update(this, { MAP_KEY: "GameOver" });
  }
}
