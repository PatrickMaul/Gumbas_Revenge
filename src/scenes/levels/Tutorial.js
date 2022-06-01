import MapCreator from "../../core/MapCreator";
import Background from "../../core/Background";
import Goomba from "../../models/Goomba";

export default class Tutorial extends Phaser.Scene {
  GOOMBA = null;

  preload() {
    this.background = new Background(this); // Load background
    MapCreator.preload(this, { MAP_KEY: "Tutorial" });
  }

  create() {
    Timer.start();
    this.background.create(this);
    MapCreator.loadLevel(this);
    this.GOOMBA = new Goomba(this, { SPAWN_X: 350 }); // Create goomba
    MapCreator.loadObjects(this);
    MapCreator.addPhysics(this);
    MapCreator.createCamera(this);

    const moveArrowKeyText = this.make.text({
      x: 360,
      y: 240,
      text: "Arrow keys to move",
      style: {
        font: "16px monospace",
        fill: "#ffffff",
      },
    });
    moveArrowKeyText.setOrigin(0.5, 0.5);

    const useArrowKeyToJump = this.make.text({
      x: 640,
      y: 240,
      text: "Arrow up key to jump",
      style: {
        font: "16px monospace",
        fill: "#ffffff",
      },
    });

    useArrowKeyToJump.setOrigin(0.5, 0.5);

    const spaceToBigJump = this.make.text({
      x: 1040,
      y: 240,
      text: "Space to big jump",
      style: {
        font: "16px monospace",
        fill: "#ffffff",
      },
    });

    spaceToBigJump.setOrigin(0.5, 0.5);

    const enemyText = this.make.text({
      x: 1380,
      y: 240,
      text: "Enemy!",
      style: {
        font: "16px monospace",
        fill: "#ffffff",
      },
    });

    enemyText.setOrigin(0.5, 0.5);

    const finishFakeText = this.make.text({
      x: 1840,
      y: 240,
      text: "Jump into axt to finish",
      style: {
        font: "16px monospace",
        fill: "#ffffff",
      },
    });

    finishFakeText.setOrigin(0.5, 0.5);

    const finisText = this.make.text({
      x: 2240,
      y: 240,
      text: "Jk, this is finish",
      style: {
        font: "16px monospace",
        fill: "#ffffff",
      },
    });

    finisText.setOrigin(0.5, 0.5);
  }

  update() {
    this.background.parallaxEffect(this);
    this.GOOMBA.cursorsHandler(this); // Goomba coursor handler
    MapCreator.update(this, { MAP_KEY: "Level_1_1" });
  }
}
