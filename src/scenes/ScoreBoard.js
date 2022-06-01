import Background from "../core/Background";

export default class ScoreBoard extends Phaser.Scene {
  /**
   * Loading passed scene data.
   *
   * MapCreator calls `scene.start('ScoreBoard',{key: value [, key: value, ...]})`
   *
   * @param {Object} data
   */
  init(data) {
    this.coinCounter = data.coinCounter;
    this.newMapKey = data.newMapKey;
  }

  preload() {
    this.background = new Background(this);
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
    coinCounterText.setOrigin(0.5, 0.5);

    setTimeout(() => {
      this.scene.start(this.newMapKey);
    }, 10000);
  }
}
