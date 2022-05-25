import "phaser";
import Preload from "./scenes/Preload";
import Menu from "./scenes/menu";
import TestLevel from "./scenes/levels/test";
import Timer from "./core/Timer";
import GameOver from "./scenes/GameOver";

window.timer = new Timer();
class Game extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      backgroundColor: "#162c38",
      width: 4112, //4112
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
    this.scene.start("Preload");
  }
}

new Game();
