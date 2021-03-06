import "phaser";
// Scenes
import Preload from "./scenes/Preload";
import Menu from "./scenes/menu";
import TestLevel from "./scenes/levels/test";
import Tutorial from "./scenes/levels/Tutorial";
import Level_1_1 from "./scenes/levels/Level_1_1";
import Level_1_2 from "./scenes/levels/Level_1_2";
import Level_1_3 from "./scenes/levels/Level_1_3";
import Timer from "./core/Timer";
import GameOver from "./scenes/GameOver";

window.Timer = Timer;
class Game extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      backgroundColor: "#162c38",
      width: 4112, // 4112
      height: 448, // 448
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
    this.scene.add("GameOver", GameOver, false);

    // Levels
    this.scene.add("Tutorial", Tutorial, false);
    this.scene.add("Level_1_1", Level_1_1, false);
    this.scene.add("Level_1_2", Level_1_2, false);
    this.scene.add("Level_1_3", Level_1_3, false);

    // Start
    this.scene.start("Preload");
  }
}

new Game();
