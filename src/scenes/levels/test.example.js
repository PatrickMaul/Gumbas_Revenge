import MapCreator from "../../core/MapCreator";
import Background from "../../core/Background";
import Goomba from "../../models/Goomba";

export default class TestLevel extends Phaser.Scene {
  goomba = null;

  preload() {
    this.background = new Background(this);
    MapCreator.preload(this, { MAP_KEY: "Level_1_1_Map" }); // Loading level map
  }
  create() {
    this.background.create(this); // Add parallax background
    MapCreator.loadLevel(this); // Loading level on screen
    this.goomba = new Goomba(this, { spawnX: 350 }); // Add goomba
    MapCreator.loadObjects(this); // Add Objects (Coins)
    MapCreator.addPhysics(this); // Add physics (Colliders, etc.)
    MapCreator.createCamera(this); // Add following cam (follows goomba)
  }

  update() {
    this.goomba.cursorsHandler(this); // Add goomba coursor handler
    MapCreator.update(this, { MAP_KEY: "TestLevel" }); // Add level update handler
  }
}
