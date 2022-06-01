import MapCreator from "../../core/MapCreator";
import Background from "../../core/Background";
import Goomba from "../../models/Goomba";

class Level_1_3 extends Phaser.Scene {
  goomba = null;

  preload() {
    this.background = new Background(this);
    MapCreator.preload(this, { MAP_KEY: "Level_1_3_Map" });
  }

  create() {
    this.background.create(this);
    MapCreator.loadLevel(this);
    this.goomba = new Goomba(this, { spawnX: 350 });
    MapCreator.loadObjects(this);
    MapCreator.addPhysics(this);
    MapCreator.createCamera(this);
  }

  update() {
    this.goomba.cursorsHandler(this);
    MapCreator.update(this, { MAP_KEY: "GameOver" });
  }
}
export default Level_1_3;
