import Background from "../core/Background";

export default class ScoreBoard extends Phaser.Scene {
  // GOOMBA = null;

  init(data) {
    this.coinCounter = data.coinCounter;
    this.newMapKey = data.newMapKey;
  }

  preload() {
    this.background = new Background(this); // Load background
  }

  create() {
    this.background.create(this);

    const coinCounterText = this.make.text({
      x: 600,
      y: 200,
      text: `Coins: ${this.coinCounter}`,
      style: {
        font: "48px monospace",
        fill: "#ffffff",
      },
    });

    setTimeout(() => {
      this.scene.start(this.newMapKey);
    }, 10000);
  }

  update() {
    //
  }
}
