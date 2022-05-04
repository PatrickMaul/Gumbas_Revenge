import "phaser";
import Preload from "./scenes/Preload";
import Menu from "./scenes/menu";
import TestLevel from "./scenes/levels/test";
import Timer from "./core/Timer";
import SBMTestLevel from "./scenes/SBMTestLevel";

window.timer = new Timer()
class Game extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      backgroundColor: "#162c38",
      width: 800,
      height: 448,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 500 },
        },
      },
    };

    super(config);

    this.scene.add("Preload", Preload, false);
    this.scene.add("Menu", Menu, false);
    this.scene.add("TestLevel", TestLevel, false);
    this.scene.add("SBMTestLevel", SBMTestLevel, false);
    this.scene.start("SBMTestLevel");
  }
}

new Game();
